"use client"

import Link from "next/link"
import { Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen black flex items-center justify-center px-4">
      <div className="text-center text-white max-w-md">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-8xl font-bold text-white-400 mb-4">404</h1>
          <div className="w-24 h-1 bg-red-400 mx-auto rounded-full"></div>
        </div>

        {/* Error Message */}
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-slate-300 mb-8 leading-relaxed">
          Seems you've flown too high! check the URL or return to the homepage.
        </p>
      </div>
    </div>
  )
}
