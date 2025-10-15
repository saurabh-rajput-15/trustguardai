"use client"

import type React from "react"

import { useState } from "react"
import { Navbar } from "@/components/site/navbar"
import { Footer } from "@/components/site/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, FileText, Fingerprint, ShieldCheck } from "lucide-react"

export default function WorkersPage() {
  const [submitted, setSubmitted] = useState(false)
  const [skills, setSkills] = useState<string[]>([])

  const toggleSkill = (s: string) => {
    setSkills((prev) => (prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]))
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate submit
    setSubmitted(true)
  }

  const skillOptions = ["Cooking", "Cleaning", "Babysitting", "Elder Care", "Driving", "Pet Care"]

  return (
    <main className="min-h-dvh flex flex-col">
      <Navbar />
      <section className="flex-1 px-6 md:px-8 lg:px-12 py-10">
        <div className="mx-auto max-w-4xl grid gap-8 md:grid-cols-[1fr]">
          <Card>
            <CardHeader>
              <CardTitle className="text-pretty">Get Verified</CardTitle>
              <CardDescription>Simple onboarding to start your verification journey.</CardDescription>
            </CardHeader>
            <CardContent>
              {submitted ? (
                <div className="rounded-lg bg-secondary p-6 text-secondary-foreground">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="text-primary" aria-hidden />
                    <div>
                      <p className="font-medium">Your documents are under verification.</p>
                      <p className="text-muted-foreground mt-1">You&apos;ll receive your Trust Score soon.</p>
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="grid gap-4">
                  <div className="grid gap-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Full Name
                    </label>
                    <Input id="name" name="name" placeholder="Enter your full name" required />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="id" className="text-sm font-medium">
                      ID Upload (Aadhaar/PAN)
                    </label>
                    <Input id="id" name="id" type="file" accept="image/*,application/pdf" required />
                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                      <Fingerprint className="h-4 w-4" /> OCR + Tamper Detection enabled
                    </p>
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="exp" className="text-sm font-medium">
                      Work Experience
                    </label>
                    <Textarea
                      id="exp"
                      name="experience"
                      placeholder="Describe your work experience..."
                      className="min-h-28"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="refs" className="text-sm font-medium">
                      References (optional)
                    </label>
                    <Textarea
                      id="refs"
                      name="references"
                      placeholder="Previous employer name and phone/email..."
                      className="min-h-24"
                    />
                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                      <FileText className="h-4 w-4" /> We’ll securely cross-check references.
                    </p>
                  </div>
                  <div className="grid gap-2">
                    <span className="text-sm font-medium">Skill Tags</span>
                    <div className="flex flex-wrap gap-2">
                      {skillOptions.map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => toggleSkill(s)}
                          aria-pressed={skills.includes(s)}
                          className={`rounded-full px-3 py-1 text-sm transition-colors border ${skills.includes(s) ? "bg-primary text-primary-foreground" : "bg-card text-foreground hover:bg-secondary"}`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    {skills.map((s) => (
                      <Badge key={s} variant="secondary">
                        {s}
                      </Badge>
                    ))}
                  </div>
                  <div className="pt-2">
                    <Button type="submit" className="w-full">
                      Submit for Verification
                    </Button>
                  </div>
                </form>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Why Verify?</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-primary" aria-hidden />
                <p>Verified profiles appear higher in searches.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-primary" aria-hidden />
                <p>Gain trust from employers faster.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-primary" aria-hidden />
                <p>Get fair pay and safer working conditions.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      <Footer />
    </main>
  )
}
