"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ThumbsUp, MessageSquare } from "lucide-react"

export function Comments({ trackId }: { trackId: string }) {
  const [comment, setComment] = useState("")

  // بيانات تجريبية للتعليقات
  const commentsData = [
    {
      id: "1",
      user: {
        name: "أحمد محمد",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      text: "أغنية رائعة! أحب الإيقاع والكلمات معبرة جداً.",
      date: "منذ 3 أيام",
      likes: 24,
    },
    {
      id: "2",
      user: {
        name: "سارة أحمد",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      text: "من أفضل أغاني هذا الفنان، أستمع إليها باستمرار.",
      date: "منذ أسبوع",
      likes: 18,
    },
    {
      id: "3",
      user: {
        name: "محمد علي",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      text: "الموسيقى مميزة جداً في هذه الأغنية، تنقلك إلى عالم آخر.",
      date: "منذ أسبوعين",
      likes: 32,
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // هنا يمكن إضافة منطق إرسال التعليق
    setComment("")
  }

  return (
    <div className="mt-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">التعليقات</h2>
        <span className="text-muted-foreground">{commentsData.length} تعليقات</span>
      </div>

      <form onSubmit={handleSubmit} className="mb-8">
        <Textarea
          placeholder="أضف تعليقاً..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="mb-3 resize-none"
          rows={3}
        />
        <Button type="submit" disabled={!comment.trim()}>
          إرسال
        </Button>
      </form>

      <div className="space-y-6">
        {commentsData.map((comment) => (
          <div key={comment.id} className="flex gap-4">
            <Avatar className="h-10 w-10">
              <AvatarImage src={comment.user.avatar || "/placeholder.svg"} alt={comment.user.name} />
              <AvatarFallback>{comment.user.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-medium">{comment.user.name}</span>
                <span className="text-xs text-muted-foreground">{comment.date}</span>
              </div>
              <p className="text-sm mb-2">{comment.text}</p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <button className="flex items-center gap-1 hover:text-foreground">
                  <ThumbsUp className="h-3.5 w-3.5" />
                  <span>{comment.likes}</span>
                </button>
                <button className="flex items-center gap-1 hover:text-foreground">
                  <MessageSquare className="h-3.5 w-3.5" />
                  <span>رد</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
