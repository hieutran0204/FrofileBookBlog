"use client";

import { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "@/lib/firebase";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SpaceBackground } from "@/components/space-background";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

interface Blog {
  id: string;
  title: string;
  coverImage?: string;
  createdAt?: { seconds: number };
  excerpt?: string;
  readTime?: string;
  category?: string;
  emoji?: string;
}

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const q = query(collection(db, "blogs"), orderBy("createdAt", "desc"));
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Blog[];
        setBlogs(data);
      } catch (error) {
        console.error("Lỗi khi fetch blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <div className="relative min-h-screen">
      <SpaceBackground />
      <Header />
      <main className="relative z-10 py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="text-6xl mb-6 animate-float">📝</div>
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Chia sẻ kiến thức, kinh nghiệm và những điều thú vị trong hành
              trình khám phá công nghệ
            </p>
          </div>

          {/* Loading */}
          {loading ? (
            <p className="text-center text-muted-foreground">
              ⏳ Đang tải bài viết...
            </p>
          ) : blogs.length === 0 ? (
            <p className="text-center text-muted-foreground">
              😅 Chưa có bài viết nào.
            </p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogs.map((post) => (
                <Link key={post.id} href={`/blog/${post.id}`}>
                  <Card className="group p-6 bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all hover:scale-105 cursor-pointer">
                    {post.coverImage && (
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full h-40 object-cover rounded-lg mb-4"
                      />
                    )}

                    <div className="text-4xl mb-4">{post.emoji || "📄"}</div>

                    <div className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium mb-3">
                      {post.category || "Blog"}
                    </div>

                    <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                      {post.excerpt || "Bài viết này chưa có mô tả ngắn."}
                    </p>

                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-3">
                        {post.createdAt && (
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {new Date(
                              post.createdAt.seconds * 1000
                            ).toLocaleDateString("vi-VN")}
                          </span>
                        )}
                        {post.readTime && (
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </span>
                        )}
                      </div>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          )}

          {/* Newsletter Section */}
          <Card className="mt-16 p-8 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 backdrop-blur-sm border-border/50">
            <div className="text-center max-w-2xl mx-auto">
              <div className="text-4xl mb-4">🚀</div>
              <h2 className="text-2xl font-bold mb-3 text-foreground">
                Đăng Ký Nhận Bài Viết Mới
              </h2>
              <p className="text-muted-foreground mb-6">
                Nhận thông báo về những bài viết mới nhất về công nghệ, lập
                trình và IT
              </p>
              <div className="flex gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Email của bạn"
                  className="flex-1 px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
                <button className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity">
                  Đăng Ký
                </button>
              </div>
            </div>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
