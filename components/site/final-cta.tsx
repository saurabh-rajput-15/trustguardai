"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function FinalCTA() {
  return (
    <section className="fade-in px-6 md:px-8 lg:px-12 py-16">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-balance">Ready to build trust that matters?</h2>
        <p className="mt-3 text-muted-foreground">
          Join TrustGuard AI today and be part of a safer, fairer domestic help ecosystem.
        </p>
        <div className="mt-6 flex justify-center">
          <Button asChild>
            <Link href="/login?mode=register">Get Started</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
