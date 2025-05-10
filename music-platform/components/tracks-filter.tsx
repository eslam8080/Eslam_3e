import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Search } from "lucide-react"

export function TracksFilter() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-medium mb-3">البحث</h3>
        <div className="relative">
          <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="ابحث عن أغاني..." className="pr-9" />
        </div>
      </div>

      <div>
        <h3 className="font-medium mb-3">النوع</h3>
        <RadioGroup defaultValue="all">
          <div className="flex items-center space-x-2 space-x-reverse">
            <RadioGroupItem value="all" id="all" />
            <Label htmlFor="all">الكل</Label>
          </div>
          <div className="flex items-center space-x-2 space-x-reverse">
            <RadioGroupItem value="free" id="free" />
            <Label htmlFor="free">مجاني</Label>
          </div>
          <div className="flex items-center space-x-2 space-x-reverse">
            <RadioGroupItem value="premium" id="premium" />
            <Label htmlFor="premium">مميز</Label>
          </div>
        </RadioGroup>
      </div>

      <div>
        <h3 className="font-medium mb-3">التصنيفات</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2 space-x-reverse">
            <Checkbox id="pop" />
            <Label htmlFor="pop">بوب</Label>
          </div>
          <div className="flex items-center space-x-2 space-x-reverse">
            <Checkbox id="rap" />
            <Label htmlFor="rap">راب</Label>
          </div>
          <div className="flex items-center space-x-2 space-x-reverse">
            <Checkbox id="tarab" />
            <Label htmlFor="tarab">طرب</Label>
          </div>
          <div className="flex items-center space-x-2 space-x-reverse">
            <Checkbox id="khaleeji" />
            <Label htmlFor="khaleeji">خليجي</Label>
          </div>
          <div className="flex items-center space-x-2 space-x-reverse">
            <Checkbox id="shaabi" />
            <Label htmlFor="shaabi">شعبي</Label>
          </div>
          <div className="flex items-center space-x-2 space-x-reverse">
            <Checkbox id="classic" />
            <Label htmlFor="classic">كلاسيك</Label>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-medium">المدة</h3>
          <span className="text-sm text-muted-foreground">1:30 - 5:00</span>
        </div>
        <Slider defaultValue={[90, 300]} min={0} max={600} step={10} />
      </div>

      <div className="pt-4">
        <Button className="w-full">تطبيق الفلتر</Button>
      </div>
    </div>
  )
}
