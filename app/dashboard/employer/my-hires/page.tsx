"use client"

import { Card } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

export default function EmployerMyHires() {
  return (
    <Card className="p-4">
      <h3 className="text-sm font-medium mb-3">Current Hires</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Worker</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Ravi Kumar</TableCell>
            <TableCell>Electrician</TableCell>
            <TableCell>Active</TableCell>
            <TableCell className="text-right">
              <Button size="sm" variant="outline">
                Message
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Card>
  )
}
