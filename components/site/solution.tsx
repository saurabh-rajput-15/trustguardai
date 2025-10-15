"use client"

import { Brain, FileCheck2, MessageSquareWarning, ImageIcon, Gauge, ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Solution() {
  const agents = [
    {
      icon: FileCheck2,
      title: "Document Verification Agent",
      text: "Detects fake or tampered IDs with OCR and watermark checks.",
    },
    {
      icon: MessageSquareWarning,
      title: "Reputation Agent",
      text: "Flags review manipulation using NLP.",
    },
    {
      icon: ImageIcon,
      title: "Media Forensics Agent",
      text: "Detects deepfakes and doctored photos/videos.",
    },
    {
      icon: Gauge,
      title: "Trust Score Generator",
      text: "Creates an explainable trust score anyone can understand.",
    },
  ]
  return (
    <section id="solution" className="fade-in px-6 md:px-8 lg:px-12 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
            <Brain className="h-5 w-5" aria-hidden />
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold">Agentic AI That Finds the Truth.</h2>
        </div>

        {/* Flow layout with connectors on larger screens */}
        <div className="hidden md:grid md:grid-cols-7 md:items-center md:gap-3">
          {agents.map((a, idx) => (
            <div key={a.title} className="contents">
              <Card className="col-span-2 transition-transform hover:-translate-y-0.5 hover:shadow-sm">
                <CardHeader className="flex flex-row items-start gap-3">
                  <a.icon className="mt-1 text-primary" aria-hidden />
                  <CardTitle className="text-base">{a.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">{a.text}</CardContent>
              </Card>
              {idx < agents.length - 1 ? (
                <div className="col-span-1 flex justify-center">
                  <ArrowRight className="text-muted-foreground" aria-hidden />
                </div>
              ) : null}
            </div>
          ))}
        </div>

        {/* Stacked on mobile */}
        <div className="md:hidden grid gap-4">
          {agents.map((a) => (
            <Card key={a.title} className="transition-transform hover:-translate-y-0.5 hover:shadow-sm">
              <CardHeader className="flex flex-row items-start gap-3">
                <a.icon className="mt-1 text-primary" aria-hidden />
                <CardTitle className="text-base">{a.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">{a.text}</CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
