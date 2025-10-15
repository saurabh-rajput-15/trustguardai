import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BadgeCheck, Brain, SearchCheck, Handshake } from "lucide-react"

export function Callouts() {
  const items = [
    { icon: BadgeCheck, title: "Verified IDs" },
    { icon: Brain, title: "AI-Powered Analysis" },
    { icon: SearchCheck, title: "Fake Review Detection" },
    { icon: Handshake, title: "Fair, Transparent Marketplace" },
  ]
  return (
    <section aria-labelledby="callouts" className="px-6 md:px-8 lg:px-12 py-12">
      <div className="mx-auto max-w-6xl">
        <h2 id="callouts" className="text-2xl md:text-3xl font-semibold text-pretty">
          Why TrustGuard AI
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <Card key={item.title}>
              <CardHeader className="flex flex-row items-center gap-3">
                <item.icon className="text-primary" aria-hidden />
                <CardTitle className="text-base">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Built for confidence and transparency.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
