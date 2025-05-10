import { TracksList } from "@/components/tracks-list"
import { TracksFilter } from "@/components/tracks-filter"

export default function TracksPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">استكشف الموسيقى</h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <TracksFilter />
        </div>
        <div className="lg:col-span-3">
          <TracksList />
        </div>
      </div>
    </div>
  )
}
