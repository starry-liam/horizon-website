"use client"
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <nav className="bg-slate-800/70 backdrop-blur-sm text-white px-3 sm:px-5 py-2.5 rounded-full shadow-lg flex items-center gap-2 sm:gap-4 text-sm sm:text-base" role="navigation" aria-label="Main navigation">
        <Link
          href="/"
          className="inline-flex items-center justify-center hover:opacity-80 transition-opacity"
          aria-label="Go to homepage"
        >
          <Image
            src="/horizonHlogoNOBG.png"
            alt="Horizon Logo"
            width={40}
            height={40}
            priority
          />
        </Link>
        <div className="flex items-center gap-1 sm:gap-2">
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/boards", label: "Boards" },
            { href: "/contact", label: "Contact" },
            { href: "/sponsors", label: "Sponsors" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`relative px-2 sm:px-4 py-2 rounded-full transition-colors hover:bg-slate-700/50 ${
                pathname === href
                  ? "text-blue-400 bg-slate-700/50"
                  : "text-slate-100"
              }`}
              aria-current={pathname === href ? "page" : undefined}
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
} 