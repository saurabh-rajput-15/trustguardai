import { DashboardShell } from "@/components/dashboard/layout"
import { FileCheck2, BadgeCheck, User2, Gauge, Wallet, Settings } from "lucide-react"
import type { ReactNode } from "react"

export default function WorkerLayout({ children }: { children: ReactNode }) {
  const nav = [
    { href: "/dashboard/worker", label: "Dashboard", icon: <Gauge className="h-4 w-4" /> },
    {
      href: "/dashboard/worker/verification-center",
      label: "Verification Center",
      icon: <FileCheck2 className="h-4 w-4" />,
    },
    { href: "/dashboard/worker/my-profile", label: "My Profile", icon: <User2 className="h-4 w-4" /> },
    { href: "/dashboard/worker/trust-score", label: "Trust Score", icon: <BadgeCheck className="h-4 w-4" /> },
    { href: "/dashboard/worker/earnings", label: "Earnings & Employers", icon: <Wallet className="h-4 w-4" /> },
    { href: "/dashboard/worker/settings", label: "Settings", icon: <Settings className="h-4 w-4" /> },
  ]
  return (
    <DashboardShell title="Worker Dashboard" subtitle="Manage verification, profile, and trust" nav={nav}>
      {children}
    </DashboardShell>
  )
}
