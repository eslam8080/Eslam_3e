import { TrackDetails } from "@/components/track-details"
import { RelatedTracks } from "@/components/related-tracks"
import { Comments } from "@/components/comments"

export default function TrackPage({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <TrackDetails id={params.id} />
          <Comments trackId={params.id} />
        </div>
        <div className="lg:col-span-1">
          <div className="sticky top-20">
            <h2 className="text-xl font-bold mb-4">أغاني مشابهة</h2>
            <RelatedTracks trackId={params.id} />
          </div>
        </div>
      </div>
    </div>
  )
}
