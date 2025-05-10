import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Play, Heart, MoreHorizontal, Lock } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function TracksList() {
  // بيانات تجريبية للأغاني
  const tracks = [
    {
      id: "1",
      title: "عنوان الأغنية 1",
      artist: "اسم الفنان 1",
      album: "اسم الألبوم 1",
      duration: "3:45",
      image: "/placeholder.svg?height=60&width=60",
      isPremium: false,
      plays: "1.2M",
    },
    {
      id: "2",
      title: "عنوان الأغنية 2",
      artist: "اسم الفنان 2",
      album: "اسم الألبوم 2",
      duration: "4:20",
      image: "/placeholder.svg?height=60&width=60",
      isPremium: true,
      plays: "850K",
    },
    {
      id: "3",
      title: "عنوان الأغنية 3",
      artist: "اسم الفنان 3",
      album: "اسم الألبوم 3",
      duration: "3:15",
      image: "/placeholder.svg?height=60&width=60",
      isPremium: false,
      plays: "2.5M",
    },
    {
      id: "4",
      title: "عنوان الأغنية 4",
      artist: "اسم الفنان 4",
      album: "اسم الألبوم 4",
      duration: "2:55",
      image: "/placeholder.svg?height=60&width=60",
      isPremium: true,
      plays: "1.8M",
    },
    {
      id: "5",
      title: "عنوان الأغنية 5",
      artist: "اسم الفنان 5",
      album: "اسم الألبوم 5",
      duration: "3:30",
      image: "/placeholder.svg?height=60&width=60",
      isPremium: false,
      plays: "3.1M",
    },
    {
      id: "6",
      title: "عنوان الأغنية 6",
      artist: "اسم الفنان 6",
      album: "اسم الألبوم 6",
      duration: "4:10",
      image: "/placeholder.svg?height=60&width=60",
      isPremium: false,
      plays: "920K",
    },
    {
      id: "7",
      title: "عنوان الأغنية 7",
      artist: "اسم الفنان 7",
      album: "اسم الألبوم 7",
      duration: "3:50",
      image: "/placeholder.svg?height=60&width=60",
      isPremium: true,
      plays: "1.5M",
    },
    {
      id: "8",
      title: "عنوان الأغنية 8",
      artist: "اسم الفنان 8",
      album: "اسم الألبوم 8",
      duration: "3:25",
      image: "/placeholder.svg?height=60&width=60",
      isPremium: false,
      plays: "2.2M",
    },
    {
      id: "9",
      title: "عنوان الأغنية 9",
      artist: "اسم الفنان 9",
      album: "اسم الألبوم 9",
      duration: "4:05",
      image: "/placeholder.svg?height=60&width=60",
      isPremium: true,
      plays: "780K",
    },
    {
      id: "10",
      title: "عنوان الأغنية 10",
      artist: "اسم الفنان 10",
      album: "اسم الألبوم 10",
      duration: "3:40",
      image: "/placeholder.svg?height=60&width=60",
      isPremium: false,
      plays: "1.9M",
    },
  ]

  return (
    <div className="rounded-lg border bg-card">
      <div className="grid grid-cols-12 gap-3 p-4 text-sm font-medium border-b">
        <div className="col-span-1 text-center">#</div>
        <div className="col-span-5">العنوان</div>
        <div className="col-span-3 hidden md:block">الألبوم</div>
        <div className="col-span-2 hidden md:block">الاستماع</div>
        <div className="col-span-1 text-center">المدة</div>
      </div>
      <div className="divide-y">
        {tracks.map((track, index) => (
          <div key={track.id} className="grid grid-cols-12 gap-3 p-2 text-sm items-center hover:bg-muted/50 group">
            <div className="col-span-1 text-center flex justify-center">
              <span className="group-hover:hidden">{index + 1}</span>
              <Button variant="ghost" size="icon" className="hidden group-hover:flex h-8 w-8">
                <Play className="h-4 w-4" />
                <span className="sr-only">تشغيل</span>
              </Button>
            </div>
            <div className="col-span-5 flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded">
                <Image src={track.image || "/placeholder.svg"} alt={track.title} fill className="object-cover" />
                {track.isPremium && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/60">
                    <Lock className="h-4 w-4 text-white" />
                  </div>
                )}
              </div>
              <div>
                <Link href={`/track/${track.id}`} className="font-medium hover:underline line-clamp-1">
                  {track.title}
                </Link>
                <Link href={`/artist/${track.id}`} className="text-muted-foreground hover:underline line-clamp-1">
                  {track.artist}
                </Link>
              </div>
              {track.isPremium && (
                <Badge variant="outline" className="mr-auto gap-1 border-primary/30 text-primary">
                  <Lock className="h-3 w-3" />
                  مميز
                </Badge>
              )}
            </div>
            <div className="col-span-3 hidden md:block text-muted-foreground truncate">
              <Link href={`/album/${track.id}`} className="hover:underline">
                {track.album}
              </Link>
            </div>
            <div className="col-span-2 hidden md:block text-muted-foreground">{track.plays}</div>
            <div className="col-span-1 flex items-center justify-between">
              <span className="text-muted-foreground">{track.duration}</span>
              <div className="flex opacity-0 group-hover:opacity-100 transition-opacity">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Heart className="h-4 w-4" />
                  <span className="sr-only">إعجاب</span>
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreHorizontal className="h-4 w-4" />
                  <span className="sr-only">المزيد</span>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
