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
  type: "text" | "image";
  content?: string;
  url?: string;
}

interface Blog {
  id: string;
  title: string;
  blocks: Block[];
  createdAt?: { seconds: number };
}

export default function BlogDetailPage() {
  const params = useParams();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      if (!params?.id || typeof params.id !== "string") return;

      try {
        const docRef = doc(db, "blogs", params.id);
        const snapshot = await getDoc(docRef);

        if (snapshot.exists()) {
          const data = snapshot.data() as Omit<Blog, "id">;
          setBlog({ ...data, id: snapshot.id });
        } else {
          console.error("❌ Blog not found!");
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [params?.id]);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center text-muted-foreground">
        ⏳ Đang tải bài viết...
      </div>
    );

  if (!blog)
    return (
      <div className="min-h-screen flex items-center justify-center text-muted-foreground">
        😢 Không tìm thấy bài viết.
      </div>
    );

  return (
    <div className="relative min-h-screen">
      <SpaceBackground />
      <Header />

      <main className="relative z-10 py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Title Section */}
          <div className="text-center mb-12">
            <div className="text-6xl mb-6 animate-float">📖</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              {blog.title}
            </h1>
            {blog.createdAt && (
              <div className="flex items-center justify-center text-sm text-muted-foreground gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(blog.createdAt.seconds * 1000).toLocaleDateString(
                  "vi-VN"
                )}
              </div>
            )}
          </div>

          {/* Content Section */}
          <article className="bg-card/70 backdrop-blur-md p-8 rounded-2xl border border-border/50 shadow-md space-y-8">
            {blog.blocks?.map((block, index) => (
              <div key={index} className="mb-8">
                {block.type === "text" && (
                  <p className="text-lg leading-relaxed text-foreground whitespace-pre-wrap">
                    {block.content}
                  </p>
                )}
                {block.type === "image" && block.url && (
                  <div className="my-6">
                    <img
                      src={block.url}
                      alt="blog"
                      className="rounded-xl shadow-lg max-h-[500px] object-cover mx-auto"
                    />
                  </div>
                )}
              </div>
            ))}
          </article>

          {/* Back Button */}
          <div className="text-center mt-12">
            <a
              href="/blog"
              className="inline-block px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all">
              ← Quay lại danh sách
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
