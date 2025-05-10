import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export function TrendingArtists() {
  // بيانات تجريبية للفنانين
  const artists = [
    {
      id: "1",
      name: "فنان 1",
      image: "/placeholder.svg?height=100&width=100",
      followers: "1.2M",
    },
    {
      id: "2",
      name: "فنان 2",
      image: "/placeholder.svg?height=100&width=100",
      followers: "850K",
    },
    {
      id: "3",
      name: "فنان 3",
      image: "/placeholder.svg?height=100&width=100",
      followers: "2.5M",
    },
    {
      id: "4",
      name: "فنان 4",
      image: "/placeholder.svg?height=100&width=100",
      followers: "1.8M",
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {artists.map((artist) => (
        <div key={artist.id} className="flex flex-col items-center text-center">
          <Link href={`/artist/${artist.id}`} className="mb-3">
            <Avatar className="h-32 w-32 border-2 border-primary/10">
              <AvatarImage src={artist.image || "/placeholder.svg"} alt={artist.name} />
              <AvatarFallback>{artist.name.charAt(0)}</AvatarFallback>
            </Avatar>
          </Link>
          <Link href={`/artist/${artist.id}`} className="font-medium text-lg hover:text-primary">
            {artist.name}
          </Link>
          <p className="text-sm text-muted-foreground mb-3">{artist.followers} متابع</p>
          <Button variant="outline" size="sm" className="w-full">
            متابعة
          </Button>
        </div>
      ))}
    </div>
  )
}
