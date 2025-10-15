"use client"

import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export default function WorkerMyProfile() {
  return (
    <div className="grid grid-cols-1 gap-4 md:gap-6">
      <Card className="p-4">
        <h3 className="text-sm font-medium mb-4">Profile</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Your full name" />
          </div>
          <div>
            <Label htmlFor="skills">Skills</Label>
            <Input id="skills" placeholder="Plumbing, Electrical..." />
          </div>
          <div className="sm:col-span-2">
            <Label htmlFor="bio">Bio</Label>
            <Input id="bio" placeholder="Short introduction" />
          </div>
        </div>
        <div className="mt-4">
          <Button>Save changes</Button>
        </div>
      </Card>
    </div>
  )
}
