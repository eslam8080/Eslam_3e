"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Search, Menu, Home, Headphones, Music, Crown } from "lucide-react"

export function Navbar() {
  const pathname = usePathname()
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">فتح القائمة</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="pr-0">
            <div className="px-7">
              <Link href="/" className="flex items-center">
                <Music className="h-6 w-6 ml-2" />
                <span className="font-bold text-xl">نغمات</span>
              </Link>
            </div>
            <div className="grid gap-2 py-6">
              <Link
                href="/"
                className={`flex items-center gap-2 px-7 py-2 text-lg font-medium ${
                  isActive("/") ? "text-primary" : "text-muted-foreground"
                }`}
              >
                <Home className="h-5 w-5" />
                الرئيسية
              </Link>
              <Link
                href="/tracks"
                className={`flex items-center gap-2 px-7 py-2 text-lg font-medium ${
                  isActive("/tracks") ? "text-primary" : "text-muted-foreground"
                }`}
              >
                <Headphones className="h-5 w-5" />
                استكشف
              </Link>
              <Link
                href="/premium"
                className={`flex items-center gap-2 px-7 py-2 text-lg font-medium ${
                  isActive("/premium") ? "text-primary" : "text-muted-foreground"
                }`}
              >
                <Crown className="h-5 w-5" />
                الباقة المميزة
              </Link>
            </div>
          </SheetContent>
        </Sheet>

        <Link href="/" className="flex items-center ml-4 md:ml-0">
          <Music className="h-6 w-6 ml-2" />
          <span className="font-bold text-xl hidden md:inline-block">نغمات</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 mx-6">
          <Link
            href="/"
            className={`text-sm font-medium ${
              isActive("/") ? "text-foreground" : "text-muted-foreground"
            } transition-colors hover:text-foreground`}
          >
            الرئيسية
          </Link>
          <Link
            href="/tracks"
            className={`text-sm font-medium ${
              isActive("/tracks") ? "text-foreground" : "text-muted-foreground"
            } transition-colors hover:text-foreground`}
          >
            استكشف
          </Link>
          <Link
            href="/premium"
            className={`text-sm font-medium ${
              isActive("/premium") ? "text-foreground" : "text-muted-foreground"
            } transition-colors hover:text-foreground`}
          >
            الباقة المميزة
          </Link>
        </nav>

        <div className="flex items-center gap-4 mr-auto">
          <form className="hidden md:flex relative w-full max-w-sm items-center">
            <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input type="search" placeholder="ابحث عن أغاني، فنانين..." className="pr-9 w-[300px]" />
          </form>

          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder-user.jpg" alt="@user" />
                    <AvatarFallback>مس</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href="/profile">الملف الشخصي</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/library">مكتبتي</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => setIsLoggedIn(false)}>تسجيل الخروج</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-2">
              <Button variant="ghost" asChild>
                <Link href="/login">تسجيل الدخول</Link>
              </Button>
              <Button asChild>
                <Link href="/signup">إنشاء حساب</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
