"use client"

import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function EmployerInsights() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
      <Card className="p-4 lg:col-span-2">
        <h3 className="text-sm font-medium mb-2">Trust Score Trend</h3>
        <div className="rounded-md border p-6 text-sm text-muted-foreground">Chart placeholder</div>
      </Card>
      <Card className="p-4">
        <h3 className="text-sm font-medium mb-2">Fraud Risk</h3>
        <div className="flex items-center justify-between text-sm mb-2">
          <span>Current Risk</span>
          <span className="text-muted-foreground">Low</span>
        </div>
        <Progress value={12} />
      </Card>
    </div>
  )
}
