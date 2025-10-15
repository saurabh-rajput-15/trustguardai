import { Navbar } from "@/components/site/navbar"
import { Footer } from "@/components/site/footer"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export default function AboutPage() {
  const team = [
    { name: "Ayesha Khan", role: "CEO", photo: "/headshot-of-woman.jpg" },
    { name: "Rohit Mehta", role: "CTO", photo: "/headshot-of-man.jpg" },
    { name: "Priya Nair", role: "Head of Trust & Safety", photo: "/headshot-of-woman.jpg" },
  ]

  return (
    <main className="min-h-dvh flex flex-col">
      <Navbar />
      <section className="flex-1 px-6 md:px-8 lg:px-12 py-10">
        <div className="mx-auto max-w-5xl grid gap-8">
          <div className="grid gap-3">
            <h1 className="text-3xl font-semibold text-pretty">About TrustGuard AI</h1>
            <p className="text-muted-foreground leading-relaxed">
              TrustGuard AI is committed to solving misinformation and trust challenges in the domestic-help sector
              using responsible, explainable AI.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our vision is to empower millions of workers with verified digital credibility and give households peace
              of mind.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {team.map((t) => (
              <Card key={t.name}>
                <CardHeader className="items-center text-center">
                  <img
                    src={t.photo || "/placeholder.svg"}
                    alt={`Photo of ${t.name}`}
                    className="h-24 w-24 rounded-full object-cover"
                  />
                  <CardTitle className="mt-2">{t.name}</CardTitle>
                  <CardDescription>{t.role}</CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground text-center">
                  Building trust with AI-driven verification and transparency.
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
