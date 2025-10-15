"use client"

import { Card } from "@/components/ui/card"

export default function WorkerTrustScore() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
      <Card className="p-4 lg:col-span-1">
        <h3 className="text-sm font-medium mb-2">Score</h3>
        <div className="h-20 w-20 rounded-full grid place-content-center bg-teal-50 text-teal-700 font-semibold">
          82
        </div>
        <p className="text-sm text-muted-foreground mt-2">Based on verification, reviews, and history.</p>
      </Card>
      <Card className="p-4 lg:col-span-2">
        <h3 className="text-sm font-medium mb-2">Breakdown</h3>
        <ul className="text-sm space-y-1">
          <li>Verified Documents: +30</li>
          <li>Reviews (12): +28</li>
          <li>Work History (5 entries): +18</li>
          <li>Flags: -4</li>
        </ul>
      </Card>
    </div>
  )
}
