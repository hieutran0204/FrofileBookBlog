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
