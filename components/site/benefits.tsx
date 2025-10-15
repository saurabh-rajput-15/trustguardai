"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { UserCheck, Home } from "lucide-react"

export function Benefits() {
  return (
    <section className="fade-in px-6 md:px-8 lg:px-12 py-12">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-semibold">Benefits for Everyone</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader className="flex flex-row items-start gap-3">
              <UserCheck className="mt-1 text-primary" aria-hidden />
              <CardTitle className="text-base">For Workers</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <ul className="list-disc pl-5 grid gap-2">
                <li>Stand out with verified profiles.</li>
                <li>Gain access to more and better job opportunities.</li>
                <li>Build a digital reputation that grows with every verified job.</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-start gap-3">
              <Home className="mt-1 text-primary" aria-hidden />
              <CardTitle className="text-base">For Employers</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <ul className="list-disc pl-5 grid gap-2">
                <li>Hire safely with verified information.</li>
                <li>Avoid time wasted on fake or misleading profiles.</li>
                <li>Get peace of mind with explainable trust scores.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
