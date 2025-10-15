"use client"

import { Card } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function WorkerEarnings() {
  return (
    <div className="grid grid-cols-1 gap-4">
      <Card className="p-4">
        <h3 className="text-sm font-medium mb-3">Recent Jobs</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Employer</TableHead>
              <TableHead>Job</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Acme Builders</TableCell>
              <TableCell>Plumbing Fix</TableCell>
              <TableCell className="text-right">₹3,200</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Nova Homes</TableCell>
              <TableCell>Electrical Wiring</TableCell>
              <TableCell className="text-right">₹5,800</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    </div>
  )
}
