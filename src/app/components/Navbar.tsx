"use client"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { ChevronDown } from "lucide-react"
import { ShoppingCart } from "lucide-react" // add icon if you want

const boardLinks = [
  {
    title: "Horizon v1",
    href: "/boards/horizonv1",
    description: "Our flagship development board",
  },
  {
    title: "H²",
    href: "/boards/horizonmini",
    description: "Compact version with essential features",
  },
]

import { useState } from "react"

export default function Navbar() {
  const pathname = usePathname()
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <>
      <header className="fixed top-6 left-0 right-0 z-50 flex items-center px-6">
        <nav
          className="mx-auto w-max bg-slate-800/70 backdrop-blur-sm text-white px-3 sm:px-5 py-2.5 rounded-full shadow-lg flex items-center gap-2 sm:gap-4 text-sm sm:text-base"
          role="navigation"
          aria-label="Main navigation"
        >
          <Link
            href="/"
            className="inline-flex items-center justify-center hover:opacity-80 transition-opacity"
            aria-label="Go to homepage"
          >
            <Image src="/horizonHlogoNOBG.png" alt="Horizon Logo" width={40} height={40} priority />
          </Link>

          <div className="flex items-center gap-1 sm:gap-2">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`relative px-2 sm:px-4 py-2 rounded-full transition-colors hover:bg-slate-700/50 ${
                  pathname === href ? "text-blue-400 bg-slate-700/50" : "text-slate-100"
                }`}
                aria-current={pathname === href ? "page" : undefined}
              >
                {label}
              </Link>
            ))}

            {/* Boards Dropdown */}
            <div className="relative group">
              <Link
                href="/boards"
                className={`relative px-2 sm:px-4 py-2 rounded-full transition-colors hover:bg-slate-700/50 flex items-center gap-1 ${
                  pathname.startsWith("/boards") ? "text-blue-400 bg-slate-700/50" : "text-slate-100"
                }`}
                aria-current={pathname.startsWith("/boards") ? "page" : undefined}
              >
                Boards
                <ChevronDown className="h-3 w-3 transition-transform group-hover:rotate-180" />
              </Link>

              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800/90 backdrop-blur-sm border border-slate-600/50 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-3 space-y-2">
                  {boardLinks.map((board) => (
                    <div key={board.title}>
                      <Link
                        href={board.href}
                        className={`text-sm font-medium transition-colors hover:underline block ${
                          pathname === board.href ? "text-blue-400" : "text-slate-100 hover:text-blue-300"
                        }`}
                      >
                        {board.title}
                      </Link>
                      <p className="text-xs text-slate-400 mt-1">{board.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {[
              { href: "/contact", label: "Contact" },
              { href: "/sponsors", label: "Sponsors" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`relative px-2 sm:px-4 py-2 rounded-full transition-colors hover:bg-slate-700/50 ${
                  pathname === href ? "text-blue-400 bg-slate-700/50" : "text-slate-100"
                }`}
                aria-current={pathname === href ? "page" : undefined}
              >
                {label}
              </Link>
            ))}
          </div>

         {/* Cart Button (inside nav, next to links) */}
          </nav>   {/* 👈 close the nav here */}
            <button
            id="cartBtn"
            className="ml-4 flex items-center gap-2 bg-slate-800/70 text-white px-4 py-2 rounded-full shadow hover:bg-red-500 transition"
            onClick={() => setCartOpen(true)}
            aria-label="Open cart"
          >
            <ShoppingCart className="h-5 w-5" />
            Cart
          </button>
          <div
            id="cartSidebar"
            className={`fixed top-0 right-0 w-80 h-full bg-slate-800/70 shadow-lg transform transition-transform duration-300 z-50 ${
              cartOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg font-semibold">Your Cart</h2>
              <button
                id="closeCart"
                className="text-gray-600 hover:text-red-400 text-2xl"
                onClick={() => setCartOpen(false)}
                aria-label="Close cart"
              >
                &times;
              </button>
            </div>
            <div id="cartContent" className="p-4 space-y-2">
              
            </div>
            <div className="absolute bottom-0 w-full p-4 border-t">
              <button className="w-full bg-blue-600 text-white py-2 rounded">Checkout</button>
            </div>
          </div>
      </header>
    </>
  )
}
