import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-primary/20 to-background py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                استمع إلى الموسيقى التي تحبها
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                ملايين الأغاني والبودكاست. بدون بطاقة ائتمان.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" asChild>
                <Link href="/signup">ابدأ الاستماع مجاناً</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/premium">اشترك في الباقة المميزة</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative aspect-square w-full max-w-[500px] overflow-hidden rounded-xl bg-muted/50">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative h-3/4 w-3/4 rounded-lg bg-gradient-to-br from-primary/20 to-primary/40 shadow-xl">
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <div className="h-16 w-16 rounded-full bg-primary/90 flex items-center justify-center mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary-foreground"
                      >
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold">أحدث الإصدارات</h3>
                    <p className="mt-2 text-sm text-muted-foreground">استمع إلى أحدث الأغاني من فنانيك المفضلين</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
