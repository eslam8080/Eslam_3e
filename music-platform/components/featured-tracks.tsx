import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Play, Lock } from "lucide-react"

export function FeaturedTracks() {
  // بيانات تجريبية للأغاني المميزة
  const featuredTracks = [
    {
      id: "1",
      title: "أغنية مميزة 1",
      artist: "فنان 1",
      image: "/placeholder.svg?height=200&width=200",
      isPremium: false,
      plays: "1.2M",
    },
    {
      id: "2",
      title: "أغنية مميزة 2",
      artist: "فنان 2",
      image: "/placeholder.svg?height=200&width=200",
      isPremium: true,
      plays: "850K",
    },
    {
      id: "3",
      title: "أغنية مميزة 3",
      artist: "فنان 3",
      image: "/placeholder.svg?height=200&width=200",
      isPremium: false,
      plays: "2.5M",
    },
    {
      id: "4",
      title: "أغنية مميزة 4",
      artist: "فنان 4",
      image: "/placeholder.svg?height=200&width=200",
      isPremium: true,
      plays: "1.8M",
    },
    {
      id: "5",
      title: "أغنية مميزة 5",
      artist: "فنان 5",
      image: "/placeholder.svg?height=200&width=200",
      isPremium: false,
      plays: "3.1M",
    },
    {
      id: "6",
      title: "أغنية مميزة 6",
      artist: "فنان 6",
      image: "/placeholder.svg?height=200&width=200",
      isPremium: false,
      plays: "920K",
    },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {featuredTracks.map((track) => (
        <Link
          key={track.id}
          href={`/track/${track.id}`}
          className="group relative flex flex-col overflow-hidden rounded-md"
        >
          <div className="relative aspect-square overflow-hidden rounded-md">
            <Image
              src={track.image || "/placeholder.svg"}
              alt={track.title}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="rounded-full bg-primary p-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                <Play className="h-6 w-6 text-primary-foreground" />
              </div>
            </div>
            {track.isPremium && (
              <div className="absolute top-2 left-2">
                <Badge variant="secondary" className="gap-1 bg-black/70 text-white border-none">
                  <Lock className="h-3 w-3" />
                  مميز
                </Badge>
              </div>
            )}
          </div>
          <div className="mt-2">
            <h3 className="font-medium text-sm line-clamp-1">{track.title}</h3>
            <p className="text-xs text-muted-foreground">{track.artist}</p>
            <p className="text-xs text-muted-foreground mt-1">{track.plays} استماع</p>
          </div>
        </Link>
      ))}
    </div>
  )
}
