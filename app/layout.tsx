import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "TrustGuard AI",
  description: "Fighting misinformation in domestic help hiring with agentic AI.",
  generator: "v0.app",
}

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans", // reuse variable name to avoid CSS changes
})
const mono = GeistMono

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable} antialiased`}>
      <body className="font-sans">
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
