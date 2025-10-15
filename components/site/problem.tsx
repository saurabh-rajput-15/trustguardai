"use client"

import { ShieldAlert, AlertCircle, Clock, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Problem() {
  const items = [
    { icon: AlertCircle, title: "Unverified profiles risk safety." },
    { icon: Users, title: "Honest workers lose trust." },
    { icon: Clock, title: "Manual verification wastes time." },
  ]
  return (
    <section id="problem" className="fade-in px-6 md:px-8 lg:px-12 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-destructive/10 text-destructive">
            <ShieldAlert className="h-5 w-5" aria-hidden />
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold text-pretty">
            The Hidden Misinformation Crisis in Domestic Help Hiring.
          </h2>
        </div>
        <p className="text-muted-foreground leading-relaxed text-pretty max-w-3xl">
          Fake IDs, doctored photos, and manipulated reviews have created mistrust between millions of families and
          domestic workers. Genuine workers struggle to find fair opportunities, while employers face uncertainty and
          financial loss.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {items.map((item) => (
            <Card key={item.title} className="transition-transform hover:-translate-y-0.5">
              <CardHeader className="flex flex-row items-center gap-3">
                <item.icon className="text-destructive" aria-hidden />
                <CardTitle className="text-base">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Misinformation breaks trust and slows fair hiring across the ecosystem.
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
