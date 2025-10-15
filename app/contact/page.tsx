"use client"

import { Navbar } from "@/components/site/navbar"
import { Footer } from "@/components/site/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function ContactPage() {
  const [sent, setSent] = useState(false)
  return (
    <main className="min-h-dvh flex flex-col">
      <Navbar />
      <section className="flex-1 px-6 md:px-8 lg:px-12 py-10">
        <div className="mx-auto max-w-3xl">
          <Card>
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
              <CardDescription>We&apos;d love to hear from you.</CardDescription>
            </CardHeader>
            <CardContent>
              {sent ? (
                <div className="rounded-md bg-secondary p-4 text-secondary-foreground">
                  Thanks! We&apos;ll get back to you soon.
                </div>
              ) : (
                <form
                  className="grid gap-4"
                  onSubmit={(e) => {
                    e.preventDefault()
                    setSent(true)
                  }}
                >
                  <div className="grid gap-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input id="name" required />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" required />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea id="message" className="min-h-28" required />
                  </div>
                  <Button type="submit">Send</Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </section>
      <Footer />
    </main>
  )
}
