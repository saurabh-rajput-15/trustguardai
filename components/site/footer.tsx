import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12 py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <p className="text-sm">© 2025 TrustGuard AI | Built for MumbaiHacks | Empowering truth in the workforce.</p>
        <div className="flex items-center gap-4">
          <a href="#" aria-label="Email" className="hover:text-primary">
            <Mail className="h-5 w-5" />
          </a>
          <a href="#" aria-label="GitHub" className="hover:text-primary">
            <Github className="h-5 w-5" />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-primary">
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
