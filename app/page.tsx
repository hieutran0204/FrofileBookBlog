import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Footer } from "@/components/footer"
import { SpaceBackground } from "@/components/space-background"

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <SpaceBackground />
      <Header />
      <main>
        <Hero />
        <section className="relative z-10 py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <a
                href="/blog"
                className="group p-8 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all hover:scale-105"
              >
                <div className="text-4xl mb-4">📝</div>
                <h3 className="text-2xl font-bold mb-2 text-foreground">Blog</h3>
                <p className="text-muted-foreground">Khám phá các bài viết về công nghệ, lập trình và kinh nghiệm IT</p>
              </a>

              <a
                href="/books"
                className="group p-8 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 hover:border-secondary/50 transition-all hover:scale-105"
              >
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-2xl font-bold mb-2 text-foreground">Books</h3>
                <p className="text-muted-foreground">Tổng hợp sách IT hay và đáng đọc cho developers</p>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
