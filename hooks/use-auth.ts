"use client"

import { useCallback, useEffect, useState } from "react"

export type User = { name: string; email: string; role: "Worker" | "Employer" }

const STORAGE_KEY = "trustguard_user"

export function useAuth() {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) setUser(JSON.parse(raw))
    } catch {}
    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) {
        setUser(e.newValue ? JSON.parse(e.newValue) : null)
      }
    }
    window.addEventListener("storage", onStorage)
    return () => window.removeEventListener("storage", onStorage)
  }, [])

  const login = useCallback((u: User) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(u))
    setUser(u)
  }, [])

  const logout = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY)
    setUser(null)
  }, [])

  return { user, login, logout }
}
