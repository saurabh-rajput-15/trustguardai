"use client"

import { Card } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function EmployerReviews() {
  return (
    <div className="grid grid-cols-1 gap-4">
      <Card className="p-4">
        <h3 className="text-sm font-medium mb-2">Recent Reviews</h3>
        <ul className="text-sm space-y-2">
          <li>
            <span className="font-medium">Ravi Kumar</span> — Great work, on time. ★★★★☆
          </li>
          <li>
            <span className="font-medium">Anita Singh</span> — Precise craftsmanship. ★★★★★
          </li>
        </ul>
      </Card>
      <Card className="p-4">
        <h3 className="text-sm font-medium mb-2">Leave a Review</h3>
        <Textarea placeholder="Write your feedback..." className="mb-2" />
        <Button>Submit</Button>
      </Card>
    </div>
  )
}
