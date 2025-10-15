"use client"

import Link from "next/link"
import { Shield } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/hooks/use-auth"
import { useRouter } from "next/navigation"

export function Navbar() {
  const [open, setOpen] = useState(false)
  const { user, logout } = useAuth()
  const router = useRouter()
  const homeHref = user ? (user.role === "Employer" ? "/dashboard/employer" : "/dashboard/worker") : "/"
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label="TrustGuard AI Home">
          <Shield className="text-primary" />
          <span className="font-semibold">TrustGuard AI</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href={homeHref} className="text-sm hover:text-primary">
            Home
          </Link>
          <Link href="/#how-it-works" className="text-sm hover:text-primary">
            How It Works
          </Link>
          {user ? (
            <>
              <span className="text-sm text-muted-foreground">{user.name}</span>
              <button
                onClick={() => {
                  logout()
                  router.push("/")
                }}
                className="text-sm hover:text-primary"
              >
                Logout
              </button>
            </>
          ) : (
            <Link href="/login" className="text-sm hover:text-primary">
              Login
            </Link>
          )}
        </nav>
        <div className="md:hidden">
          <button
            aria-label="Toggle menu"
            className="inline-flex items-center justify-center rounded-md border px-2 py-1 text-sm"
            onClick={() => setOpen((o) => !o)}
          >
            Menu
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t bg-background">
          <div className="mx-auto max-w-7xl px-6 py-3 grid gap-2">
            <Link href={homeHref} className="text-sm" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link href="/#how-it-works" className="text-sm" onClick={() => setOpen(false)}>
              How It Works
            </Link>
            {user ? (
              <>
                <span className="text-sm text-muted-foreground">{user.name}</span>
                <Button
                  variant="secondary"
                  onClick={() => {
                    logout()
                    setOpen(false)
                    router.push("/")
                  }}
                >
                  Logout
                </Button>
              </>
            ) : (
              <Button asChild onClick={() => setOpen(false)}>
                <Link href="/login">Login</Link>
              </Button>
            )}
          </div>
        </div>
      )}
    </header>
  )
}
