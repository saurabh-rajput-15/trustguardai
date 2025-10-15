"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { CheckCircle2, ImageIcon, User2, FileCheck2 } from "lucide-react"

export default function WorkerOverviewPage() {
  const trust = 82
  const completion = 60
  const verifying = true
  const radius = 28
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (trust / 100) * circumference

  return (
    <div className="mx-auto max-w-6xl grid gap-8">
      {/* Welcome + Trust */}
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>
              Welcome, {"{"}Worker Name{"}"} 👋
            </span>
            <Badge variant="secondary">Worker</Badge>
          </CardTitle>
          <CardDescription>Build your verified profile and gain trust from families.</CardDescription>
        </CardHeader>
        <CardContent className="flex items-center gap-6">
          <svg width="80" height="80" viewBox="0 0 80 80" aria-label="Trust score gauge">
            <circle cx="40" cy="40" r={radius} stroke="hsl(var(--muted))" strokeWidth="8" fill="none" />
            <circle
              cx="40"
              cy="40"
              r={radius}
              stroke="hsl(var(--primary))"
              strokeWidth="8"
              strokeLinecap="round"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              style={{ transition: "stroke-dashoffset 800ms ease" }}
            />
            <text x="50%" y="52%" textAnchor="middle" className="fill-foreground text-sm font-semibold">
              {trust}
            </text>
          </svg>
          <div className="grid gap-2">
            <div className="text-sm">
              Trust Score <Badge className="ml-2">{trust}/100</Badge>
            </div>
            {verifying && (
              <Alert>
                <AlertTitle>Verification in Progress</AlertTitle>
                <AlertDescription>AI agents are verifying your data.</AlertDescription>
              </Alert>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Profile Summary */}
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle>Profile Summary</CardTitle>
          <CardDescription>Complete steps to improve visibility and trust.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarFallback>WS</AvatarFallback>
            </Avatar>
            <div className="grid">
              <span className="text-sm font-medium">Worker Name</span>
              <span className="text-xs text-muted-foreground">Cook • Mumbai, IN</span>
            </div>
            <div className="ml-auto">
              <Button size="sm" variant="secondary">
                Edit Profile
              </Button>
            </div>
          </div>
          <div className="grid gap-2">
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>Profile completion</span>
              <span>{completion}%</span>
            </div>
            <Progress value={completion} />
          </div>
          <ul className="grid sm:grid-cols-2 gap-2">
            {[
              { label: "ID Upload", done: true, icon: FileCheck2 },
              { label: "References", done: false, icon: CheckCircle2 },
              { label: "Work History", done: true, icon: User2 },
              { label: "Media Verification", done: false, icon: ImageIcon },
            ].map((item) => {
              const Icon = item.icon
              return (
                <li key={item.label} className="flex items-center gap-2 rounded-md border p-2">
                  <Icon className={`h-4 w-4 ${item.done ? "text-green-600" : "text-muted-foreground"}`} />
                  <span className="text-sm">{item.label}</span>
                </li>
              )
            })}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
