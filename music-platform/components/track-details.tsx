import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Heart, Share2, MoreHorizontal, Lock } from "lucide-react"

export function TrackDetails({ id }: { id: string }) {
  // بيانات تجريبية للأغنية
  const track = {
    id,
    title: "عنوان الأغنية",
    artist: "اسم الفنان",
    album: "اسم الألبوم",
    releaseDate: "2023-05-15",
    duration: "3:45",
    image: "/placeholder.svg?height=300&width=300",
    isPremium: id === "2" || id === "4" || id === "7" || id === "9",
    plays: "1.2M",
    likes: "45K",
    description: "وصف الأغنية يظهر هنا. يمكن أن يحتوي على معلومات عن الأغنية وقصة كتابتها وتسجيلها.",
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="relative w-full md:w-64 aspect-square overflow-hidden rounded-lg">
          <Image src={track.image || "/placeholder.svg"} alt={track.title} fill className="object-cover" />
          {track.isPremium && (
            <div className="absolute top-3 left-3">
              <Badge variant="secondary" className="gap-1 bg-black/70 text-white border-none">
                <Lock className="h-3 w-3" />
                مميز
              </Badge>
            </div>
          )}
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">{track.title}</h1>
          <Link href={`/artist/${track.id}`} className="text-xl hover:underline">
            {track.artist}
          </Link>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
            <Link href={`/album/${track.id}`} className="hover:underline">
              {track.album}
            </Link>
            <span>•</span>
            <span>{new Date(track.releaseDate).getFullYear()}</span>
            <span>•</span>
            <span>{track.duration}</span>
          </div>

          <div className="flex items-center gap-4 mt-6">
            <Button size="lg" className="gap-2 rounded-full">
              <Play className="h-5 w-5 mr-[-2px]" />
              تشغيل
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Heart className="h-5 w-5" />
              <span className="sr-only">إعجاب</span>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Share2 className="h-5 w-5" />
              <span className="sr-only">مشاركة</span>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <MoreHorizontal className="h-5 w-5" />
              <span className="sr-only">المزيد</span>
            </Button>
          </div>

          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
            <div>{track.plays} استماع</div>
            <div>{track.likes} إعجاب</div>
          </div>

          {track.isPremium && (
            <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
              <h3 className="font-semibold flex items-center gap-2">
                <Lock className="h-4 w-4" />
                محتوى مميز
              </h3>
              <p className="mt-2 text-sm">هذه الأغنية متاحة فقط للمشتركين في الباقة المميزة.</p>
              <Button className="mt-3" asChild>
                <Link href="/premium">اشترك الآن</Link>
              </Button>
            </div>
          )}
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-3">عن الأغنية</h2>
        <p className="text-muted-foreground">{track.description}</p>
      </div>
    </div>
  )
}
