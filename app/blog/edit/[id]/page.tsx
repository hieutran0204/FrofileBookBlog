"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { db } from "@/lib/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SpaceBackground } from "@/components/space-background";
import { Button } from "@/components/ui/button";
import { Plus, Trash2, MoveUp, MoveDown, ImagePlus } from "lucide-react";

interface Block {
  type: "text" | "image";
  content?: string;
  url?: string;
}

export default function EditBlogPage() {
  const { id } = useParams();
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [loading, setLoading] = useState(true);

  // 🔹 Lấy dữ liệu bài viết
  useEffect(() => {
    const fetchBlog = async () => {
      const docRef = doc(db, "blogs", id as string);
      const snap = await getDoc(docRef);
      if (snap.exists()) {
        const data = snap.data();
        setTitle(data.title);
        setBlocks(data.blocks || []);
      }
      setLoading(false);
    };
    fetchBlog();
  }, [id]);

  // 🔹 Lưu thay đổi
  const handleSave = async () => {
    const docRef = doc(db, "blogs", id as string);
    await updateDoc(docRef, { title, blocks });
    alert("✅ Đã lưu thay đổi!");
    router.push("/blog/manage");
  };

  // 🔹 Thêm block mới
  const addBlock = (type: "text" | "image", index?: number) => {
    const newBlock: Block =
      type === "text"
        ? { type: "text", content: "" }
        : { type: "image", url: "" };
    const newBlocks = [...blocks];
    if (index !== undefined) newBlocks.splice(index + 1, 0, newBlock);
    else newBlocks.push(newBlock);
    setBlocks(newBlocks);
  };

  // 🔹 Xóa block
  const deleteBlock = (index: number) => {
    if (confirm("Xóa khối này?")) {
      const newBlocks = [...blocks];
      newBlocks.splice(index, 1);
      setBlocks(newBlocks);
    }
  };

  // 🔹 Sửa text
  const handleTextChange = (index: number, value: string) => {
    const newBlocks = [...blocks];
    newBlocks[index].content = value;
    setBlocks(newBlocks);
  };

  // 🔹 Sửa URL ảnh
  const handleImageUrlChange = (index: number, value: string) => {
    const newBlocks = [...blocks];
    newBlocks[index].url = value;
    setBlocks(newBlocks);
  };

  // 🔹 Di chuyển block
  const moveBlock = (index: number, direction: "up" | "down") => {
    const newBlocks = [...blocks];
    const targetIndex = direction === "up" ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= newBlocks.length) return;
    [newBlocks[index], newBlocks[targetIndex]] = [
      newBlocks[targetIndex],
      newBlocks[index],
    ];
    setBlocks(newBlocks);
  };

  if (loading)
    return (
      <p className="text-center mt-20 text-lg animate-pulse">
        ⏳ Đang tải bài viết...
      </p>
    );

  return (
    <div className="relative min-h-screen">
      <SpaceBackground />
      <Header />

      <main className="relative z-10 py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold mb-6">🛠️ Chỉnh sửa bài viết</h1>

          {/* Tiêu đề */}
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full text-2xl font-semibold mb-8 p-3 border rounded-lg bg-background"
            placeholder="Tiêu đề bài viết..."
          />

          {/* Các block nội dung */}
          <div className="space-y-6">
            {blocks.map((block, index) => (
              <div
                key={index}
                className="border rounded-lg p-4 bg-card/60 backdrop-blur-md shadow-md">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-muted-foreground">
                    {block.type === "text" ? "📝 Văn bản" : "🖼️ Hình ảnh"}
                  </span>
                  <div className="flex gap-2">
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => moveBlock(index, "up")}
                      title="Di chuyển lên">
                      <MoveUp className="w-4 h-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => moveBlock(index, "down")}
                      title="Di chuyển xuống">
                      <MoveDown className="w-4 h-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => deleteBlock(index)}
                      title="Xóa block">
                      <Trash2 className="w-4 h-4 text-red-500" />
                    </Button>
                  </div>
                </div>

                {block.type === "text" ? (
                  <textarea
                    value={block.content}
                    onChange={(e) => handleTextChange(index, e.target.value)}
                    className="w-full p-3 border rounded-lg min-h-[120px] bg-background"
                    placeholder="Nhập nội dung văn bản..."
                  />
                ) : (
                  <div className="flex flex-col items-start gap-3">
                    <input
                      type="text"
                      value={block.url}
                      onChange={(e) =>
                        handleImageUrlChange(index, e.target.value)
                      }
                      placeholder="Dán URL ảnh..."
                      className="w-full p-3 border rounded-lg bg-background"
                    />
                    {block.url && (
                      <img
                        src={block.url}
                        alt="Ảnh minh họa"
                        className="max-h-64 rounded-lg border shadow-sm"
                      />
                    )}
                  </div>
                )}

                {/* Nút thêm block mới sau khối hiện tại */}
                <div className="flex justify-center mt-4 gap-3">
                  <Button
                    variant="outline"
                    onClick={() => addBlock("text", index)}
                    className="flex items-center gap-2">
                    <Plus className="w-4 h-4" /> Thêm văn bản
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => addBlock("image", index)}
                    className="flex items-center gap-2">
                    <ImagePlus className="w-4 h-4" /> Thêm hình ảnh
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Nút thêm cuối bài */}
          <div className="flex justify-center gap-4 mt-8">
            <Button onClick={() => addBlock("text")} variant="outline">
              ➕ Thêm đoạn văn
            </Button>
            <Button onClick={() => addBlock("image")} variant="outline">
              🖼️ Thêm ảnh
            </Button>
          </div>

          {/* Nút lưu thay đổi */}
          <Button
            onClick={handleSave}
            className="mt-10 w-full bg-green-600 text-white text-lg py-3 hover:opacity-90">
            💾 Lưu thay đổi
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
