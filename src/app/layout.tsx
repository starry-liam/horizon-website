import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Horizon Avionics",
  description: "Hackclub's first open source flight computer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
          <nav className="bg-slate-800/70 backdrop-blur-sm text-white px-8 py-3 rounded-full shadow-lg flex gap-6 text-lg">
            <Link href="/" className="transition-colors">Home</Link>
            <Link href="/about" className="transition-colors">About</Link>
            <Link href="/docs" className="transition-colors">Documentation</Link>
            <Link href="/boards" className="transition-colors">Boards</Link>
            <Link href="/contact" className="transition-colors">Contact</Link>
            <Link href="/sponsers" className="transition-colors">Sponsors</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
