// // import { Header } from "@/components/header"
// // import { Footer } from "@/components/footer"
// // import { SpaceBackground } from "@/components/space-background"
// // import { Card } from "@/components/ui/card"
// // import { Star, BookOpen, Users } from "lucide-react"

// // const books = [
// //   {
// //     id: 1,
// //     title: "Clean Code: A Handbook of Agile Software Craftsmanship",
// //     author: "Robert C. Martin",
// //     description: "Cuốn sách kinh điển về cách viết code sạch, dễ đọc và dễ bảo trì. Must-read cho mọi developer.",
// //     rating: 4.8,
// //     readers: "2.5M+",
// //     category: "Best Practices",
// //     emoji: "✨",
// //     color: "from-primary/20 to-primary/5",
// //   },
// //   {
// //     id: 2,
// //     title: "Designing Data-Intensive Applications",
// //     author: "Martin Kleppmann",
// //     description: "Khám phá kiến trúc và thiết kế của các hệ thống xử lý dữ liệu lớn trong thời đại hiện đại.",
// //     rating: 4.9,
// //     readers: "1.8M+",
// //     category: "System Design",
// //     emoji: "🏗️",
// //     color: "from-secondary/20 to-secondary/5",
// //   },
// //   {
// //     id: 3,
// //     title: "The Pragmatic Programmer",
// //     author: "David Thomas, Andrew Hunt",
// //     description: "Hướng dẫn thực tế để trở thành một programmer chuyên nghiệp và hiệu quả hơn.",
// //     rating: 4.7,
// //     readers: "2.1M+",
// //     category: "Career",
// //     emoji: "🎯",
// //     color: "from-accent/20 to-accent/5",
// //   },
// //   {
// //     id: 4,
// //     title: "You Don't Know JS",
// //     author: "Kyle Simpson",
// //     description: "Series sách đi sâu vào JavaScript, giúp bạn hiểu rõ ngôn ngữ này từ cơ bản đến nâng cao.",
// //     rating: 4.6,
// //     readers: "1.5M+",
// //     category: "JavaScript",
// //     emoji: "📚",
// //     color: "from-primary/20 to-primary/5",
// //   },
// //   {
// //     id: 5,
// //     title: "System Design Interview",
// //     author: "Alex Xu",
// //     description: "Chuẩn bị cho phỏng vấn system design với các case study thực tế và giải pháp chi tiết.",
// //     rating: 4.8,
// //     readers: "1.2M+",
// //     category: "Interview",
// //     emoji: "💼",
// //     color: "from-secondary/20 to-secondary/5",
// //   },
// //   {
// //     id: 6,
// //     title: "Refactoring: Improving the Design of Existing Code",
// //     author: "Martin Fowler",
// //     description: "Học cách cải thiện code hiện có một cách có hệ thống và an toàn.",
// //     rating: 4.7,
// //     readers: "1.9M+",
// //     category: "Refactoring",
// //     emoji: "🔧",
// //     color: "from-accent/20 to-accent/5",
// //   },
// // ]

// // export default function BooksPage() {
// //   return (
// //     <div className="relative min-h-screen">
// //       <SpaceBackground />
// //       <Header />
// //       <main className="relative z-10 py-20">
// //         <div className="container mx-auto px-4 max-w-6xl">
// //           {/* Hero Section */}
// //           <div className="text-center mb-16">
// //             <div className="text-6xl mb-6 animate-float">📚</div>
// //             <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
// //               Sách IT Đáng Đọc
// //             </h1>
// //             <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
// //               Tổng hợp những cuốn sách hay nhất về công nghệ, lập trình và phát triển phần mềm
// //             </p>
// //           </div>

// //           {/* Books Grid */}
// //           <div className="grid md:grid-cols-2 gap-6 mb-16">
// //             {books.map((book) => (
// //               <Card
// //                 key={book.id}
// //                 className={`group p-6 bg-gradient-to-br ${book.color} backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all hover:scale-[1.02]`}
// //               >
// //                 <div className="flex gap-4">
// //                   <div className="text-5xl flex-shrink-0 animate-float">{book.emoji}</div>

// //                   <div className="flex-1">
// //                     <div className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium mb-3">
// //                       {book.category}
// //                     </div>

// //                     <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
// //                       {book.title}
// //                     </h3>

// //                     <p className="text-sm text-muted-foreground mb-3 italic">{book.author}</p>

// //                     <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{book.description}</p>

// //                     <div className="flex items-center gap-4 text-xs text-muted-foreground">
// //                       <span className="flex items-center gap-1">
// //                         <Star className="w-4 h-4 fill-primary text-primary" />
// //                         <span className="font-semibold text-foreground">{book.rating}</span>
// //                       </span>
// //                       <span className="flex items-center gap-1">
// //                         <Users className="w-4 h-4" />
// //                         {book.readers} readers
// //                       </span>
// //                       <span className="flex items-center gap-1">
// //                         <BookOpen className="w-4 h-4" />
// //                         Đọc ngay
// //                       </span>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </Card>
// //             ))}
// //           </div>

// //           {/* Reading Tips Section */}
// //           <Card className="p-8 bg-card/80 backdrop-blur-sm border-border/50">
// //             <div className="max-w-3xl mx-auto">
// //               <h2 className="text-2xl font-bold mb-6 text-center text-foreground">💡 Tips Đọc Sách Hiệu Quả</h2>
// //               <div className="grid md:grid-cols-2 gap-6">
// //                 <div className="space-y-3">
// //                   <div className="flex gap-3">
// //                     <span className="text-2xl">📖</span>
// //                     <div>
// //                       <h3 className="font-semibold text-foreground mb-1">Đọc Chủ Động</h3>
// //                       <p className="text-sm text-muted-foreground">
// //                         Ghi chú, đặt câu hỏi và thực hành code trong khi đọc
// //                       </p>
// //                     </div>
// //                   </div>
// //                   <div className="flex gap-3">
// //                     <span className="text-2xl">⏰</span>
// //                     <div>
// //                       <h3 className="font-semibold text-foreground mb-1">Đọc Đều Đặn</h3>
// //                       <p className="text-sm text-muted-foreground">
// //                         Dành 30 phút mỗi ngày thay vì đọc dồn vào cuối tuần
// //                       </p>
// //                     </div>
// //                   </div>
// //                 </div>
// //                 <div className="space-y-3">
// //                   <div className="flex gap-3">
// //                     <span className="text-2xl">💻</span>
// //                     <div>
// //                       <h3 className="font-semibold text-foreground mb-1">Thực Hành Ngay</h3>
// //                       <p className="text-sm text-muted-foreground">
// //                         Áp dụng kiến thức vào dự án thực tế để nhớ lâu hơn
// //                       </p>
// //                     </div>
// //                   </div>
// //                   <div className="flex gap-3">
// //                     <span className="text-2xl">👥</span>
// //                     <div>
// //                       <h3 className="font-semibold text-foreground mb-1">Chia Sẻ Kiến Thức</h3>
// //                       <p className="text-sm text-muted-foreground">
// //                         Thảo luận với đồng nghiệp hoặc viết blog về những gì học được
// //                       </p>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </Card>
// //         </div>
// //       </main>
// //       <Footer />
// //     </div>
// //   )
// // }
// "use client";

// import { useEffect, useState } from "react";
// import { db } from "@/lib/firebase";
// import { collection, getDocs, query, orderBy } from "firebase/firestore";
// import { Header } from "@/components/header";
// import { Footer } from "@/components/footer";
// import { SpaceBackground } from "@/components/space-background";
// import { Card } from "@/components/ui/card";
// import { Star, BookOpen, Users } from "lucide-react";

// interface Block {
//   type: "text" | "image";
//   content?: string;
//   url?: string;
// }

// interface Book {
//   id: string;
//   title: string;
//   author: string;
//   description?: string;
//   rating?: number;
//   readers?: string;
//   category?: string;
//   emoji?: string;
//   color?: string;
//   blocks?: Block[];
//   createdAt?: { seconds: number };
// }

// export default function BooksPage() {
//   const [books, setBooks] = useState<Book[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchBooks = async () => {
//       try {
//         const q = query(collection(db, "books"), orderBy("createdAt", "desc"));
//         const snapshot = await getDocs(q);
//         const data = snapshot.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data(),
//         })) as Book[];
//         setBooks(data);
//       } catch (err) {
//         console.error("Error fetching books:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchBooks();
//   }, []);

//   if (loading)
//     return (
//       <div className="min-h-screen flex items-center justify-center text-muted-foreground">
//         ⏳ Đang tải sách...
//       </div>
//     );

//   return (
//     <div className="relative min-h-screen">
//       <SpaceBackground />
//       <Header />
//       <main className="relative z-10 py-20">
//         <div className="container mx-auto px-4 max-w-6xl">
//           {/* Hero Section */}
//           <div className="text-center mb-16">
//             <div className="text-6xl mb-6 animate-float">📚</div>
//             <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
//               Sách IT Đáng Đọc
//             </h1>
//             <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//               Tổng hợp những cuốn sách hay nhất về công nghệ, lập trình và phát
//               triển phần mềm
//             </p>
//           </div>

//           {/* Books Grid */}
//           <div className="grid md:grid-cols-2 gap-6 mb-16">
//             {books.map((book) => (
//               <Card
//                 key={book.id}
//                 className={`group p-6 bg-gradient-to-br ${book.color ?? "from-primary/20 to-primary/5"} backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all hover:scale-[1.02]`}>
//                 <div className="flex gap-4">
//                   <div className="text-5xl flex-shrink-0 animate-float">
//                     {book.emoji ?? "📚"}
//                   </div>
//                   <div className="flex-1">
//                     {book.category && (
//                       <div className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium mb-3">
//                         {book.category}
//                       </div>
//                     )}
//                     <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
//                       {book.title}
//                     </h3>
//                     {book.author && (
//                       <p className="text-sm text-muted-foreground mb-3 italic">
//                         {book.author}
//                       </p>
//                     )}
//                     {book.description && (
//                       <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
//                         {book.description}
//                       </p>
//                     )}
//                     <div className="flex items-center gap-4 text-xs text-muted-foreground">
//                       {book.rating && (
//                         <span className="flex items-center gap-1">
//                           <Star className="w-4 h-4 fill-primary text-primary" />
//                           <span className="font-semibold text-foreground">
//                             {book.rating}
//                           </span>
//                         </span>
//                       )}
//                       {book.readers && (
//                         <span className="flex items-center gap-1">
//                           <Users className="w-4 h-4" />
//                           {book.readers} readers
//                         </span>
//                       )}
//                       <span className="flex items-center gap-1">
//                         <BookOpen className="w-4 h-4" />
//                         Đọc ngay
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </Card>
//             ))}
//           </div>

//           {/* Optional: Reading Tips Section */}
//           <Card className="p-8 bg-card/80 backdrop-blur-sm border-border/50">
//             <div className="max-w-3xl mx-auto">
//               <h2 className="text-2xl font-bold mb-6 text-center text-foreground">
//                 💡 Tips Đọc Sách Hiệu Quả
//               </h2>
//               <div className="grid md:grid-cols-2 gap-6">
//                 <div className="space-y-3">
//                   <div className="flex gap-3">
//                     <span className="text-2xl">📖</span>
//                     <div>
//                       <h3 className="font-semibold text-foreground mb-1">
//                         Đọc Chủ Động
//                       </h3>
//                       <p className="text-sm text-muted-foreground">
//                         Ghi chú, đặt câu hỏi và thực hành code trong khi đọc
//                       </p>
//                     </div>
//                   </div>
//                   <div className="flex gap-3">
//                     <span className="text-2xl">⏰</span>
//                     <div>
//                       <h3 className="font-semibold text-foreground mb-1">
//                         Đọc Đều Đặn
//                       </h3>
//                       <p className="text-sm text-muted-foreground">
//                         Dành 30 phút mỗi ngày thay vì đọc dồn vào cuối tuần
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="space-y-3">
//                   <div className="flex gap-3">
//                     <span className="text-2xl">💻</span>
//                     <div>
//                       <h3 className="font-semibold text-foreground mb-1">
//                         Thực Hành Ngay
//                       </h3>
//                       <p className="text-sm text-muted-foreground">
//                         Áp dụng kiến thức vào dự án thực tế để nhớ lâu hơn
//                       </p>
//                     </div>
//                   </div>
//                   <div className="flex gap-3">
//                     <span className="text-2xl">👥</span>
//                     <div>
//                       <h3 className="font-semibold text-foreground mb-1">
//                         Chia Sẻ Kiến Thức
//                       </h3>
//                       <p className="text-sm text-muted-foreground">
//                         Thảo luận với đồng nghiệp hoặc viết blog về những gì học
//                         được
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </Card>
//         </div>
//       </main>
//       <Footer />
//     </div>
//   );
// }
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
