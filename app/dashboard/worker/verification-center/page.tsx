"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileUp, FileCheck2 } from "lucide-react"

export default function WorkerVerificationCenter() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
      <Card className="p-4">
        <h3 className="text-sm font-medium mb-2">Government ID</h3>
        <p className="text-sm text-muted-foreground">Upload your Aadhaar/PAN for verification.</p>
        <div className="mt-3 flex items-center gap-2">
          <Button variant="outline" size="sm">
            <FileUp className="h-4 w-4 mr-2" />
            Upload
          </Button>
          <Button size="sm">
            <FileCheck2 className="h-4 w-4 mr-2" />
            Submit
          </Button>
        </div>
      </Card>
      <Card className="p-4">
        <h3 className="text-sm font-medium mb-2">Work History</h3>
        <p className="text-sm text-muted-foreground">Add past employers and documents.</p>
        <div className="mt-3">
          <Button variant="outline" size="sm">
            Add Employer
          </Button>
        </div>
      </Card>
    </div>
  )
}
