import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

export default function PremiumPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">اشترك في الباقة المميزة</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          استمتع بمزايا حصرية واستمع إلى جميع الأغاني المميزة بدون قيود
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <Card className="border-2">
          <CardHeader>
            <CardTitle className="text-xl">الباقة الأساسية</CardTitle>
            <CardDescription>للمستمعين العاديين</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold mb-6">مجاناً</div>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Check className="ml-2 h-5 w-5 text-green-500" />
                <span>استماع للأغاني المجانية</span>
              </li>
              <li className="flex items-center">
                <Check className="ml-2 h-5 w-5 text-green-500" />
                <span>إنشاء قوائم تشغيل</span>
              </li>
              <li className="flex items-center">
                <Check className="ml-2 h-5 w-5 text-green-500" />
                <span>تطبيق ويب كامل</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant="outline">
              الباقة الحالية
            </Button>
          </CardFooter>
        </Card>

        <Card className="border-2 border-primary">
          <CardHeader className="bg-primary text-primary-foreground">
            <CardTitle className="text-xl">الباقة المميزة</CardTitle>
            <CardDescription className="text-primary-foreground/90">للمستمعين المتحمسين</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold mb-6">
              9.99$ <span className="text-base font-normal">/شهرياً</span>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Check className="ml-2 h-5 w-5 text-green-500" />
                <span>جميع مزايا الباقة الأساسية</span>
              </li>
              <li className="flex items-center">
                <Check className="ml-2 h-5 w-5 text-green-500" />
                <span>الوصول إلى جميع الأغاني المميزة</span>
              </li>
              <li className="flex items-center">
                <Check className="ml-2 h-5 w-5 text-green-500" />
                <span>استماع بدون إعلانات</span>
              </li>
              <li className="flex items-center">
                <Check className="ml-2 h-5 w-5 text-green-500" />
                <span>تنزيل الأغاني للاستماع دون اتصال</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full">اشترك الآن</Button>
          </CardFooter>
        </Card>

        <Card className="border-2">
          <CardHeader>
            <CardTitle className="text-xl">الباقة العائلية</CardTitle>
            <CardDescription>للعائلات والمجموعات</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold mb-6">
              14.99$ <span className="text-base font-normal">/شهرياً</span>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Check className="ml-2 h-5 w-5 text-green-500" />
                <span>جميع مزايا الباقة المميزة</span>
              </li>
              <li className="flex items-center">
                <Check className="ml-2 h-5 w-5 text-green-500" />
                <span>حتى 6 حسابات مختلفة</span>
              </li>
              <li className="flex items-center">
                <Check className="ml-2 h-5 w-5 text-green-500" />
                <span>تحكم أبوي</span>
              </li>
              <li className="flex items-center">
                <Check className="ml-2 h-5 w-5 text-green-500" />
                <span>مشاركة قوائم التشغيل</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant="outline">
              اشترك الآن
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
