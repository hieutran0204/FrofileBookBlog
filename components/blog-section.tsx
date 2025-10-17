// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Calendar, ArrowRight } from "lucide-react"
// import Link from "next/link"

// const blogPosts = [
//   {
//     title: "Khám phá React Server Components",
//     description: "Tìm hiểu về tính năng mới nhất của React và cách nó thay đổi cách chúng ta xây dựng ứng dụng web.",
//     date: "15 Tháng 10, 2025",
//     tags: ["React", "Next.js", "Web Development"],
//     slug: "react-server-components",
//   },
//   {
//     title: "AI và Tương lai của Lập trình",
//     description: "Làm thế nào AI đang thay đổi cách chúng ta viết code và những kỹ năng cần thiết cho tương lai.",
//     date: "10 Tháng 10, 2025",
//     tags: ["AI", "Machine Learning", "Future Tech"],
//     slug: "ai-future-programming",
//   },
//   {
//     title: "Microservices Architecture trong Thực tế",
//     description: "Kinh nghiệm triển khai và quản lý hệ thống microservices ở quy mô lớn.",
//     date: "5 Tháng 10, 2025",
//     tags: ["Architecture", "Backend", "DevOps"],
//     slug: "microservices-architecture",
//   },
//   {
//     title: "TypeScript Best Practices 2025",
//     description: "Những pattern và kỹ thuật TypeScript hiện đại giúp code của bạn an toàn và dễ bảo trì hơn.",
//     date: "1 Tháng 10, 2025",
//     tags: ["TypeScript", "Best Practices", "Code Quality"],
//     slug: "typescript-best-practices",
//   },
// ]

// export function BlogSection() {
//   return (
//     <section id="blog" className="relative z-10 py-20 bg-card/30 backdrop-blur-sm">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
//             Blog về <span className="text-primary">Công nghệ</span>
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
//             Chia sẻ kiến thức, kinh nghiệm và những khám phá mới trong thế giới IT
//           </p>
//         </div>
//         <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
//           {blogPosts.map((post) => (
//             <Card
//               key={post.slug}
//               className="group hover:border-primary/50 transition-all duration-300 bg-card/50 backdrop-blur-sm"
//             >
//               <CardHeader>
//                 <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
//                   <Calendar className="h-4 w-4" />
//                   <span>{post.date}</span>
//                 </div>
//                 <CardTitle className="text-xl group-hover:text-primary transition-colors">{post.title}</CardTitle>
//                 <CardDescription className="text-base leading-relaxed">{post.description}</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {post.tags.map((tag) => (
//                     <Badge key={tag} variant="secondary" className="text-xs">
//                       {tag}
//                     </Badge>
//                   ))}
//                 </div>
//                 <Link
//                   href={`/blog/${post.slug}`}
//                   className="inline-flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all"
//                 >
//                   Đọc thêm
//                   <ArrowRight className="h-4 w-4" />
//                 </Link>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
