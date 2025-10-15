"use client"

import { Card, CardContent } from "@/components/ui/card"

export function Impact() {
  const stats = [
    { label: "+95% AI verification accuracy" },
    { label: "10,000+ verified workers" },
    { label: "30% faster hiring decisions" },
  ]
  return (
    <section className="fade-in px-6 md:px-8 lg:px-12 py-12">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-semibold">Restoring Trust, One Verification at a Time.</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {stats.map((s) => (
            <Card key={s.label} className="transition-transform hover:-translate-y-0.5">
              <CardContent className="p-6 text-center font-medium">{s.label}</CardContent>
            </Card>
          ))}
        </div>
        <figure className="mt-6 rounded-md border p-4 md:p-6 bg-secondary">
          <blockquote className="text-pretty text-sm md:text-base text-foreground">
            “TrustGuard AI helped me find verified help with full peace of mind.”
          </blockquote>
          <figcaption className="text-xs text-muted-foreground mt-2">— Verified Employer</figcaption>
        </figure>
      </div>
    </section>
  )
}
