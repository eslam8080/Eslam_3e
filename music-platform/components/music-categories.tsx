import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export function MusicCategories() {
  // بيانات تجريبية للتصنيفات
  const categories = [
    {
      id: "1",
      name: "بوب",
      color: "from-red-500 to-orange-500",
    },
    {
      id: "2",
      name: "راب",
      color: "from-blue-500 to-purple-500",
    },
    {
      id: "3",
      name: "طرب",
      color: "from-green-500 to-teal-500",
    },
    {
      id: "4",
      name: "خليجي",
      color: "from-yellow-500 to-amber-500",
    },
    {
      id: "5",
      name: "شعبي",
      color: "from-pink-500 to-rose-500",
    },
    {
      id: "6",
      name: "كلاسيك",
      color: "from-indigo-500 to-violet-500",
    },
    {
      id: "7",
      name: "جاز",
      color: "from-cyan-500 to-sky-500",
    },
    {
      id: "8",
      name: "روك",
      color: "from-gray-500 to-slate-500",
    },
  ]

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-8 gap-4">
      {categories.map((category) => (
        <Link key={category.id} href={`/category/${category.id}`}>
          <Card className="overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow">
            <CardContent className={`p-6 bg-gradient-to-br ${category.color} h-24 flex items-center justify-center`}>
              <h3 className="font-bold text-white text-lg">{category.name}</h3>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}
