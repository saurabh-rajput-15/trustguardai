import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, HeartHandshake } from "lucide-react"

export function SocialImpact() {
  return (
    <section aria-labelledby="social-impact" className="fade-in px-6 md:px-8 lg:px-12 py-12">
      <div className="mx-auto max-w-6xl">
        <h2 id="social-impact" className="text-2xl md:text-3xl font-semibold text-pretty">
          Social Impact
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader className="flex flex-row items-start gap-3">
              <Users className="mt-1 text-primary" aria-hidden />
              <CardTitle className="text-base">Empowering Domestic Workers</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              TrustGuard AI empowers workers—often from marginalized communities—to prove credibility and access
              dignified work through transparent verification and growing digital reputation.
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-start gap-3">
              <HeartHandshake className="mt-1 text-primary" aria-hidden />
              <CardTitle className="text-base">Safer Families, Stronger Trust</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Families get a safer, smarter way to hire with confidence. By combining AI with human transparency, we
              build a more trusted, equitable, and digitally secure workforce ecosystem.
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
