"use client"

import { Check } from "lucide-react"

export default function TickBar() {
  return (
    <div className="w-full bg-gradient-to-r from-primary via-secondary to-primary text-white pt-20 pb-4 px-4 overflow-hidden relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-3 text-base md:text-lg font-bold tracking-wide">
          <Check size={24} className="flex-shrink-0" fill="currentColor" />
          <span className="text-balance text-center drop-shadow-md">Your Pathway to Global Education Starts Here</span>
        </div>
      </div>
    </div>
  )
}
