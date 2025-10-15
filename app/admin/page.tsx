"use client"

import { Navbar } from "@/components/site/navbar"
import { Footer } from "@/components/site/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Progress } from "@/components/ui/progress"

const rows = [
  { name: "Meera Sharma", type: "Worker", status: "In Review", lastChecked: "1h ago", score: 82 },
  { name: "Ravi Kumar", type: "Worker", status: "Completed", lastChecked: "6h ago", score: 91 },
  { name: "HomeCare Pvt", type: "Employer", status: "Queued", lastChecked: "2h ago", score: 0 },
]

export default function AdminPage() {
  return (
    <main className="min-h-dvh flex flex-col">
      <Navbar />
      <section className="flex-1 px-6 md:px-8 lg:px-12 py-10">
        <div className="mx-auto max-w-6xl grid gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Latest Verifications</CardTitle>
              <CardDescription>Name | Type | Status | Last Checked | Score</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="text-left text-muted-foreground">
                    <tr className="border-b">
                      <th className="py-2 pr-4">Name</th>
                      <th className="py-2 pr-4">Type</th>
                      <th className="py-2 pr-4">Status</th>
                      <th className="py-2 pr-4">Last Checked</th>
                      <th className="py-2 pr-4">Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((r, i) => (
                      <tr key={i} className="border-b">
                        <td className="py-2 pr-4">{r.name}</td>
                        <td className="py-2 pr-4">{r.type}</td>
                        <td className="py-2 pr-4">{r.status}</td>
                        <td className="py-2 pr-4">{r.lastChecked}</td>
                        <td className="py-2 pr-4">{r.score ? r.score : "-"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Profile Verification Agent</CardTitle>
                <CardDescription>Checks IDs and documents</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Active</span>
                  <Switch defaultChecked aria-label="Toggle Profile Verification Agent" />
                </div>
                <Progress value={64} />
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>Queue: 12</span>
                  <span>ETA: ~4m</span>
                </div>
                <Button variant="secondary">View Logs</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Reputation Monitoring Agent</CardTitle>
                <CardDescription>Detects fake reviews</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Active</span>
                  <Switch defaultChecked aria-label="Toggle Reputation Monitoring Agent" />
                </div>
                <Progress value={38} />
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>Queue: 8</span>
                  <span>ETA: ~2m</span>
                </div>
                <Button variant="secondary">View Logs</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Dispute Resolution Agent</CardTitle>
                <CardDescription>Handles complaints</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Active</span>
                  <Switch aria-label="Toggle Dispute Resolution Agent" />
                </div>
                <Progress value={12} />
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>Queue: 3</span>
                  <span>ETA: ~1m</span>
                </div>
                <Button variant="secondary">View Logs</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
