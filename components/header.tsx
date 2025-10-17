import Link from "next/link";
import { Rocket } from "lucide-react";

export function Header() {
  return (
    <header className="relative z-10 border-b border-border/30 backdrop-blur-md bg-background/80">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-bold text-foreground">
            <Rocket className="h-6 w-6 text-primary" />
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              TranHieu Dev
            </span>
          </Link>
          <div className="flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/blog" className="hover:text-primary transition-colors">
              Blog
            </Link>
            <Link
              href="/books"
              className="hover:text-primary transition-colors">
              Books
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
