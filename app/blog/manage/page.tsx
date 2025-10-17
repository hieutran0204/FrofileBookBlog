"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SpaceBackground } from "@/components/space-background";
import { Card } from "@/components/ui/card";
import { Pencil, Trash2, PlusCircle } from "lucide-react";

interface Blog {
  id: string;
  title: string;
  createdAt?: { seconds: number };
  blocks?: { type: string }[];
}

export default function BlogManagePage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  // Lấy danh sách bài viết
  useEffect(() => {
    const fetchBlogs = async () => {
      const querySnapshot = await getDocs(collection(db, "blogs"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Blog[];
      setBlogs(data);
      setLoading(false);
    };
    fetchBlogs();
  }, []);

  // Xóa bài viết
  const handleDelete = async (id: string) => {
    if (confirm("Bạn có chắc muốn xóa bài viết này không?")) {
      await deleteDoc(doc(db, "blogs", id));
      setBlogs((prev) => prev.filter((b) => b.id !== id));
      alert("🗑️ Đã xóa bài viết!");
    }
  };

  return (
    <div className="relative min-h-screen">
      <SpaceBackground />
      <Header />

      <main className="relative z-10 py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10">
            <div className="text-6xl mb-6 animate-float">🗂️</div>
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Quản lý bài viết
            </h1>
            <p className="text-lg text-muted-foreground">
              Kiểm tra, sửa hoặc xóa các bài blog bạn đã đăng ✨
            </p>
          </div>

          <div className="text-right mb-6">
            <a
              href="/blog/create"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-all">
              <PlusCircle className="w-4 h-4" /> Viết bài mới
            </a>
          </div>

          {loading ? (
            <p className="text-center text-lg">⏳ Đang tải danh sách...</p>
          ) : blogs.length === 0 ? (
            <p className="text-center text-lg text-muted-foreground">
              Chưa có bài viết nào được đăng 📝
            </p>
          ) : (
            <div className="grid gap-6">
              {blogs.map((blog) => (
                <Card
                  key={blog.id}
                  className="p-6 flex flex-col md:flex-row justify-between items-start md:items-center bg-card/80 backdrop-blur-md border-border/50 shadow-md hover:shadow-lg transition">
                  <div>
                    <h2 className="text-2xl font-semibold">{blog.title}</h2>
                    <p className="text-sm text-muted-foreground mt-1">
                      📅{" "}
                      {blog.createdAt
                        ? new Date(
                            blog.createdAt.seconds * 1000
                          ).toLocaleString("vi-VN")
                        : "Không rõ thời gian"}
                      {" • "}
                      🧩 {blog.blocks?.length || 0} block
                    </p>
                  </div>

                  <div className="flex gap-3 mt-4 md:mt-0">
                    <a
                      href={`/blog/edit/${blog.id}`}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-secondary-foreground hover:opacity-90 transition">
                      <Pencil className="w-4 h-4" />
                      Sửa
                    </a>

                    <button
                      onClick={() => handleDelete(blog.id)}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600 text-white hover:opacity-90 transition">
                      <Trash2 className="w-4 h-4" />
                      Xóa
                    </button>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
