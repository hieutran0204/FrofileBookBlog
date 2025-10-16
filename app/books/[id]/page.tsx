"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SpaceBackground } from "@/components/space-background";
import { Calendar } from "lucide-react";

interface Block {
  type: "text" | "image" | "pdf";
  content?: string;
  url?: string;
}

interface Book {
  id: string;
  title: string;
  fileUrl?: string; // link Google Drive PDF
  blocks?: Block[];
  createdAt?: { seconds: number };
}

export default function BookDetailPage() {
  const params = useParams();
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBook = async () => {
      if (!params?.id || typeof params.id !== "string") return;
      try {
        const docRef = doc(db, "books", params.id);
        const snapshot = await getDoc(docRef);
        if (snapshot.exists()) {
          const data = snapshot.data() as Omit<Book, "id">;
          setBook({ ...data, id: snapshot.id });
        } else {
          console.error("Book not found!");
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchBook();
  }, [params?.id]);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center text-muted-foreground">
        ⏳ Đang tải sách...
      </div>
    );

  if (!book)
    return (
      <div className="min-h-screen flex items-center justify-center text-muted-foreground">
        😢 Không tìm thấy sách.
      </div>
    );

  // ✅ Hàm tự động xử lý mọi dạng link Google Drive
  const getDriveEmbedUrl = (url: string) => {
    if (!url || !url.includes("drive.google.com")) return url;

    // Tìm ID file trong các dạng link khác nhau
    const idMatch =
      url.match(/\/d\/([a-zA-Z0-9_-]+)/) || // /file/d/<id>/
      url.match(/id=([a-zA-Z0-9_-]+)/); // open?id=<id>

    const fileId = idMatch ? idMatch[1] : null;

    if (fileId) {
      return `https://drive.google.com/file/d/${fileId}/preview`;
    }

    return url; // fallback nếu không phải link hợp lệ
  };

  return (
    <div className="relative min-h-screen">
      <SpaceBackground />
      <Header />

      <main className="relative z-10 py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Title */}
          <div className="text-center mb-12">
            <div className="text-6xl mb-6 animate-float">📚</div>
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              {book.title}
            </h1>
            {book.createdAt && (
              <div className="flex items-center justify-center text-sm text-muted-foreground gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(book.createdAt.seconds * 1000).toLocaleDateString(
                  "vi-VN"
                )}
              </div>
            )}
          </div>

          {/* File PDF */}
          {book.fileUrl && (
            <div className="mb-12">
              <iframe
                src={getDriveEmbedUrl(book.fileUrl)}
                width="100%"
                height="600"
                className="rounded-xl shadow-lg"
                allow="autoplay"
                allowFullScreen
                sandbox="allow-scripts allow-same-origin allow-popups"
              />
            </div>
          )}

          {/* Blocks */}
          <article className="bg-card/70 backdrop-blur-md p-8 rounded-2xl border border-border/50 shadow-md space-y-8">
            {book.blocks?.map((block, idx) => (
              <div key={idx} className="mb-8">
                {block.type === "text" && (
                  <p className="text-lg leading-relaxed text-foreground whitespace-pre-wrap">
                    {block.content}
                  </p>
                )}
                {block.type === "image" && block.url && (
                  <div className="my-6">
                    <img
                      src={block.url}
                      alt="book"
                      className="rounded-xl shadow-lg max-h-[500px] object-cover mx-auto"
                    />
                  </div>
                )}
                {block.type === "pdf" && block.url && (
                  <div className="my-6">
                    <iframe
                      src={getDriveEmbedUrl(block.url)}
                      width="100%"
                      height="600"
                      className="rounded-xl shadow-lg"
                      allow="autoplay"
                      allowFullScreen
                      sandbox="allow-scripts allow-same-origin allow-popups"
                    />
                  </div>
                )}
              </div>
            ))}
          </article>

          {/* Back */}
          <div className="text-center mt-12">
            <a
              href="/books"
              className="inline-block px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all">
              ← Quay lại danh sách sách
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
