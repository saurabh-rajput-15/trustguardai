"use client"

import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"

export default function EmployerSettings() {
  return (
    <div className="grid grid-cols-1 gap-4 md:gap-6">
      <Card className="p-4">
        <h3 className="text-sm font-medium mb-4">Company Profile</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="company">Company Name</Label>
            <Input id="company" placeholder="Acme Builders" />
          </div>
          <div>
            <Label htmlFor="location">Location</Label>
            <Input id="location" placeholder="Mumbai" />
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium">Notifications</p>
            <p className="text-xs text-muted-foreground">Get alerts for new applications</p>
          </div>
          <Switch />
        </div>
        <div className="mt-4">
          <Button>Save settings</Button>
        </div>
      </Card>
    </div>
  )
}
