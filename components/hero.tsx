import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section id="profile" className="relative z-10 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary">
              🚀 IT Developer & Space Enthusiast
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-balance">
              Exploring the Universe of <span className="text-primary">Technology</span>
            </h1>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              Xin chào! Tôi là một developer đam mê công nghệ, luôn khám phá những giới hạn mới trong lập trình và phát
              triển phần mềm. Giống như một phi hành gia khám phá vũ trụ, tôi không ngừng học hỏi và chinh phục những
              thử thách trong thế giới IT.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2">
                <Mail className="h-4 w-4" />
                Liên hệ
              </Button>
              <Button size="lg" variant="outline" className="gap-2 bg-transparent">
                <Github className="h-4 w-4" />
                GitHub
              </Button>
              <Button size="lg" variant="outline" className="gap-2 bg-transparent">
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm animate-float">
              <Image
                src="/astronaut-in-space-with-laptop-coding.jpg"
                alt="Astronaut developer in space"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-3xl animate-twinkle" />
            <div
              className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-twinkle"
              style={{ animationDelay: "1.5s" }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
