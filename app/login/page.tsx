"use client"

import { Navbar } from "@/components/site/navbar"
import { Footer } from "@/components/site/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { useAuth } from "@/hooks/use-auth"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useMemo, useState } from "react"
import { Shield, LogIn, UserPlus, AtSign, KeyRound, User, Briefcase } from "lucide-react"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"

export default function LoginPage() {
  const { login } = useAuth()
  const router = useRouter()
  const searchParams = useSearchParams()
  const initialMode = useMemo(() => (searchParams.get("mode") === "register" ? "register" : "login"), [searchParams])
  const [mode, setMode] = useState<"login" | "register">(initialMode as "login" | "register")
  const [role, setRole] = useState<"Worker" | "Employer">("Worker")

  useEffect(() => {
    setMode(initialMode as "login" | "register")
  }, [initialMode])

  return (
    <main className="min-h-dvh flex flex-col">
      <Navbar />
      <section className="flex-1 px-6 md:px-8 lg:px-12 py-10">
        <div className="mx-auto max-w-md">
          <div className="text-center mb-4">
            {/* Tagline */}
            <p className="text-sm text-muted-foreground">
              Join the Trust Network — build your verified profile as a Worker or Employer.
            </p>
          </div>

          <Card className="fade-in">
            <CardHeader>
              <CardTitle>Login / Register</CardTitle>
              <CardDescription>Access your account or create a new one to continue.</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Toggle controls */}
              <div className="mb-4 grid grid-cols-2 gap-2">
                <Button
                  type="button"
                  variant={mode === "login" ? "default" : "secondary"}
                  className="w-full"
                  aria-pressed={mode === "login"}
                  onClick={() => setMode("login")}
                >
                  <LogIn className="mr-2 h-4 w-4" aria-hidden /> Log In
                </Button>
                <Button
                  type="button"
                  variant={mode === "register" ? "default" : "secondary"}
                  className="w-full"
                  aria-pressed={mode === "register"}
                  onClick={() => setMode("register")}
                >
                  <UserPlus className="mr-2 h-4 w-4" aria-hidden /> Register
                </Button>
              </div>

              <form
                className="grid gap-4"
                onSubmit={(e) => {
                  e.preventDefault()
                  const form = e.currentTarget as HTMLFormElement
                  const formData = new FormData(form)
                  const fullName = String(formData.get("name") || "").trim()
                  const email = String(formData.get("email") || "").trim()
                  const password = String(formData.get("password") || "")
                  const confirm = String(formData.get("confirm") || "")
                  if (!email || !password) return

                  const finalRole: "Worker" | "Employer" = role

                  if (mode === "register") {
                    if (!fullName) return
                    if (password !== confirm) return
                    login({ name: fullName, email, role: finalRole })
                  } else {
                    const fallbackName = fullName || email.split("@")[0]
                    // allow role selection during login to demo both dashboards
                    login({ name: fallbackName, email, role: finalRole })
                  }
                  const dest = finalRole === "Employer" ? "/dashboard/employer" : "/dashboard/worker"
                  router.push(dest)
                }}
              >
                {mode === "register" && (
                  <div className="grid gap-2">
                    <Label htmlFor="name">Full Name</Label>
                    <InputGroup>
                      <InputGroupAddon>
                        <User aria-hidden className="text-muted-foreground" />
                      </InputGroupAddon>
                      <InputGroupInput id="name" name="name" autoComplete="name" required />
                    </InputGroup>
                  </div>
                )}

                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <InputGroup>
                    <InputGroupAddon>
                      <AtSign aria-hidden className="text-muted-foreground" />
                    </InputGroupAddon>
                    <InputGroupInput id="email" name="email" type="email" autoComplete="email" required />
                  </InputGroup>
                </div>

                <div className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    {mode === "login" && (
                      <a className="text-xs text-muted-foreground hover:underline" href="#">
                        Forgot Password?
                      </a>
                    )}
                  </div>
                  <InputGroup>
                    <InputGroupAddon>
                      <KeyRound aria-hidden className="text-muted-foreground" />
                    </InputGroupAddon>
                    <InputGroupInput
                      id="password"
                      name="password"
                      type="password"
                      autoComplete={mode === "login" ? "current-password" : "new-password"}
                      required
                    />
                  </InputGroup>
                </div>

                {mode === "register" && (
                  <div className="grid gap-2">
                    <Label htmlFor="confirm">Confirm Password</Label>
                    <InputGroup>
                      <InputGroupAddon>
                        <KeyRound aria-hidden className="text-muted-foreground" />
                      </InputGroupAddon>
                      <InputGroupInput
                        id="confirm"
                        name="confirm"
                        type="password"
                        autoComplete="new-password"
                        required
                      />
                    </InputGroup>
                  </div>
                )}

                {/* Show role selector for login mode as well */}
                <div className="grid gap-2">
                  <span className="text-sm font-medium">Select Role</span>
                  <RadioGroup
                    value={role}
                    onValueChange={(v) => setRole(v as "Worker" | "Employer")}
                    className="grid grid-cols-2 gap-3"
                  >
                    <div className="flex flex-col gap-1 rounded-md border p-3 transition-colors hover:bg-secondary">
                      <div className="flex items-center gap-2">
                        <RadioGroupItem id="role-worker" value="Worker" />
                        <Label htmlFor="role-worker" className="flex items-center gap-1.5">
                          <User className="h-4 w-4 text-muted-foreground" /> Worker
                        </Label>
                      </div>
                      <p className="text-xs text-muted-foreground">Apply for verification, get hired.</p>
                    </div>
                    <div className="flex flex-col gap-1 rounded-md border p-3 transition-colors hover:bg-secondary">
                      <div className="flex items-center gap-2">
                        <RadioGroupItem id="role-employer" value="Employer" />
                        <Label htmlFor="role-employer" className="flex items-center gap-1.5">
                          <Briefcase className="h-4 w-4 text-muted-foreground" /> Employer
                        </Label>
                      </div>
                      <p className="text-xs text-muted-foreground">Browse verified helpers, hire safely.</p>
                    </div>
                  </RadioGroup>
                </div>

                <Button type="submit" className="w-full">
                  {mode === "login" ? "Log In" : "Register & Continue"}
                </Button>

                <div className="grid gap-2">
                  <Button type="button" variant="secondary" className="w-full">
                    Continue with Google
                  </Button>
                  <Button type="button" variant="secondary" className="w-full">
                    Continue with OTP (phone)
                  </Button>
                </div>

                <p className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                  <Shield className="h-3.5 w-3.5 text-primary" aria-hidden />
                  Your data is encrypted and only used for verification.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
      <Footer />
    </main>
  )
}
