"use client"

import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

export default function EmployerSearchWorkers() {
  return (
    <div className="grid grid-cols-1 gap-4 md:gap-6">
      <Card className="p-4">
        <h3 className="text-sm font-medium mb-4">Search Filters</h3>
        <div className="grid md:grid-cols-4 gap-3">
          <div>
            <Label className="text-xs">Skills</Label>
            <Input placeholder="Plumber, Electrician..." />
          </div>
          <div>
            <Label className="text-xs">Location</Label>
            <Input placeholder="Mumbai" />
          </div>
          <div>
            <Label className="text-xs">Verification</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Any" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any</SelectItem>
                <SelectItem value="basic">Basic</SelectItem>
                <SelectItem value="verified">Verified</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-end">
            <Button className="w-full">Search</Button>
          </div>
        </div>
      </Card>
      <Card className="p-4">
        <h3 className="text-sm font-medium mb-3">Results</h3>
        <div className="grid sm:grid-cols-2 gap-3">
          <div className="rounded-md border p-3">
            <p className="font-medium">Ravi Kumar</p>
            <p className="text-sm text-muted-foreground">Electrician • Trust 86</p>
            <Button size="sm" className="mt-2">
              View
            </Button>
          </div>
          <div className="rounded-md border p-3">
            <p className="font-medium">Anita Singh</p>
            <p className="text-sm text-muted-foreground">Carpenter • Trust 80</p>
            <Button size="sm" className="mt-2">
              View
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
