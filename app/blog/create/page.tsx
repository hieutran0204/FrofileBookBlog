"use client";

import { useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SpaceBackground } from "@/components/space-background";
import { Card } from "@/components/ui/card";
import { PlusCircle, Image, Type, Trash2, Rocket } from "lucide-react";

interface Block {
  type: "text" | "image";
  content?: string;
  url?: string;
}

export default function BlogCreatePage() {
  const [title, setTitle] = useState("");
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [loading, setLoading] = useState(false);

  const addTextBlock = () =>
    setBlocks((prev) => [...prev, { type: "text", content: "" }]);
  const addImageBlock = () =>
    setBlocks((prev) => [...prev, { type: "image", url: "" }]);
  const removeBlock = (index: number) =>
    setBlocks((prev) => prev.filter((_, i) => i !== index));

  const handleTextChange = (value: string, index: number) =>
    setBlocks((prev) => {
      const updated = [...prev];
      updated[index].content = value;
      return updated;
    });

  const handleImageUrlChange = (value: string, index: number) =>
    setBlocks((prev) => {
      const updated = [...prev];
      updated[index].url = value;
      return updated;
    });

  const handleSave = async () => {
    if (!title.trim()) {
      alert("⚠️ Nhập tiêu đề bài viết trước khi đăng!");
      return;
    }

    const filteredBlocks = blocks.filter(
      (b) =>
        (b.type === "text" && b.content?.trim()) ||
        (b.type === "image" && b.url?.trim())
    );

    if (filteredBlocks.length === 0) {
      alert("⚠️ Bài viết cần ít nhất 1 nội dung hoặc hình ảnh!");
      return;
    }

    setLoading(true);
    try {
      await addDoc(collection(db, "blogs"), {
        title,
        blocks: filteredBlocks,
        createdAt: Timestamp.now(),
      });
      alert("✅ Bài viết đã được đăng!");
      setTitle("");
      setBlocks([]);
    } catch (err) {
      console.error(err);
      alert("❌ Có lỗi khi đăng bài!");
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
          {/* Title Section */}
          <div className="text-center mb-12">
            <div className="text-6xl mb-6 animate-float">🪶</div>
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Viết Blog Mới
            </h1>
            <p className="text-lg text-muted-foreground">
              Chia sẻ cảm hứng, kinh nghiệm và hành trình công nghệ của bạn 🚀
            </p>
          </div>

          {/* Create Blog Card */}
          <Card className="p-8 bg-card/80 backdrop-blur-md border-border/50 shadow-lg space-y-6">
            {/* Tiêu đề */}
            <input
              className="w-full text-xl border border-border rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-primary/40 bg-background"
              placeholder="Nhập tiêu đề bài viết..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            {/* Blocks */}
            {blocks.map((block, index) => (
              <div
                key={index}
                className="relative border border-border rounded-lg p-4 bg-muted/30 backdrop-blur-sm">
                <button
                  onClick={() => removeBlock(index)}
                  className="absolute top-2 right-2 text-red-500 hover:text-red-700 transition"
                  title="Xóa block">
                  <Trash2 className="w-4 h-4" />
                </button>

                {block.type === "text" && (
                  <textarea
                    value={block.content}
                    onChange={(e) => handleTextChange(e.target.value, index)}
                    placeholder="Nhập nội dung bài viết..."
                    className="w-full border border-border rounded-lg p-3 bg-background min-h-[120px] focus:outline-none focus:ring-2 focus:ring-primary/40"
                  />
                )}

                {block.type === "image" && (
                  <div className="flex flex-col gap-3">
                    <input
                      type="text"
                      placeholder="Dán link ảnh (URL)..."
                      value={block.url}
                      onChange={(e) =>
                        handleImageUrlChange(e.target.value, index)
                      }
                      className="border border-border p-3 rounded-lg w-full bg-background focus:outline-none focus:ring-2 focus:ring-primary/40"
                    />
                    {block.url && (
                      <img
                        src={block.url}
                        alt="Preview"
                        className="rounded-lg shadow-md w-full max-h-[400px] object-cover"
                      />
                    )}
                  </div>
                )}
              </div>
            ))}

            {/* Nút thêm block */}
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={addTextBlock}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-all">
                <Type className="w-4 h-4" /> Thêm Nội dung
              </button>
              <button
                onClick={addImageBlock}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-secondary-foreground hover:opacity-90 transition-all">
                <Image className="w-4 h-4" /> Thêm Hình ảnh
              </button>
            </div>

            {/* Nút đăng bài */}
            <div className="text-center pt-6">
              <button
                onClick={handleSave}
                disabled={loading}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-white bg-gradient-to-r from-primary via-secondary to-accent shadow-md hover:opacity-90 transition-all ${
                  loading ? "opacity-60 cursor-not-allowed" : ""
                }`}>
                <Rocket className="w-5 h-5" />
                {loading ? "Đang đăng..." : "Đăng bài ✨"}
              </button>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
