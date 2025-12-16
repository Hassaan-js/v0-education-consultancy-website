"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Play, Pause, Volume2, VolumeX, Maximize2 } from "lucide-react"

interface VideoPlayerProps {
  videoUrl: string
  thumbnail?: string
  title?: string
}

export default function VideoPlayer({ videoUrl, thumbnail, title }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setProgress((videoRef.current.currentTime / videoRef.current.duration) * 100)
    }
  }

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration)
    }
  }

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newProgress = Number.parseFloat(e.target.value)
    if (videoRef.current) {
      videoRef.current.currentTime = (newProgress / 100) * duration
      setProgress(newProgress)
    }
  }

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen()
      } else {
        videoRef.current.requestFullscreen()
      }
    }
  }

  const formatTime = (seconds: number) => {
    if (!seconds || isNaN(seconds)) return "0:00"
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <div className="relative w-full bg-black rounded-2xl overflow-hidden group">
      {/* Video Element */}
      <video
        ref={videoRef}
        className="w-full h-auto display-block"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        poster={thumbnail}
        src={videoUrl}
      />

      {/* Play Button Overlay */}
      {!isPlaying && (
        <div
          className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center cursor-pointer"
          onClick={togglePlay}
        >
          <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
            <Play className="w-8 h-8 text-black fill-black" />
          </div>
        </div>
      )}

      {/* Premium Controls */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 transition-all duration-300 opacity-0 group-hover:opacity-100">
        {/* Progress Bar */}
        <div className="flex items-center gap-3 mb-4">
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={handleProgressChange}
            className="w-full h-1 bg-white/30 rounded-full appearance-none cursor-pointer accent-accent hover:accent-accent/90"
            style={{
              background: `linear-gradient(to right, var(--accent) 0%, var(--accent) ${progress}%, rgba(255,255,255,0.3) ${progress}%, rgba(255,255,255,0.3) 100%)`,
            }}
          />
        </div>

        {/* Controls Bar */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={togglePlay}
              className="hover:scale-110 transition-transform duration-200 text-white"
              title={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-white" />}
            </button>

            <button
              onClick={toggleMute}
              className="hover:scale-110 transition-transform duration-200 text-white"
              title={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            </button>

            <span className="text-white text-sm font-medium">
              {formatTime(videoRef.current?.currentTime || 0)} / {formatTime(duration)}
            </span>
          </div>

          <button
            onClick={toggleFullscreen}
            className="hover:scale-110 transition-transform duration-200 text-white"
            title="Fullscreen"
          >
            <Maximize2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
