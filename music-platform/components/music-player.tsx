"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  Volume1,
  VolumeX,
  Repeat,
  Shuffle,
  Heart,
  ListMusic,
  Maximize2,
  Minimize2,
} from "lucide-react"

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(80)
  const [isMuted, setIsMuted] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [previousVolume, setPreviousVolume] = useState(80)

  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const audio = new Audio("/placeholder-audio.mp3")
    audioRef.current = audio

    audio.addEventListener("timeupdate", updateProgress)
    audio.addEventListener("loadedmetadata", () => {
      setDuration(audio.duration)
    })
    audio.addEventListener("ended", () => {
      setIsPlaying(false)
      setCurrentTime(0)
    })

    return () => {
      audio.pause()
      audio.removeEventListener("timeupdate", updateProgress)
      audio.removeEventListener("loadedmetadata", () => {})
      audio.removeEventListener("ended", () => {})
    }
  }, [])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100
    }
  }, [volume])

  const updateProgress = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime)
    }
  }

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause()
    } else {
      audioRef.current?.play()
    }
    setIsPlaying(!isPlaying)
  }

  const handleTimeChange = (value: number[]) => {
    const newTime = value[0]
    setCurrentTime(newTime)
    if (audioRef.current) {
      audioRef.current.currentTime = newTime
    }
  }

  const handleVolumeChange = (value: number[]) => {
    const newVolume = value[0]
    setVolume(newVolume)
    setIsMuted(newVolume === 0)
  }

  const toggleMute = () => {
    if (isMuted) {
      setVolume(previousVolume)
      setIsMuted(false)
    } else {
      setPreviousVolume(volume)
      setVolume(0)
      setIsMuted(true)
    }
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
  }

  const toggleLike = () => {
    setIsLiked(!isLiked)
  }

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 bg-background border-t p-2 md:p-4 z-40 transition-all ${isExpanded ? "h-96" : "h-auto"}`}
    >
      <div className="container mx-auto">
        {isExpanded && (
          <div className="flex flex-col items-center justify-center mb-8">
            <div className="relative w-48 h-48 mb-4">
              <Image
                src="/placeholder.svg?height=192&width=192"
                alt="غلاف الأغنية"
                width={192}
                height={192}
                className="rounded-lg shadow-lg"
              />
            </div>
            <h3 className="text-xl font-semibold mb-1">عنوان الأغنية</h3>
            <Link href="/artist/1" className="text-muted-foreground hover:text-foreground mb-6">
              اسم الفنان
            </Link>
          </div>
        )}

        <div className="flex flex-col">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs text-muted-foreground">{formatTime(currentTime)}</span>
            <span className="text-xs text-muted-foreground">{formatTime(duration)}</span>
          </div>

          <Slider
            value={[currentTime]}
            max={duration || 100}
            step={0.1}
            onValueChange={handleTimeChange}
            className="mb-4"
          />

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 min-w-0">
              <div className="relative h-12 w-12 rounded overflow-hidden shrink-0">
                <Image src="/placeholder.svg?height=48&width=48" alt="غلاف الأغنية" fill className="object-cover" />
              </div>
              <div className="min-w-0">
                <h3 className="font-medium text-sm truncate">عنوان الأغنية</h3>
                <Link href="/artist/1" className="text-xs text-muted-foreground hover:text-foreground truncate block">
                  اسم الفنان
                </Link>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className={`ml-2 ${isLiked ? "text-red-500" : ""}`}
                onClick={toggleLike}
              >
                <Heart className={`h-5 w-5 ${isLiked ? "fill-current" : ""}`} />
                <span className="sr-only">إعجاب</span>
              </Button>
            </div>

            <div className="flex items-center justify-center gap-2">
              <Button variant="ghost" size="icon" className="hidden md:flex">
                <Shuffle className="h-5 w-5" />
                <span className="sr-only">تشغيل عشوائي</span>
              </Button>
              <Button variant="ghost" size="icon">
                <SkipBack className="h-5 w-5" />
                <span className="sr-only">السابق</span>
              </Button>
              <Button variant="default" size="icon" className="rounded-full h-10 w-10" onClick={togglePlay}>
                {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 mr-[-2px]" />}
                <span className="sr-only">{isPlaying ? "إيقاف" : "تشغيل"}</span>
              </Button>
              <Button variant="ghost" size="icon">
                <SkipForward className="h-5 w-5" />
                <span className="sr-only">التالي</span>
              </Button>
              <Button variant="ghost" size="icon" className="hidden md:flex">
                <Repeat className="h-5 w-5" />
                <span className="sr-only">تكرار</span>
              </Button>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="hidden md:flex">
                <ListMusic className="h-5 w-5" />
                <span className="sr-only">قائمة التشغيل</span>
              </Button>
              <div className="hidden md:flex items-center gap-2 w-32">
                <Button variant="ghost" size="icon" onClick={toggleMute}>
                  {isMuted ? (
                    <VolumeX className="h-5 w-5" />
                  ) : volume < 50 ? (
                    <Volume1 className="h-5 w-5" />
                  ) : (
                    <Volume2 className="h-5 w-5" />
                  )}
                  <span className="sr-only">الصوت</span>
                </Button>
                <Slider value={[volume]} max={100} step={1} onValueChange={handleVolumeChange} />
              </div>
              <Button variant="ghost" size="icon" onClick={toggleExpand}>
                {isExpanded ? <Minimize2 className="h-5 w-5" /> : <Maximize2 className="h-5 w-5" />}
                <span className="sr-only">{isExpanded ? "تصغير" : "تكبير"}</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
