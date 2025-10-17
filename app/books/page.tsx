"use client";

import { useEffect, useState } from "react";
import Link from "next/link"; // <-- import Link
import { db } from "@/lib/firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SpaceBackground } from "@/components/space-background";
import { Card } from "@/components/ui/card";
import { Star, BookOpen, Users } from "lucide-react";

interface Block {
  type: "text" | "image";
  content?: string;
  url?: string;
}

interface Book {
  id: string;
  title: string;
  author: string;
  description?: string;
  rating?: number;
  readers?: string;
  category?: string;
  emoji?: string;
  color?: string;
  blocks?: Block[];
  createdAt?: { seconds: number };
}

export default function BooksPage() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

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
      } catch (err) {
        console.error("Error fetching books:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center text-muted-foreground">
        ⏳ Đang tải sách...
      </div>
    );

  return (
    <div className="relative min-h-screen">
      <SpaceBackground />
      <Header />
      <main className="relative z-10 py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="text-6xl mb-6 animate-float">📚</div>
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Sách IT Đáng Đọc
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tổng hợp những cuốn sách hay nhất về công nghệ, lập trình và phát
              triển phần mềm
            </p>
          </div>

          {/* Books Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {books.map((book) => (
              <Link key={book.id} href={`/books/${book.id}`}>
                <Card
                  className={`group p-6 bg-gradient-to-br ${book.color ?? "from-primary/20 to-primary/5"} backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all hover:scale-[1.02] cursor-pointer`}>
                  <div className="flex gap-4">
                    <div className="text-5xl flex-shrink-0 animate-float">
                      {book.emoji ?? "📚"}
                    </div>
                    <div className="flex-1">
                      {book.category && (
                        <div className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium mb-3">
                          {book.category}
                        </div>
                      )}
                      <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                        {book.title}
                      </h3>
                      {book.author && (
                        <p className="text-sm text-muted-foreground mb-3 italic">
                          {book.author}
                        </p>
                      )}
                      {book.description && (
                        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                          {book.description}
                        </p>
                      )}
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        {book.rating && (
                          <span className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-primary text-primary" />
                            <span className="font-semibold text-foreground">
                              {book.rating}
                            </span>
                          </span>
                        )}
                        {book.readers && (
                          <span className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {book.readers} readers
                          </span>
                        )}
                        <span className="flex items-center gap-1">
                          <BookOpen className="w-4 h-4" />
                          Đọc ngay
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          {/* Optional: Reading Tips Section */}
          {/* ... giữ nguyên */}
        </div>
      </main>
      <Footer />
    </div>
  );
}
