
import { Mail, Phone, Github, Facebook, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-border/50 backdrop-blur-sm py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Branding */}
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="text-sm">
              © 2025 TranHieu Dev. All rights reserved.
            </span>
          </div>

          {/* Contact and Social Links */}
          <div className="flex flex-col items-center md:items-end gap-4">
            {/* Contact Info */}
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a
                href="tel:+84326171620"
                className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                <span>0326171620</span>
              </a>
              <a
                href="mailto:tranminhhieu620@gmail.com"
                className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
                <span>tranminhhieu620@gmail.com</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a
                href="https://www.linkedin.com/in/hi%E1%BA%BFu-tr%E1%BA%A7n-339850309/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/hieutran0204"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/TranHieu0204?locale=vi_VN"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
