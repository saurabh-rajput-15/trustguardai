import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section
      className="relative px-6 md:px-8 lg:px-12 py-16 md:py-24 fade-in overflow-hidden"
      aria-labelledby="hero-title"
    >
      {/* subtle background gradient + soft pattern */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 60% at 10% 10%, color-mix(in oklab, var(--color-accent) 12%, transparent) 0%, transparent 60%), radial-gradient(60% 60% at 90% 10%, color-mix(in oklab, var(--color-primary) 10%, transparent) 0%, transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl grid gap-8 md:grid-cols-2 md:items-center">
        <div>
          <h1 id="hero-title" className="text-balance text-3xl md:text-5xl font-semibold tracking-tight">
            Fighting Misinformation in the Domestic Help Ecosystem.
          </h1>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            AI that detects fake profiles, forged documents, and manipulated reviews — empowering truth between
            households and workers.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Button asChild>
              {/* Scroll target is the auth route; we keep navigation to login/register */}
              <Link href="/login?mode=register">Get Started</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/#how-it-works">See How It Works</Link>
            </Button>
          </div>
        </div>
        <div className="rounded-lg border p-4 md:p-6 bg-background/70 backdrop-blur">
          <img
            src="/shield-verification-checks-flow.jpg"
            alt="Verification visuals illustrating AI checks for documents, reviews, and media"
            className="w-full h-auto rounded-md"
          />
        </div>
      </div>
    </section>
  )
}
