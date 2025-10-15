"use client"

import { useMemo, useState } from "react"
import { Navbar } from "@/components/site/navbar"
import { Footer } from "@/components/site/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { WorkerCard } from "@/components/worker/worker-card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"

type Worker = {
  id: string
  name: string
  city: string
  skills: string[]
  trustScore: number
  verifiedId: boolean
  references: number
  photoUrl: string
  description: string
  reviewFlagged?: boolean
}

const WORKERS: Worker[] = [
  {
    id: "1",
    name: "Meera Sharma",
    city: "Mumbai",
    skills: ["Cooking", "Cleaning"],
    trustScore: 82,
    verifiedId: true,
    references: 2,
    photoUrl: "/headshot-of-woman.jpg",
    description: "Experienced cook and housekeeper with 5+ years in Bandra.",
  },
  {
    id: "2",
    name: "Ravi Kumar",
    city: "Delhi",
    skills: ["Driving", "Elder Care"],
    trustScore: 91,
    verifiedId: true,
    references: 3,
    photoUrl: "/headshot-of-man.jpg",
    description: "Safe driver and patient caregiver with strong references.",
  },
  {
    id: "3",
    name: "Anita Verma",
    city: "Bengaluru",
    skills: ["Babysitting", "Cleaning"],
    trustScore: 74,
    verifiedId: true,
    references: 1,
    photoUrl: "/headshot-of-woman.jpg",
    description: "Babysitter with CPR training, great with toddlers.",
    reviewFlagged: true,
  },
]

const SKILLS = ["Cooking", "Cleaning", "Babysitting", "Elder Care", "Driving", "Pet Care"]
const CITIES = ["Mumbai", "Delhi", "Bengaluru", "Pune", "Hyderabad", "Chennai"]

export default function EmployersPage() {
  const [query, setQuery] = useState("")
  const [city, setCity] = useState("")
  const [minScore, setMinScore] = useState(0)
  const [selectedSkills, setSelectedSkills] = useState<string[]>([])

  const toggleSkill = (s: string) => {
    setSelectedSkills((prev) => (prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]))
  }

  const filtered = useMemo(() => {
    return WORKERS.filter((w) => {
      const q = query.toLowerCase()
      const matchesQuery =
        w.name.toLowerCase().includes(q) ||
        w.skills.some((s) => s.toLowerCase().includes(q)) ||
        w.city.toLowerCase().includes(q)
      const matchesCity = !city || w.city === city
      const matchesScore = w.trustScore >= minScore
      const matchesSkills = selectedSkills.length === 0 || selectedSkills.every((s) => w.skills.includes(s))
      return matchesQuery && matchesCity && matchesScore && matchesSkills
    })
  }, [query, city, minScore, selectedSkills])

  return (
    <main className="min-h-dvh flex flex-col">
      <Navbar />
      <section className="flex-1 px-6 md:px-8 lg:px-12 py-10">
        <div className="mx-auto max-w-6xl grid gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Explore Workers</CardTitle>
              <CardDescription>Find verified domestic helpers near you.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="grid gap-2 md:col-span-2">
                  <label htmlFor="search" className="text-sm font-medium">
                    Search
                  </label>
                  <Input
                    id="search"
                    placeholder="Search by name, skill, or city..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="city" className="text-sm font-medium">
                    City
                  </label>
                  <select
                    id="city"
                    className="h-10 rounded-md border bg-background px-3 py-2"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  >
                    <option value="">All Cities</option>
                    {CITIES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="grid gap-2">
                  <span className="text-sm font-medium">Skills</span>
                  <div className="flex flex-wrap gap-2">
                    {SKILLS.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => toggleSkill(s)}
                        aria-pressed={selectedSkills.includes(s)}
                        className={`rounded-full px-3 py-1 text-sm transition-colors border ${selectedSkills.includes(s) ? "bg-primary text-primary-foreground" : "bg-card text-foreground hover:bg-secondary"}`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    {selectedSkills.map((s) => (
                      <Badge key={s} variant="secondary">
                        {s}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="grid gap-2">
                  <label htmlFor="score" className="text-sm font-medium">
                    Minimum Trust Score
                  </label>
                  <input
                    id="score"
                    type="range"
                    min={0}
                    max={100}
                    value={minScore}
                    onChange={(e) => setMinScore(Number.parseInt(e.target.value))}
                    className="w-full accent-[var(--color-primary)]"
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={minScore}
                  />
                  <div className="text-sm text-muted-foreground">Selected: {minScore}</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((w) => (
              <Dialog key={w.id}>
                <DialogTrigger asChild>
                  <div>
                    <WorkerCard worker={w} />
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-lg">
                  <DialogHeader>
                    <DialogTitle>{w.name}</DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={w.photoUrl || "/placeholder.svg"}
                        alt={`Profile photo of ${w.name}`}
                        className="h-16 w-16 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-sm text-muted-foreground">{w.city}</p>
                        <div className="mt-1 flex flex-wrap gap-2">
                          {w.skills.map((s) => (
                            <Badge key={s} variant="secondary">
                              {s}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="leading-relaxed">{w.description}</p>
                    <div className="grid gap-2">
                      <p className="font-medium">
                        Trust Score: <span className="text-primary">{w.trustScore}/100</span>{" "}
                        {w.trustScore >= 80 ? "✅" : ""}
                      </p>
                      <ul className="text-sm text-muted-foreground list-disc pl-5">
                        <li>✔️ ID verified</li>
                        <li>
                          ✔️ {w.references} employer reference{w.references !== 1 ? "s" : ""} validated
                        </li>
                        {w.reviewFlagged ? <li>⚠️ Review flagged – under review</li> : null}
                      </ul>
                    </div>
                    <div className="flex items-center gap-3 pt-2">
                      <Button variant="secondary">Report Issue</Button>
                      <Button>Hire Worker</Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
            {filtered.length === 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>No results</CardTitle>
                  <CardDescription>Try adjusting your filters or search query.</CardDescription>
                </CardHeader>
              </Card>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
