import { DashboardShell } from "@/components/dashboard/layout"
import { Gauge, Search, Users, Star, LineChart, Settings } from "lucide-react"
import type { ReactNode } from "react"
import { Suspense } from "react"

export default function EmployerLayout({ children }: { children: ReactNode }) {
  const nav = [
    { href: "/dashboard/employer", label: "Dashboard", icon: <Gauge className="h-4 w-4" /> },
    { href: "/dashboard/employer/search-workers", label: "Search Workers", icon: <Search className="h-4 w-4" /> },
    { href: "/dashboard/employer/my-hires", label: "My Hires", icon: <Users className="h-4 w-4" /> },
    { href: "/dashboard/employer/reviews", label: "Reviews", icon: <Star className="h-4 w-4" /> },
    { href: "/dashboard/employer/insights", label: "Insights", icon: <LineChart className="h-4 w-4" /> },
    { href: "/dashboard/employer/settings", label: "Settings", icon: <Settings className="h-4 w-4" /> },
  ]

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DashboardShell title="Employer Dashboard" subtitle="Search, hire, review with trust" nav={nav}>
        {children}
      </DashboardShell>
    </Suspense>
  )
}
