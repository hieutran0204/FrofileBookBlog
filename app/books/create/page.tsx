"use client";

import { useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SpaceBackground } from "@/components/space-background";
import { Card } from "@/components/ui/card";
import { Rocket } from "lucide-react";

export default function BookCreatePage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [coverUrl, setCoverUrl] = useState("");
  const [pdfUrl, setPdfUrl] = useState("");
  const [loading, setLoading] = useState(false);

  // ✅ Chuyển link Google Drive thành link nhúng hiển thị được
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

  const handleSave = async () => {
    if (!title.trim()) return alert("⚠️ Nhập tiêu đề sách!");
    if (!pdfUrl.trim()) return alert("⚠️ Nhập link PDF!");
    if (!coverUrl.trim()) return alert("⚠️ Nhập link ảnh bìa!");

    setLoading(true);
    try {
      await addDoc(collection(db, "books"), {
        title,
        description,
        coverUrl,
        fileUrl: pdfUrl, // ✅ lưu theo key "fileUrl" để đồng bộ với trang xem chi tiết
        createdAt: Timestamp.now(),
      });
      alert("✅ Sách đã được thêm!");
      setTitle("");
      setDescription("");
      setCoverUrl("");
      setPdfUrl("");
    } catch (err) {
      console.error(err);
      alert("❌ Có lỗi khi thêm sách!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen">
      <SpaceBackground />
      <Header />

      <main className="relative z-10 py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="text-6xl mb-6 animate-float">📚</div>
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Thêm Sách Mới
            </h1>
            <p className="text-lg text-muted-foreground">
              Thêm sách với mô tả, ảnh bìa và file PDF từ Google Drive 🚀
            </p>
          </div>

          {/* Form */}
          <Card className="p-8 bg-card/80 backdrop-blur-md border-border/50 shadow-lg space-y-6">
            {/* Tiêu đề */}
            <input
              className="w-full text-xl border border-border rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-primary/40 bg-background"
              placeholder="Nhập tiêu đề sách..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            {/* Mô tả */}
            <textarea
              className="w-full border border-border rounded-lg p-4 bg-background focus:outline-none focus:ring-2 focus:ring-primary/40 min-h-[120px]"
              placeholder="Nhập mô tả sách..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            {/* Ảnh bìa */}
            <input
              type="text"
              className="w-full border border-border rounded-lg p-4 bg-background focus:outline-none focus:ring-2 focus:ring-primary/40"
              placeholder="Dán link ảnh bìa sách (Google Drive hoặc URL trực tiếp)..."
              value={coverUrl}
              onChange={(e) => setCoverUrl(e.target.value)}
            />
            {coverUrl && (
              <img
                src={coverUrl}
                alt="Cover Preview"
                className="rounded-lg shadow-md w-full max-h-[400px] object-cover"
              />
            )}

            {/* PDF */}
            <input
              type="text"
              className="w-full border border-border rounded-lg p-4 bg-background focus:outline-none focus:ring-2 focus:ring-primary/40"
              placeholder="Dán link PDF sách (Google Drive)..."
              value={pdfUrl}
              onChange={(e) => setPdfUrl(e.target.value)}
            />

            {/* ✅ Xem trước PDF */}
            {pdfUrl && (
              <div className="my-6">
                <iframe
                  src={getDriveEmbedUrl(pdfUrl)}
                  width="100%"
                  height="500"
                  className="rounded-xl shadow-md"
                  allowFullScreen
                  sandbox="allow-scripts allow-same-origin allow-popups"
                />
              </div>
            )}

            {/* Nút lưu */}
            <div className="text-center pt-6">
              <button
                onClick={handleSave}
                disabled={loading}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-white bg-gradient-to-r from-primary via-secondary to-accent shadow-md hover:opacity-90 transition-all ${
                  loading ? "opacity-60 cursor-not-allowed" : ""
                }`}>
                <Rocket className="w-5 h-5" />
                {loading ? "Đang thêm..." : "Thêm sách ✨"}
              </button>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
