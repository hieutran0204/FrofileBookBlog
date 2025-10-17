"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { db } from "@/lib/firebase";
import { doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SpaceBackground } from "@/components/space-background";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Rocket, Trash2 } from "lucide-react";

// ✅ Hàm chuyển link Google Drive thành link nhúng
const getDriveEmbedUrl = (url: string) => {
  if (!url) return "";
  const idMatch =
    url.match(/\/d\/([a-zA-Z0-9_-]+)/) || url.match(/id=([a-zA-Z0-9_-]+)/);
  const fileId = idMatch ? idMatch[1] : null;

  if (fileId) {
    const directUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
    return `https://docs.google.com/gview?url=${encodeURIComponent(
      directUrl
    )}&embedded=true`;
  }
  return url;
};

export default function EditBookPage() {
  const { id } = useParams();
  const router = useRouter();

  const [book, setBook] = useState({
    title: "",
    description: "",
    coverUrl: "",
    pdfUrl: "",
  });
  const [loading, setLoading] = useState(true);

  // 🔹 Lấy dữ liệu sách
  useEffect(() => {
    const fetchBook = async () => {
      const ref = doc(db, "books", id as string);
      const snap = await getDoc(ref);
      if (snap.exists()) {
        const data = snap.data();
        setBook({
          title: data.title || "",
          description: data.description || "",
          coverUrl: data.coverUrl || "",
          pdfUrl: data.fileUrl || "", // đồng bộ key Firestore
        });
      } else {
        alert("❌ Không tìm thấy sách!");
        router.push("/books/manage");
      }
      setLoading(false);
    };
    fetchBook();
  }, [id, router]);

  // 🔹 Lưu thay đổi
  const handleSave = async () => {
    if (!book.title.trim()) return alert("⚠️ Nhập tiêu đề sách!");
    if (!book.pdfUrl.trim()) return alert("⚠️ Nhập link PDF!");
    if (!book.coverUrl.trim()) return alert("⚠️ Nhập link ảnh bìa!");

    const ref = doc(db, "books", id as string);
    await updateDoc(ref, {
      title: book.title,
      description: book.description,
      coverUrl: book.coverUrl,
      fileUrl: book.pdfUrl,
    });

    alert("✅ Cập nhật thành công!");
    router.push("/books/manage");
  };

  // 🔹 Xóa sách
  const handleDelete = async () => {
    if (!confirm("Bạn có chắc muốn xóa sách này không?")) return;
    await deleteDoc(doc(db, "books", id as string));
    alert("🗑️ Đã xóa sách!");
    router.push("/books/manage");
  };

  if (loading)
    return (
      <p className="text-center mt-20 text-lg animate-pulse">
        ⏳ Đang tải sách...
      </p>
    );

  return (
    <div className="relative min-h-screen">
      <SpaceBackground />
      <Header />

      <main className="relative z-10 py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold mb-6">📘 Chỉnh sửa Sách</h1>

          <Card className="p-8 bg-card/80 backdrop-blur-md border-border/50 shadow-lg space-y-6">
            {/* Tiêu đề */}
            <input
              className="w-full text-xl border border-border rounded-lg p-4 bg-background focus:outline-none focus:ring-2 focus:ring-primary/40"
              placeholder="Tiêu đề sách..."
              value={book.title}
              onChange={(e) => setBook({ ...book, title: e.target.value })}
            />

            {/* Mô tả */}
            <textarea
              className="w-full border border-border rounded-lg p-4 bg-background focus:outline-none focus:ring-2 focus:ring-primary/40 min-h-[120px]"
              placeholder="Mô tả sách..."
              value={book.description}
              onChange={(e) =>
                setBook({ ...book, description: e.target.value })
              }
            />

            {/* Ảnh bìa */}
            <input
              type="text"
              className="w-full border border-border rounded-lg p-4 bg-background focus:outline-none focus:ring-2 focus:ring-primary/40"
              placeholder="Dán link ảnh bìa..."
              value={book.coverUrl}
              onChange={(e) => setBook({ ...book, coverUrl: e.target.value })}
            />
            {book.coverUrl && (
              <img
                src={book.coverUrl}
                alt="Ảnh bìa"
                className="rounded-lg shadow-md w-full max-h-[400px] object-cover"
              />
            )}

            {/* PDF */}
            <input
              type="text"
              className="w-full border border-border rounded-lg p-4 bg-background focus:outline-none focus:ring-2 focus:ring-primary/40"
              placeholder="Dán link PDF sách (Google Drive)..."
              value={book.pdfUrl}
              onChange={(e) => setBook({ ...book, pdfUrl: e.target.value })}
            />

            {book.pdfUrl && (
              <div className="my-6">
                <iframe
                  src={getDriveEmbedUrl(book.pdfUrl)}
                  width="100%"
                  height="500"
                  className="rounded-xl shadow-md"
                  allowFullScreen
                  sandbox="allow-scripts allow-same-origin allow-popups"
                />
              </div>
            )}

            {/* Nút lưu & xóa */}
            <div className="flex justify-between items-center pt-6">
              <Button
                onClick={handleDelete}
                variant="destructive"
                className="flex items-center gap-2 bg-red-600 hover:bg-red-700">
                <Trash2 className="w-5 h-5" />
                Xóa sách
              </Button>

              <Button
                onClick={handleSave}
                className="flex items-center gap-2 bg-green-600 text-white hover:bg-green-700">
                <Rocket className="w-5 h-5" />
                Lưu thay đổi
              </Button>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
