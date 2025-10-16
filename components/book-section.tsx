import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Star, Download } from "lucide-react"
import Image from "next/image"

export function BookSection() {
  return (
    <section id="book" className="relative z-10 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Sách của tôi về <span className="text-primary">IT</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Hành trình khám phá công nghệ từ cơ bản đến nâng cao
          </p>
        </div>
        <Card className="max-w-4xl mx-auto overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative aspect-[3/4] md:aspect-auto">
                <Image src="/modern-it-programming-book-cover-with-space-theme.jpg" alt="IT Book Cover" fill className="object-cover" />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center space-y-6">
                <div className="inline-flex items-center gap-2 text-primary">
                  <BookOpen className="h-5 w-5" />
                  <span className="text-sm font-medium">Sách kỹ thuật</span>
                </div>
                <h3 className="text-3xl font-bold text-balance">Lập trình Hiện đại: Từ Zero đến Hero</h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  Cuốn sách này sẽ đưa bạn qua hành trình từ những kiến thức cơ bản nhất về lập trình đến những kỹ thuật
                  nâng cao trong phát triển phần mềm hiện đại. Với hơn 500 trang kiến thức và hàng trăm ví dụ thực tế,
                  đây là người bạn đồng hành hoàn hảo cho mọi developer.
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">4.9/5 (1,234 đánh giá)</span>
                </div>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <div className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-sm">
                      JavaScript
                    </div>
                    <div className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-sm">
                      TypeScript
                    </div>
                    <div className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-sm">React</div>
                    <div className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-sm">Node.js</div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Button size="lg" className="gap-2">
                      <Download className="h-4 w-4" />
                      Tải xuống miễn phí
                    </Button>
                    <Button size="lg" variant="outline">
                      Xem mục lục
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
