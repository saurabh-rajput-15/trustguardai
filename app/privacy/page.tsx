import { Navbar } from "@/components/site/navbar"
import { Footer } from "@/components/site/footer"

export default function PrivacyPage() {
  return (
    <main className="min-h-dvh flex flex-col">
      <Navbar />
      <section className="flex-1 px-6 md:px-8 lg:px-12 py-10">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-semibold">Privacy Policy</h1>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            This is a placeholder Privacy Policy for TrustGuard AI.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  )
}
