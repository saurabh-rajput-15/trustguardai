"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Building2 } from "lucide-react"

export default function EmployerOverviewPage() {
  const employerTrust = 76
  const companyCompletion = 55
  const radius = 28
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (employerTrust / 100) * circumference

  return (
    <div className="mx-auto max-w-6xl grid gap-8">
      {/* Welcome + Trust */}
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>
              Welcome, {"{"}Employer Name{"}"} 👋
            </span>
            <Badge variant="secondary">Employer</Badge>
          </CardTitle>
          <CardDescription>Find verified workers and manage trusted hires easily.</CardDescription>
        </CardHeader>
        <CardContent className="flex items-center gap-6">
          <svg width="80" height="80" viewBox="0 0 80 80" aria-label="Employer trust gauge">
            <circle cx="40" cy="40" r={radius} stroke="hsl(var(--muted))" strokeWidth="8" fill="none" />
            <circle
              cx="40"
              cy="40"
              r={radius}
              stroke="hsl(var(--primary))"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              style={{ transition: "stroke-dashoffset 800ms ease" }}
            />
            <text x="50%" y="52%" textAnchor="middle" className="fill-foreground text-sm font-semibold">
              {employerTrust}
            </text>
          </svg>
          <div className="grid gap-2">
            <div className="text-sm">
              Employer Trust <Badge className="ml-2">{employerTrust}/100</Badge>
            </div>
            <Button size="sm">Search Verified Workers</Button>
          </div>
        </CardContent>
      </Card>

      {/* Company Profile */}
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle>Company Profile</CardTitle>
          <CardDescription>Keep your profile complete to attract more applications.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarFallback>
                <Building2 className="h-4 w-4" />
              </AvatarFallback>
            </Avatar>
            <div className="grid">
              <span className="text-sm font-medium">Company Name</span>
              <span className="text-xs text-muted-foreground">Mumbai, IN • Business Verified: Pending</span>
            </div>
            <div className="ml-auto">
              <Button size="sm" variant="secondary">
                Edit Company Profile
              </Button>
            </div>
          </div>
          <div className="grid gap-2">
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>Profile completion</span>
              <span>{companyCompletion}%</span>
            </div>
            <Progress value={companyCompletion} />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
