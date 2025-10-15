"use client"

import { useEffect } from "react"
import { useAuth } from "@/hooks/use-auth"
import { useRouter } from "next/navigation"

export function RedirectIfAuthed() {
  const { user } = useAuth()
  const router = useRouter()
  useEffect(() => {
    if (user) {
      const path = user.role === "Employer" ? "/dashboard/employer" : "/dashboard/worker"
      router.replace(path)
    }
  }, [user, router])
  return null
}
