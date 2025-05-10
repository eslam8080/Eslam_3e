import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FeaturedTracks } from "@/components/featured-tracks"
import { MusicCategories } from "@/components/music-categories"
import { TrendingArtists } from "@/components/trending-artists"
import { HeroSection } from "@/components/hero-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />

      <main className="flex-1 container mx-auto px-4 py-8">
        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">الأغاني المميزة</h2>
            <Link href="/tracks">
              <Button variant="link">عرض الكل</Button>
            </Link>
          </div>
          <FeaturedTracks />
        </section>

        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">التصنيفات</h2>
            <Link href="/categories">
              <Button variant="link">عرض الكل</Button>
            </Link>
          </div>
          <MusicCategories />
        </section>

        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">الفنانين الأكثر شهرة</h2>
            <Link href="/artists">
              <Button variant="link">عرض الكل</Button>
            </Link>
          </div>
          <TrendingArtists />
        </section>
      </main>
    </div>
  )
}
