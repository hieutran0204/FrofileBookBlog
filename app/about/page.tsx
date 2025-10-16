import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SpaceBackground } from "@/components/space-background"
import { Card } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="relative min-h-screen">
      <SpaceBackground />
      <Header />
      <main className="relative z-10 py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-block mb-6 animate-float">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary via-secondary to-accent p-1">
                <div className="w-full h-full rounded-full bg-card flex items-center justify-center text-6xl">👨‍🚀</div>
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Về Tôi
            </h1>
            <p className="text-xl text-muted-foreground">Một phi hành gia trong vũ trụ công nghệ</p>
          </div>

          {/* About Content */}
          <div className="space-y-8">
            <Card className="p-8 bg-card/80 backdrop-blur-sm border-border/50">
              <h2 className="text-2xl font-bold mb-4 text-primary">🚀 Hành Trình</h2>
              <p className="text-foreground leading-relaxed mb-4">
                Xin chào! Tôi là một developer đam mê công nghệ, luôn khám phá những điều mới trong vũ trụ rộng lớn của
                IT. Giống như một phi hành gia, tôi không ngừng học hỏi và chinh phục những thử thách mới.
              </p>
              <p className="text-foreground leading-relaxed">
                Với nhiều năm kinh nghiệm trong lĩnh vực phát triển phần mềm, tôi đã tham gia vào nhiều dự án từ web
                development, mobile apps đến cloud computing và AI.
              </p>
            </Card>

            <Card className="p-8 bg-card/80 backdrop-blur-sm border-border/50">
              <h2 className="text-2xl font-bold mb-4 text-secondary">💻 Kỹ Năng</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold mb-2 text-foreground">Frontend</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• React, Next.js, Vue.js</li>
                    <li>• TypeScript, JavaScript</li>
                    <li>• Tailwind CSS, CSS-in-JS</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-foreground">Backend</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Node.js, Python, Go</li>
                    <li>• PostgreSQL, MongoDB</li>
                    <li>• REST APIs, GraphQL</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-foreground">DevOps</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Docker, Kubernetes</li>
                    <li>• AWS, Vercel, GCP</li>
                    <li>• CI/CD, GitHub Actions</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-foreground">Tools</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Git, VS Code</li>
                    <li>• Figma, Design Systems</li>
                    <li>• Agile, Scrum</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card/80 backdrop-blur-sm border-border/50">
              <h2 className="text-2xl font-bold mb-4 text-accent">🎯 Sứ Mệnh</h2>
              <p className="text-foreground leading-relaxed mb-4">
                Tôi tin rằng công nghệ có thể thay đổi thế giới. Mục tiêu của tôi là chia sẻ kiến thức, truyền cảm hứng
                cho cộng đồng developer Việt Nam và cùng nhau xây dựng những sản phẩm tuyệt vời.
              </p>
              <p className="text-foreground leading-relaxed">
                Qua blog và sách, tôi muốn giúp các bạn developer trẻ rút ngắn con đường học tập, tránh những sai lầm mà
                tôi đã từng mắc phải, và cùng nhau tiến xa hơn trong sự nghiệp IT.
              </p>
            </Card>

            <Card className="p-8 bg-card/80 backdrop-blur-sm border-border/50">
              <h2 className="text-2xl font-bold mb-4 text-primary">📫 Liên Hệ</h2>
              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:hello@spacedev.com"
                  className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
                >
                  Email
                </a>
                <a
                  href="https://github.com"
                  className="px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-medium hover:opacity-90 transition-opacity"
                >
                  GitHub
                </a>
                <a
                  href="https://twitter.com"
                  className="px-6 py-3 rounded-lg bg-accent text-accent-foreground font-medium hover:opacity-90 transition-opacity"
                >
                  Twitter
                </a>
                <a
                  href="https://linkedin.com"
                  className="px-6 py-3 rounded-lg bg-muted text-foreground font-medium hover:opacity-90 transition-opacity"
                >
                  LinkedIn
                </a>
              </div>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
