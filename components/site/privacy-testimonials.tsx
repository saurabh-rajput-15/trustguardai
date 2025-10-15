"use client"

import { ShieldCheck as ShieldLock, MessageSquareQuote } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function PrivacyTestimonials() {
  return (
    <section className="fade-in px-6 md:px-8 lg:px-12 py-12">
      <div className="mx-auto max-w-6xl grid gap-8 lg:grid-cols-2">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
              <ShieldLock className="h-5 w-5" aria-hidden />
            </span>
            <h2 className="text-2xl md:text-3xl font-semibold">Privacy & Security</h2>
          </div>
          <ul className="list-disc pl-5 grid gap-2 text-sm text-muted-foreground">
            <li>Your data is encrypted and used only for verification.</li>
            <li>We never sell personal information or display sensitive documents.</li>
            <li>Each verification step is transparent, traceable, and privacy-first.</li>
          </ul>
        </div>
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
              <MessageSquareQuote className="h-5 w-5" aria-hidden />
            </span>
            <h2 className="text-2xl md:text-3xl font-semibold">What People Say</h2>
          </div>
          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Meena, Verified Househelp</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                “I used to struggle to prove my experience. After TrustGuard verification, I got hired twice as fast!”
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Rohan, Employer, Mumbai</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                “Finally, a system that helps me hire confidently without background-check stress.”
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
