"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/hooks/use-auth"

export default function DashboardRedirectPage() {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.replace("/login")
    } else {
      router.replace(user.role === "Employer" ? "/dashboard/employer" : "/dashboard/worker")
    }
  }, [user, router])

  return <main className="min-h-dvh flex items-center justify-center">Redirecting…</main>
}
