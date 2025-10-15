"use client"
import { usePathname } from "next/navigation"
import { type ReactNode, useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import {
  Shield,
  Menu,
  LayoutGrid,
  CheckCircle,
  User2,
  Gauge,
  Settings,
  LogOut,
  Search,
  Users,
  Star,
} from "lucide-react"
import { useAuth } from "@/hooks/use-auth"
import { cn } from "@/lib/utils"

type Role = "Worker" | "Employer"

function mapLabelToFriendly(label: string): string {
  switch (label) {
    case "Dashboard":
      return "Overview"
    case "Verification Center":
      return "Verification Center"
    case "My Profile":
      return "Profile Information"
    case "Trust Score":
      return "Trust and Ratings"
    case "Earnings & Employers":
      return "Earnings and Employment History"
    case "Search Workers":
      return "Find Verified Workers"
    case "My Hires":
      return "Your Hires"
    case "Reviews":
      return "Feedback & Reviews"
    case "Insights":
      return "Trust Insights"
    case "Settings":
      return "Account Settings"
    default:
      return label
  }
}

export type DashboardNavItem = {
  href: string
  label: string
  icon?: ReactNode
}

export function DashboardLayout({ role, children }: { role: Role; children: ReactNode }) {
  const { user, logout } = useAuth()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const workerNav = [
    { href: "#overview", label: "Dashboard", icon: LayoutGrid },
    { href: "#verification", label: "Verification Center", icon: CheckCircle },
    { href: "#profile", label: "My Profile", icon: User2 },
    { href: "#trust", label: "Trust Score", icon: Gauge },
    { href: "#suggestions", label: "Suggestions", icon: Settings },
    { href: "#settings", label: "Settings", icon: Settings },
  ]
  const employerNav = [
    { href: "#overview", label: "Dashboard", icon: LayoutGrid },
    { href: "#search", label: "Search Workers", icon: Search },
    { href: "#hires", label: "My Hires", icon: Users },
    { href: "#reviews", label: "Reviews", icon: Star },
    { href: "#suggestions", label: "Insights", icon: Gauge },
    { href: "#settings", label: "Settings", icon: Settings },
  ]
  const nav = role === "Employer" ? employerNav : workerNav

  const [hash, setHash] = useState<string>(
    typeof window !== "undefined" && window.location.hash ? window.location.hash : "#overview",
  )
  useEffect(() => {
    const handler = () => setHash(window.location.hash || "#overview")
    handler()
    window.addEventListener("hashchange", handler)
    return () => window.removeEventListener("hashchange", handler)
  }, [])
  const currentLabel = (() => {
    switch (hash) {
      case "#verification":
        return "Verification Center"
      case "#profile":
        return "My Profile"
      case "#trust":
        return "Trust Score"
      case "#suggestions":
        return role === "Employer" ? "Insights" : "Suggestions"
      case "#settings":
        return "Settings"
      case "#search":
        return "Search Workers"
      case "#hires":
        return "My Hires"
      case "#reviews":
        return "Reviews"
      default:
        return "Dashboard"
    }
  })()
  const friendlyTitle = mapLabelToFriendly(currentLabel)

  const Sidebar = (
    <aside className="hidden lg:flex lg:w-64 lg:flex-col border-r bg-background">
      <div className="h-14 px-4 flex items-center gap-2">
        <Shield className="text-primary" />
        <span className="font-semibold">TrustGuard AI</span>
      </div>
      <Separator />
      <nav className="p-3 grid gap-1">
        {nav.map((item) => {
          const Icon = item.icon
          const active = pathname.startsWith(item.href)
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-2 rounded-md px-2 py-2 text-sm hover:bg-secondary transition-colors",
                active && "bg-secondary",
              )}
            >
              {Icon && <Icon className="h-4 w-4 text-muted-foreground" />}
              <span>{item.label}</span>
            </Link>
          )
        })}
      </nav>
      <div className="mt-auto p-3">
        <Button
          variant="secondary"
          className="w-full justify-start gap-2"
          onClick={() => {
            logout()
            window.location.href = "/"
          }}
        >
          <LogOut className="h-4 w-4" /> Logout
        </Button>
      </div>
    </aside>
  )

  return (
    <main className="min-h-dvh flex">
      {Sidebar}
      <div className="flex-1 grid min-w-0">
        {/* Topbar */}
        <header className="h-14 border-b bg-background/95 backdrop-blur flex items-center justify-between px-3 lg:px-6">
          <div className="flex items-center gap-2">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="p-0 w-72">
                <div className="h-14 px-4 flex items-center gap-2">
                  <Shield className="text-primary" />
                  <span className="font-semibold">TrustGuard AI</span>
                </div>
                <Separator />
                <nav className="p-3 grid gap-1">
                  {nav.map((item) => {
                    const Icon = item.icon
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center gap-2 rounded-md px-2 py-2 text-sm hover:bg-secondary"
                        onClick={() => setOpen(false)}
                      >
                        {Icon && <Icon className="h-4 w-4 text-muted-foreground" />}
                        <span>{item.label}</span>
                      </Link>
                    )
                  })}
                </nav>
                <div className="mt-auto p-3">
                  <Button
                    variant="secondary"
                    className="w-full justify-start gap-2"
                    onClick={() => {
                      logout()
                      window.location.href = "/"
                    }}
                  >
                    <LogOut className="h-4 w-4" /> Logout
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
            <div className="grid">
              <span className="font-medium leading-tight">{role} Dashboard</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground">{user?.name}</span>
            <div className="h-8 w-8 rounded-full bg-secondary" aria-hidden />
          </div>
        </header>

        {/* Section header */}
        <div className="px-4 md:px-6 lg:px-8 py-3">
          <h2 className="text-xl font-semibold text-foreground mb-4">{friendlyTitle}</h2>
          {/* Optional subtitle could be added here if needed */}
        </div>

        {/* Routed content */}
        <section className="fade-in p-4 md:p-6 lg:p-8">{children}</section>
      </div>
    </main>
  )
}

export function DashboardShell({
  title,
  subtitle,
  nav,
  children,
}: {
  title: string
  subtitle?: string
  nav: DashboardNavItem[]
  children: ReactNode
}) {
  const { user, logout } = useAuth()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const Sidebar = (
    <aside className="hidden lg:flex lg:w-64 lg:flex-col border-r bg-background">
      <div className="h-14 px-4 flex items-center gap-2">
        <Shield className="text-primary" />
        <span className="font-semibold">TrustGuard AI</span>
      </div>
      <Separator />
      <nav className="p-3 grid gap-1">
        {nav.map((item) => {
          const active = pathname.startsWith(item.href)
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-2 rounded-md px-2 py-2 text-sm hover:bg-secondary transition-colors",
                active && "bg-secondary",
              )}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          )
        })}
      </nav>
      <div className="mt-auto p-3">
        <Button
          variant="secondary"
          className="w-full justify-start gap-2"
          onClick={() => {
            logout()
            window.location.href = "/"
          }}
        >
          <LogOut className="h-4 w-4" /> Logout
        </Button>
      </div>
    </aside>
  )

  const activeItem =
    nav.find((i) => pathname === i.href || pathname.startsWith(i.href + "/")) ||
    nav.find((i) => pathname === i.href) ||
    nav[0]
  const sectionTitle = mapLabelToFriendly(activeItem?.label ?? "Dashboard")

  return (
    <main className="min-h-dvh flex">
      {Sidebar}
      <div className="flex-1 grid min-w-0">
        {/* Topbar */}
        <header className="h-14 border-b bg-background/95 backdrop-blur flex items-center justify-between px-3 lg:px-6">
          <div className="flex items-center gap-2">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="p-0 w-72">
                <div className="h-14 px-4 flex items-center gap-2">
                  <Shield className="text-primary" />
                  <span className="font-semibold">TrustGuard AI</span>
                </div>
                <Separator />
                <nav className="p-3 grid gap-1">
                  {nav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center gap-2 rounded-md px-2 py-2 text-sm hover:bg-secondary"
                      onClick={() => setOpen(false)}
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto p-3">
                  <Button
                    variant="secondary"
                    className="w-full justify-start gap-2"
                    onClick={() => {
                      logout()
                      window.location.href = "/"
                    }}
                  >
                    <LogOut className="h-4 w-4" /> Logout
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
            <div className="grid">
              <span className="font-medium leading-tight">{title}</span>
              {subtitle ? <span className="text-xs text-muted-foreground leading-none">{subtitle}</span> : null}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground">{user?.name}</span>
            <div className="h-8 w-8 rounded-full bg-secondary" aria-hidden />
          </div>
        </header>

        {/* Section header */}
        <div className="px-4 md:px-6 lg:px-8 py-3">
          <h2 className="text-xl font-semibold text-foreground mb-4">{sectionTitle}</h2>
          {/* Optional subtitle could be added here if needed */}
        </div>

        {/* Routed content */}
        <section className="fade-in p-4 md:p-6 lg:p-8">{children}</section>
      </div>
    </main>
  )
}
