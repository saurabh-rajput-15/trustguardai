import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, ShieldCheck, Gauge } from "lucide-react"

export function HowItWorks() {
  const steps = [
    { icon: Upload, title: "Step 1️⃣ Upload profile or ID", text: "Securely submit your details and documents." },
    {
      icon: ShieldCheck,
      title: "Step 2️⃣ AI verifies authenticity",
      text: "Agentic checks detect misinformation across docs, media, and reviews.",
    },
    {
      icon: Gauge,
      title: "Step 3️⃣ Get your Trust Score",
      text: "Receive a clear, explainable trust score in real time.",
    },
  ]
  return (
    <section aria-labelledby="how-it-works" id="how-it-works" className="fade-in px-6 md:px-8 lg:px-12 py-12">
      <div className="mx-auto max-w-6xl">
        <h2 id="how-it-works-title" className="text-2xl md:text-3xl font-semibold text-pretty">
          How It Works
        </h2>
        <div
          className="mt-6 rounded-lg border p-4 md:p-6"
          style={{
            background:
              "radial-gradient(120% 80% at 100% 0%, color-mix(in oklab, var(--color-primary) 4%, transparent) 0%, transparent 70%)",
          }}
          aria-label="Verification flow illustration background"
        >
          <div className="grid gap-4 md:grid-cols-3">
            {steps.map((s) => (
              <Card key={s.title}>
                <CardHeader className="flex flex-row items-start gap-3">
                  <s.icon className="mt-1 text-primary" aria-hidden />
                  <CardTitle className="text-base">{s.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{s.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
