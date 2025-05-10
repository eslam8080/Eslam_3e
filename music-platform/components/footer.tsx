import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Music } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background border-t py-12">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <Link href="/" className="flex items-center mb-4">
            <Music className="h-6 w-6 ml-2" />
            <span className="font-bold text-xl">نغمات</span>
          </Link>
          <p className="text-muted-foreground mb-4">
            منصة الموسيقى العربية الأولى. استمع إلى أحدث الأغاني العربية والعالمية.
          </p>
          <div className="flex space-x-4 space-x-reverse">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">فيسبوك</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">تويتر</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">انستغرام</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Youtube className="h-5 w-5" />
              <span className="sr-only">يوتيوب</span>
            </Link>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-4">الشركة</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="text-muted-foreground hover:text-foreground">
                من نحن
              </Link>
            </li>
            <li>
              <Link href="/careers" className="text-muted-foreground hover:text-foreground">
                وظائف
              </Link>
            </li>
            <li>
              <Link href="/press" className="text-muted-foreground hover:text-foreground">
                الصحافة
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                اتصل بنا
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-4">المجتمع</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/artists" className="text-muted-foreground hover:text-foreground">
                للفنانين
              </Link>
            </li>
            <li>
              <Link href="/developers" className="text-muted-foreground hover:text-foreground">
                للمطورين
              </Link>
            </li>
            <li>
              <Link href="/advertising" className="text-muted-foreground hover:text-foreground">
                الإعلان
              </Link>
            </li>
            <li>
              <Link href="/investors" className="text-muted-foreground hover:text-foreground">
                المستثمرين
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-4">الروابط المفيدة</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/help" className="text-muted-foreground hover:text-foreground">
                المساعدة
              </Link>
            </li>
            <li>
              <Link href="/premium" className="text-muted-foreground hover:text-foreground">
                الباقة المميزة
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                الشروط والأحكام
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                سياسة الخصوصية
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mt-8 pt-8 border-t">
        <p className="text-center text-muted-foreground text-sm">
          &copy; {new Date().getFullYear()} نغمات. جميع الحقوق محفوظة.
        </p>
      </div>
    </footer>
  )
}
