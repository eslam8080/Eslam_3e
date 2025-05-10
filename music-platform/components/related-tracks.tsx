import Link from "next/link"
import Image from "next/image"
import { Play, Lock } from "lucide-react"

export function RelatedTracks({ trackId }: { trackId: string }) {
  // بيانات تجريبية للأغاني المشابهة
  const relatedTracks = [
    {
      id: "101",
      title: "أغنية مشابهة 1",
      artist: "اسم الفنان",
      duration: "3:15",
      image: "/placeholder.svg?height=60&width=60",
      isPremium: false,
    },
    {
      id: "102",
      title: "أغنية مشابهة 2",
      artist: "اسم الفنان",
      duration: "4:20",
      image: "/placeholder.svg?height=60&width=60",
      isPremium: true,
    },
    {
      id: "103",
      title: "أغنية مشابهة 3",
      artist: "اسم الفنان",
      duration: "2:55",
      image: "/placeholder.svg?height=60&width=60",
      isPremium: false,
    },
    {
      id: "104",
      title: "أغنية مشابهة 4",
      artist: "اسم الفنان",
      duration: "3:40",
      image: "/placeholder.svg?height=60&width=60",
      isPremium: true,
    },
    {
      id: "105",
      title: "أغنية مشابهة 5",
      artist: "اسم الفنان",
      duration: "3:30",
      image: "/placeholder.svg?height=60&width=60",
      isPremium: false,
    },
  ]

  return (
    <div className="space-y-3">
      {relatedTracks.map((track) => (
        <Link
          key={track.id}
          href={`/track/${track.id}`}
          className="flex items-center gap-3 p-2 rounded-md hover:bg-muted/50 group"
        >
          <div className="relative h-12 w-12 overflow-hidden rounded">
            <Image src={track.image || "/placeholder.svg"} alt={track.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <Play className="h-5 w-5 text-white" />
            </div>
            {track.isPremium && (
              <div className="absolute top-0.5 left-0.5">
                <Lock className="h-3 w-3 text-white" />
              </div>
            )}
          </div>
          <div className="min-w-0 flex-1">
            <div className="font-medium truncate">{track.title}</div>
            <div className="text-xs text-muted-foreground truncate">{track.artist}</div>
          </div>
          <div className="text-xs text-muted-foreground">{track.duration}</div>
        </Link>
      ))}
    </div>
  )
}
