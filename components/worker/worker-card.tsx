import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

type Worker = {
  id: string
  name: string
  city: string
  skills: string[]
  trustScore: number
  verifiedId: boolean
  references: number
  photoUrl: string
  description: string
  reviewFlagged?: boolean
}

export function WorkerCard({ worker }: { worker: Worker }) {
  return (
    <Card role="button" className="hover:shadow-sm transition-shadow">
      <CardContent className="p-4 grid grid-cols-[64px_1fr] gap-3 items-center">
        <img
          src={worker.photoUrl || "/placeholder.svg"}
          alt={`Profile photo of ${worker.name}`}
          className="h-16 w-16 rounded-full object-cover"
        />
        <div>
          <div className="flex items-center justify-between">
            <p className="font-medium">{worker.name}</p>
            <span className="text-sm text-primary font-semibold">{worker.trustScore}/100</span>
          </div>
          <p className="text-xs text-muted-foreground">{worker.city}</p>
          <div className="mt-2 flex flex-wrap gap-1">
            {worker.verifiedId && <Badge variant="secondary">ID Verified</Badge>}
            {worker.references > 0 && (
              <Badge variant="secondary">
                {worker.references} Reference{worker.references !== 1 ? "s" : ""}
              </Badge>
            )}
            {worker.reviewFlagged && <Badge variant="destructive">Review Flagged</Badge>}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
