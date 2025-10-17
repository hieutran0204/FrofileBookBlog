"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SpaceBackground } from "@/components/space-background";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Edit3, Trash2, BookOpen } from "lucide-react";

interface Book {
  id: string;
  title: string;
  description?: string;
  coverUrl?: string;
  fileUrl?: string;
  createdAt?: { seconds: number };
}

export default function ManageBooksPage() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  // 🔹 Lấy danh sách sách
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const q = query(collection(db, "books"), orderBy("createdAt", "desc"));
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Book[];
        setBooks(data);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu sách:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  // 🔹 Xóa sách
  const handleDelete = async (id: string) => {
    if (!confirm("Bạn có chắc muốn xóa sách này không?")) return;
    await deleteDoc(doc(db, "books", id));
    setBooks((prev) => prev.filter((book) => book.id !== id));
    alert("🗑️ Đã xóa sách!");
  };

  return (
    <div className="relative min-h-screen">
      <SpaceBackground />
      <Header />

      <main className="relative z-10 py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Tiêu đề */}
          <div className="text-center mb-16">
            <div className="text-6xl mb-6 animate-float">📚</div>
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Quản Lý Sách
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Xem, chỉnh sửa hoặc xóa các sách bạn đã đăng tải.
            </p>
          </div>

          {/* Danh sách */}
          {loading ? (
            <p className="text-center text-muted-foreground">
              ⏳ Đang tải dữ liệu...
            </p>
          ) : books.length === 0 ? (
            <p className="text-center text-muted-foreground">
              😅 Chưa có sách nào được đăng.
            </p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {books.map((book) => (
                <Card
                  key={book.id}
                  className="group p-6 bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all hover:scale-105">
                  {/* Ảnh bìa */}
                  {book.coverUrl && (
                    <img
                      src={book.coverUrl}
                      alt={book.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                  )}

                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {book.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {book.description || "Không có mô tả."}
                  </p>

                  <div className="flex justify-between items-center text-xs text-muted-foreground mb-4">
                    {book.createdAt && (
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(
                          book.createdAt.seconds * 1000
                        ).toLocaleDateString("vi-VN")}
                      </span>
                    )}
                  </div>

                  <div className="flex justify-between items-center">
                    <Link href={`/books/edit/${book.id}`}>
                      <Button
                        variant="outline"
                        className="flex items-center gap-2">
                        <Edit3 className="w-4 h-4" />
                        Sửa
                      </Button>
                    </Link>
                    <Button
                      variant="destructive"
                      className="flex items-center gap-2"
                      onClick={() => handleDelete(book.id)}>
                      <Trash2 className="w-4 h-4" />
                      Xóa
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          )}

          {/* Thêm sách mới */}
          <div className="text-center mt-16">
            <Link href="/books/add">
              <Button className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Thêm Sách Mới
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
