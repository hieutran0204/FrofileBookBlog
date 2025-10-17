// import { Header } from "@/components/header";
// import { Footer } from "@/components/footer";
// import { SpaceBackground } from "@/components/space-background";
// import { Card } from "@/components/ui/card";
// import Image from "next/image";

// export default function AboutPage() {
//   return (
//     <div className="relative min-h-screen">
//       <SpaceBackground />
//       <Header />
//       <main className="relative z-10 py-20">
//         <div className="container mx-auto px-6 max-w-6xl">
//           {/* Layout chính */}
//           <div className="grid md:grid-cols-2 gap-12 items-start">
//             {/* Ảnh bên trái */}
//             <div className="flex justify-center md:justify-start pl-6">
//               <div className="relative w-80 h-[480px] rounded-2xl overflow-hidden shadow-2xl border border-border/50">
//                 <Image
//                   src="/TranHieu.jpg"
//                   alt="Tran Minh Hieu"
//                   fill
//                   className="object-cover object-top"
//                   priority
//                 />
//               </div>
//             </div>

//             {/* Thông tin bên phải */}
//             <div className="space-y-8">
//               {/* Hero section */}
//               <div className="mb-4">
//                 <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
//                   Trần Minh Hiếu
//                 </h1>
//                 <p className="text-xl text-muted-foreground">
//                   Sinh viên năm 4 | Công nghệ Thông tin – Chuyên ngành Công nghệ
//                   Phần mềm
//                 </p>
//                 <p className="text-lg text-muted-foreground mt-2">
//                   Định hướng: Full Stack Developer · DevOps Engineer ·
//                   Microservices Architect
//                 </p>
//               </div>

//               {/* Giới thiệu */}
//               <Card className="p-6 bg-card/80 backdrop-blur-sm border-border/50">
//                 <h2 className="text-2xl font-bold mb-3 text-primary">
//                   👨‍💻 Giới thiệu
//                 </h2>
//                 <p className="text-foreground leading-relaxed">
//                   Tôi là <strong>Trần Minh Hiếu</strong> – sinh viên năm 4 ngành{" "}
//                   <strong>Công nghệ Thông tin</strong>. Đam mê lập trình và phát
//                   triển hệ thống phần mềm, tôi tập trung theo đuổi hướng{" "}
//                   <strong>Full Stack Development</strong> kết hợp{" "}
//                   <strong>DevOps</strong> và{" "}
//                   <strong>kiến trúc microservices</strong>.
//                 </p>
//               </Card>

//               {/* Kỹ năng */}
//               <Card className="p-6 bg-card/80 backdrop-blur-sm border-border/50">
//                 <h2 className="text-2xl font-bold mb-4 text-secondary">
//                   💻 Kỹ năng
//                 </h2>
//                 <div className="grid md:grid-cols-2 gap-4 text-muted-foreground">
//                   <div>
//                     <h3 className="font-semibold text-foreground mb-1">
//                       Frontend
//                     </h3>
//                     <ul className="list-disc list-inside">
//                       <li>React, Next.js, TypeScript</li>
//                       <li>Tailwind CSS, Styled Components</li>
//                       <li>UI/UX Design, Responsive</li>
//                     </ul>
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-foreground mb-1">
//                       Backend
//                     </h3>
//                     <ul className="list-disc list-inside">
//                       <li>Node.js (Express, NestJS)</li>
//                       <li>MySql, MongoDB</li>
//                       <li>REST API, Microservices</li>
//                     </ul>
//                   </div>
//                 </div>
//               </Card>

//               {/* Dự án nổi bật */}
//               <Card className="p-6 bg-card/80 backdrop-blur-sm border-border/50">
//                 <h2 className="text-2xl font-bold mb-4 text-accent">
//                   📂 Dự án nổi bật
//                 </h2>
//                 <ul className="list-disc list-inside text-muted-foreground space-y-2">
//                   <li>
//                     <a
//                       href="https://github.com/hieutran0204/FrofileBookBlog"
//                       className="text-primary hover:underline"
//                       target="_blank">
//                       Profile Blog IT
//                     </a>{" "}
//                     – Ứng dụng blog cá nhân full-stack (Next.js + Firebase +
//                     TailwindCSS).
//                     <span className="block text-sm text-muted-foreground">
//                       Quản lý bài viết, chia sẻ tài liệu học tập và đầu sách IT.
//                     </span>
//                   </li>
//                   <li>
//                     <a
//                       href="https://github.com/hieutran0204/DACS_WebHocTiengAnh"
//                       className="text-primary hover:underline"
//                       target="_blank">
//                       Web Học Tiếng Anh
//                     </a>{" "}
//                     – Nền tảng học tiếng Anh trực tuyến (Node.js + SSR).
//                     <span className="block text-sm text-muted-foreground">
//                       Hệ thống quiz, bài học, quản lý user và trang admin.
//                     </span>
//                   </li>
//                 </ul>
//               </Card>

//               {/* Liên hệ */}
//               <Card className="p-6 bg-card/80 backdrop-blur-sm border-border/50">
//                 <h2 className="text-2xl font-bold mb-4 text-primary">
//                   📬 Liên hệ
//                 </h2>
//                 <div className="flex flex-wrap gap-4">
//                   <a
//                     href="mailto:tranminhhieu620@gmail.com"
//                     className="px-5 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity">
//                     Email
//                   </a>
//                   <a
//                     href="https://github.com/hieutran0204"
//                     className="px-5 py-2 rounded-lg bg-secondary text-secondary-foreground font-medium hover:opacity-90 transition-opacity">
//                     GitHub
//                   </a>
//                   <a
//                     href="https://www.linkedin.com/in/hi%E1%BA%BFu-tr%E1%BA%A7n-339850309/"
//                     className="px-5 py-2 rounded-lg bg-accent text-accent-foreground font-medium hover:opacity-90 transition-opacity">
//                     LinkedIn
//                   </a>
//                   <a
//                     href="https://frofile-tranminhhieuit.vercel.app/"
//                     className="px-5 py-2 rounded-lg bg-muted text-foreground font-medium hover:opacity-90 transition-opacity">
//                     Portfolio
//                   </a>
//                 </div>
//               </Card>
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
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen">
      <SpaceBackground />
      <Header />
      <main className="relative z-10 py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Ảnh bên trái */}
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

            {/* Nội dung bên phải */}
            <div className="space-y-8">
              {/* Hero Section */}
              <div className="mb-4">
                <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Trần Minh Hiếu
                </h1>
                <p className="text-xl text-muted-foreground">
                  Sinh viên năm 4 | Đại học Công nghệ TP.HCM (HUTECH)
                </p>
                <p className="text-lg text-muted-foreground mt-2">
                  Chuyên ngành: Công nghệ Phần mềm
                </p>
                <p className="text-lg text-muted-foreground mt-2">
                  Định hướng: Backend Developer · DevOps · Hệ thống
                  Microservices
                </p>
              </div>

              {/* Mục tiêu nghề nghiệp */}
              <Card className="p-6 bg-card/80 backdrop-blur-sm border-border/50">
                <h2 className="text-2xl font-bold mb-3 text-primary">
                  🎯 Mục tiêu nghề nghiệp
                </h2>
                <p className="text-foreground leading-relaxed">
                  Phát triển chuyên sâu về <strong>Back-End</strong>, mở rộng
                  kiến thức về <strong>DevOps</strong> và tối ưu hóa hiệu suất
                  hệ thống. Mong muốn đóng góp giá trị, học hỏi từ đội ngũ
                  chuyên nghiệp và trở thành một thành viên quan trọng trong
                  team phát triển phần mềm.
                </p>
              </Card>

              {/* Kỹ năng */}
              <Card className="p-6 bg-card/80 backdrop-blur-sm border-border/50">
                <h2 className="text-2xl font-bold mb-4 text-primary">
                  💻 Kỹ năng
                </h2>
                <div className="grid md:grid-cols-2 gap-4 text-muted-foreground">
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Backend
                    </h3>
                    <ul className="list-disc list-inside">
                      <li>Node.js, Express.js</li>
                      <li>RESTful API, MVC Pattern</li>
                      <li>SSR: Pug, EJS, JSX</li>
                      <li>MongoDB, MySQL</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Frontend & Tools
                    </h3>
                    <ul className="list-disc list-inside">
                      <li>HTML, CSS, JavaScript</li>
                      <li>Git, Postman</li>
                      <li>Docker (cơ bản), CI/CD</li>
                      <li>VS Code, Figma</li>
                    </ul>
                  </div>
                </div>
              </Card>

              {/* Kinh nghiệm & Dự án */}
              <Card className="p-6 bg-card/80 backdrop-blur-sm border-border/50">
                <h2 className="text-2xl font-bold mb-4 text-accent">
                  💼 Kinh nghiệm & Dự án
                </h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-3">
                  <li>
                    <strong>Dự án cá nhân: Web Học Tiếng Anh</strong> (
                    <a
                      href="https://github.com/hieutran0204/DACS_WebHocTiengAnh"
                      target="_blank"
                      className="text-primary hover:underline">
                      GitHub
                    </a>
                    )
                    <span className="block text-sm text-muted-foreground">
                      Xây dựng web app học tiếng Anh sử dụng Node.js và
                      Express.js. Thiết kế RESTful API, triển khai SSR (Pug,
                      EJS), làm việc với MongoDB/MySQL và kiểm thử bằng Postman.
                      Mục tiêu giúp học viên luyện đề và tự đánh giá năng lực.
                    </span>
                  </li>
                  <li>
                    <strong>Profile Blog IT</strong> (
                    <a
                      href="https://github.com/hieutran0204/FrofileBookBlog"
                      target="_blank"
                      className="text-primary hover:underline">
                      GitHub
                    </a>
                    )
                    <span className="block text-sm text-muted-foreground">
                      Ứng dụng blog cá nhân (Next.js + Firebase + TailwindCSS)
                      chia sẻ bài viết, sách và kinh nghiệm IT.
                    </span>
                  </li>
                </ul>
              </Card>

              {/* Học vấn & Hoạt động */}
              <Card className="p-6 bg-card/80 backdrop-blur-sm border-border/50">
                <h2 className="text-2xl font-bold mb-4 text-primary">
                  🎓 Học vấn & Hoạt động
                </h2>
                <p className="text-foreground leading-relaxed mb-2">
                  <strong>Đại học Công nghệ TP.HCM (HUTECH)</strong> – Ngành
                  Công nghệ Thông tin (2022 – 2026)
                </p>
                <p className="text-muted-foreground mb-2">
                  Hiện là sinh viên năm 4, đang trau dồi chuyên môn Backend và
                  kiến trúc hệ thống web hiện đại.
                </p>
                <p className="text-muted-foreground">
                  <strong>Hoạt động:</strong> Thành viên CLB Học Thuật – học tập
                  và thực hành các dự án nhóm với Node.js, Express, API và hệ
                  thống web.
                </p>
              </Card>
              {/* Chứng chỉ */}
              <Card className="p-6 bg-card/80 backdrop-blur-sm border-border/50">
                <h2 className="text-2xl font-bold mb-4 text-accent">
                  🏅 Chứng chỉ
                </h2>
                <p className="text-muted-foreground mb-4">
                  Một số chứng chỉ chuyên ngành từ{" "}
                  <strong>Cisco Networking Academy</strong> – khẳng định nền
                  tảng kiến thức vững chắc về lập trình và mạng máy tính.
                </p>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {/* JavaScript 1 */}
                  <div className="relative group rounded-xl overflow-hidden border border-border/50 shadow-lg hover:scale-[1.03] hover:shadow-xl transition-all">
                    <Image
                      src="/certificates/js1_page-0001.jpg"
                      alt="Cisco Introduction to JavaScript 1"
                      width={400}
                      height={300}
                      className="object-cover w-full h-48 group-hover:opacity-90 transition-opacity"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-sm p-2 text-center">
                      Cisco – Introduction to JavaScript 1
                    </div>
                  </div>

                  {/* JavaScript 2 */}
                  <div className="relative group rounded-xl overflow-hidden border border-border/50 shadow-lg hover:scale-[1.03] hover:shadow-xl transition-all">
                    <Image
                      src="/certificates/js2_page-0001.jpg"
                      alt="Cisco Introduction to JavaScript 2"
                      width={400}
                      height={300}
                      className="object-cover w-full h-48 group-hover:opacity-90 transition-opacity"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-sm p-2 text-center">
                      Cisco – Introduction to JavaScript 2
                    </div>
                  </div>

                  {/* Networking Basics */}
                  <div className="relative group rounded-xl overflow-hidden border border-border/50 shadow-lg hover:scale-[1.03] hover:shadow-xl transition-all">
                    <Image
                      src="/certificates/NetworkingBasics_page-0001.jpg"
                      alt="Cisco Networking Basics"
                      width={400}
                      height={300}
                      className="object-cover w-full h-48 group-hover:opacity-90 transition-opacity"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-sm p-2 text-center">
                      Cisco – Networking Basics
                    </div>
                  </div>
                </div>
              </Card>

              {/* Sở thích */}
              <Card className="p-6 bg-card/80 backdrop-blur-sm border-border/50">
                <h2 className="text-2xl font-bold mb-4 text-primary">
                  🔥 Sở thích
                </h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>
                    Tìm hiểu công nghệ mới và giải pháp tối ưu cho hệ thống.
                  </li>
                  <li>
                    Nghiên cứu cải thiện hiệu suất backend và kiến trúc hệ
                    thống.
                  </li>
                  <li>
                    Học hỏi về tự động hóa DevOps và triển khai ứng dụng trên
                    cloud.
                  </li>
                </ul>
              </Card>

              {/* Liên hệ */}
              <Card className="p-6 bg-card/80 backdrop-blur-sm border-border/50">
                <h2 className="text-2xl font-bold mb-4 text-accent">
                  📫 Liên hệ
                </h2>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="mailto:tranminhhieu620@gmail.com"
                    className="px-5 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity">
                    Email
                  </a>
                  <a
                    href="https://github.com/hieutran0204"
                    className="px-5 py-2 rounded-lg bg-secondary text-secondary-foreground font-medium hover:opacity-90 transition-opacity">
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/hi%E1%BA%BFu-tr%E1%BA%A7n-339850309/"
                    className="px-5 py-2 rounded-lg bg-accent text-accent-foreground font-medium hover:opacity-90 transition-opacity">
                    LinkedIn
                  </a>
                  <a
                    href="https://frofile-tranminhhieuit.vercel.app/"
                    className="px-5 py-2 rounded-lg bg-muted text-foreground font-medium hover:opacity-90 transition-opacity">
                    Portfolio
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
