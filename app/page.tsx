// // // import { Header } from "@/components/header"
// // // import { Hero } from "@/components/hero"
// // // import { Footer } from "@/components/footer"
// // // import { SpaceBackground } from "@/components/space-background"

// // // export default function Home() {
// // //   return (
// // //     <div className="relative min-h-screen">
// // //       <SpaceBackground />
// // //       <Header />
// // //       <main>
// // //         <Hero />
// // //         <section className="relative z-10 py-12">
// // //           <div className="container mx-auto px-4">
// // //             <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
// // //               <a
// // //                 href="/blog"
// // //                 className="group p-8 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all hover:scale-105"
// // //               >
// // //                 <div className="text-4xl mb-4">📝</div>
// // //                 <h3 className="text-2xl font-bold mb-2 text-foreground">Blog</h3>
// // //                 <p className="text-muted-foreground">Khám phá các bài viết về công nghệ, lập trình và kinh nghiệm IT</p>
// // //               </a>

// // //               <a
// // //                 href="/books"
// // //                 className="group p-8 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 hover:border-secondary/50 transition-all hover:scale-105"
// // //               >
// // //                 <div className="text-4xl mb-4">📚</div>
// // //                 <h3 className="text-2xl font-bold mb-2 text-foreground">Books</h3>
// // //                 <p className="text-muted-foreground">Tổng hợp sách IT hay và đáng đọc cho developers</p>
// // //               </a>
// // //             </div>
// // //           </div>
// // //         </section>
// // //       </main>
// // //       <Footer />
// // //     </div>
// // //   )
// // // }
// // import { Header } from "@/components/header";
// // import { Footer } from "@/components/footer";
// // import { SpaceBackground } from "@/components/space-background";
// // import Image from "next/image";

// // export default function Home() {
// //   return (
// //     <div className="relative min-h-screen">
// //       <SpaceBackground />
// //       <Header />
// //       <main className="relative z-10 py-16">
// //         <div className="container mx-auto px-6">
// //           <div className="grid md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
// //             {/* Cột bên trái - Ảnh đại diện */}
// //             <div className="flex justify-center md:justify-end">
// //               <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-2xl border border-border/50">
// //                 <Image
// //                   src="/TranHieu.jpg" // đổi link này thành ảnh của bạn (ví dụ /images/hieu.jpg)
// //                   alt="Tran Hieu Profile"
// //                   fill
// //                   className="object-cover"
// //                 />
// //               </div>
// //             </div>

// //             {/* Cột bên phải - Thông tin cá nhân */}
// //             <div>
// //               <h1 className="text-4xl font-bold mb-4 text-foreground">
// //                 Trần Hiếu
// //               </h1>
// //               <p className="text-muted-foreground mb-6 text-lg">
// //                 Lập trình viên Fullstack, yêu thích xây dựng sản phẩm web hiện
// //                 đại với Node.js, React và hệ thống AI. Mục tiêu của mình là phát
// //                 triển các ứng dụng có trải nghiệm tốt, hiệu năng cao và dễ mở
// //                 rộng.
// //               </p>

// //               <div className="space-y-4">
// //                 <div>
// //                   <h3 className="text-xl font-semibold text-foreground mb-2">
// //                     💼 Kinh nghiệm & Dự án
// //                   </h3>
// //                   <ul className="list-disc list-inside text-muted-foreground space-y-1">
// //                     <li>
// //                       <a
// //                         href="https://github.com/hieutran0204/DACS_WebHocTiengAnh"
// //                         className="text-primary hover:underline"
// //                         target="_blank">
// //                         Web Học Tiếng Anh
// //                       </a>{" "}
// //                       – Nền tảng học tiếng Anh trực tuyến (Node.js + SSR).
// //                     </li>
// //                     <li>
// //                       <a
// //                         href="https://github.com/hieutran0204/space-it-blog"
// //                         className="text-primary hover:underline"
// //                         target="_blank">
// //                         Space IT Blog
// //                       </a>{" "}
// //                       – Blog chia sẻ kiến thức công nghệ, tích hợp Firebase và
// //                       Next.js.
// //                     </li>
// //                     <li>
// //                       DevOps Tools – Ứng dụng quản lý pipeline CI/CD (Docker,
// //                       GitHub Actions, Next.js).
// //                     </li>
// //                   </ul>
// //                 </div>

// //                 <div>
// //                   <h3 className="text-xl font-semibold text-foreground mb-2">
// //                     ⚙️ Kỹ năng
// //                   </h3>
// //                   <p className="text-muted-foreground">
// //                     JavaScript / TypeScript, Node.js, Express, React, Next.js,
// //                     Firebase, PostgreSQL, Python (AI/ML)
// //                   </p>
// //                 </div>

// //                 <div>
// //                   <h3 className="text-xl font-semibold text-foreground mb-2">
// //                     📫 Liên hệ
// //                   </h3>
// //                   <p className="text-muted-foreground">
// //                     <a
// //                       href="mailto:hieutran.dev@gmail.com"
// //                       className="hover:underline text-primary">
// //                       hieutran.dev@gmail.com
// //                     </a>{" "}
// //                     |{" "}
// //                     <a
// //                       href="https://www.linkedin.com/in/hieutran0204"
// //                       className="hover:underline text-primary"
// //                       target="_blank">
// //                       LinkedIn
// //                     </a>
// //                   </p>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </main>
// //       <Footer />
// //     </div>
// //   );
// // }
// import { Header } from "@/components/header";
// import { Footer } from "@/components/footer";
// import { SpaceBackground } from "@/components/space-background";
// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="relative min-h-screen">
//       <SpaceBackground />
//       <Header />
//       <main className="relative z-10 py-16">
//         <div className="container mx-auto px-6">
//           <div className="grid md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
//             {/* Cột bên trái - Ảnh đại diện */}
//             <div className="flex justify-center md:justify-start pl-6">
//               <div className="relative w-72 h-[420px] rounded-2xl overflow-hidden shadow-2xl border border-border/50">
//                 <Image
//                   src="TranHieu.jpg" // thay ảnh ở đây
//                   alt="Tran Hieu Profile"
//                   fill
//                   className="object-cover object-top"
//                   priority
//                 />
//               </div>
//             </div>

//             {/* Cột bên phải - Thông tin cá nhân */}
//             <div>
//               <h1 className="text-4xl font-bold mb-4 text-foreground">
//                 Trần Hiếu
//               </h1>
//               <p className="text-muted-foreground mb-6 text-lg">
//                 Lập trình viên Fullstack, yêu thích xây dựng sản phẩm web hiện
//                 đại với Node.js, React và hệ thống AI. Mục tiêu của mình là phát
//                 triển các ứng dụng có trải nghiệm tốt, hiệu năng cao và dễ mở
//                 rộng.
//               </p>

//               <div className="space-y-4">
//                 <div>
//                   <h3 className="text-xl font-semibold text-foreground mb-2">
//                     💼 Kinh nghiệm & Dự án
//                   </h3>
//                   <ul className="list-disc list-inside text-muted-foreground space-y-1">
//                     <li>
//                       <a
//                         href="https://github.com/hieutran0204/DACS_WebHocTiengAnh"
//                         className="text-primary hover:underline"
//                         target="_blank">
//                         Web Học Tiếng Anh
//                       </a>{" "}
//                       – Nền tảng học tiếng Anh trực tuyến (Node.js + SSR).
//                     </li>
//                     <li>
//                       <a
//                         href="https://github.com/hieutran0204/FrofileBookBlog"
//                         className="text-primary hover:underline"
//                         target="_blank">
//                         TranHieu Dev
//                       </a>{" "}
//                       – Blog chia sẻ kiến thức công nghệ, tích hợp Firebase và
//                       Next.js.
//                     </li>
//                   </ul>
//                 </div>

//                 <div>
//                   <h3 className="text-xl font-semibold text-foreground mb-2">
//                     ⚙️ Kỹ năng
//                   </h3>
//                   <p className="text-muted-foreground">
//                     JavaScript / TypeScript, Node.js, Express, Nest.js, React,
//                     Next.js, Firebase, MongoDB
//                   </p>
//                 </div>

//                 <div>
//                   <h3 className="text-xl font-semibold text-foreground mb-2">
//                     📫 Liên hệ
//                   </h3>
//                   <p className="text-muted-foreground">
//                     <a
//                       href="mailto:tranminhhieu620@gmail.com"
//                       className="hover:underline text-primary">
//                       tranminhhieu620@gmail.com
//                     </a>{" "}
//                     |{" "}
//                     <a
//                       href="https://www.linkedin.com/in/hi%E1%BA%BFu-tr%E1%BA%A7n-339850309/"
//                       className="hover:underline text-primary"
//                       target="_blank">
//                       LinkedIn
//                     </a>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//       <Footer />
//     </div>
//   );
// }
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SpaceBackground } from "@/components/space-background";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <SpaceBackground />
      <Header />

      <main className="relative z-10 py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Cột trái - Ảnh */}
            <div className="flex justify-center md:justify-start pl-6">
              <div className="relative w-80 h-[480px] rounded-2xl overflow-hidden shadow-2xl border border-border/50">
                <Image
                  src="/TranHieu.jpg"
                  alt="Tran Minh Hieu"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>

            {/* Cột phải - Thông tin */}
            <div className="space-y-6">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Trần Minh Hiếu
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                “Từ những dòng <code>console.log("Hello World")</code> đầu tiên,
                mình đã bắt đầu hành trình biến đam mê công nghệ thành hiện
                thực. Với mình, code không chỉ là công việc — mà là cách mình kể
                những câu chuyện bằng logic và sáng tạo.”
              </p>

              <p className="text-foreground leading-relaxed">
                Là sinh viên năm 4 chuyên ngành{" "}
                <strong>Công nghệ phần mềm</strong>, mình tập trung phát triển
                theo hướng <strong>Full Stack Developer</strong> và{" "}
                <strong>DevOps Engineer</strong> — nơi kỹ thuật và tư duy hệ
                thống gặp nhau để tạo nên sản phẩm hoàn chỉnh.
              </p>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="/about"
                  className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:scale-105 transition-all shadow-md">
                  🚀 Xem hồ sơ chi tiết
                </a>
                <a
                  href="/blog"
                  className="px-6 py-3 rounded-lg bg-muted text-foreground font-medium hover:scale-105 transition-all shadow-md">
                  📝 Đọc blog
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
