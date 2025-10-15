import { Hero } from "@/components/site/hero"
// import { Callouts } from "@/components/site/callouts"
import { HowItWorks } from "@/components/site/how-it-works"
import { Navbar } from "@/components/site/navbar"
import { Footer } from "@/components/site/footer"
import { SocialImpact } from "@/components/site/social-impact"
import { Problem } from "@/components/site/problem" // new section
import { Solution } from "@/components/site/solution" // new section
import { RedirectIfAuthed } from "@/components/site/redirect-if-authed" // redirect guard
import { Benefits } from "@/components/site/benefits"
import { PrivacyTestimonials } from "@/components/site/privacy-testimonials"
import { FAQ } from "@/components/site/faq"
import { FinalCTA } from "@/components/site/final-cta"
import { Impact } from "@/components/site/impact" // new section

export default function HomePage() {
  return (
    <main className="min-h-dvh flex flex-col">
      <Navbar />
      <RedirectIfAuthed />
      <section className="flex-1">
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <Impact /> {/* new impact section */}
        <Benefits />
        <SocialImpact />
        <PrivacyTestimonials />
        <FAQ />
        <FinalCTA />
      </section>
      <Footer />
    </main>
  )
}
