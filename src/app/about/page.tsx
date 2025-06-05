import CursorGlow from '../components/CursorGlow';
import Link from 'next/link'
export default function AboutPage() {
  return(
    <CursorGlow>
      <div className="main"></div>
      <div className="min-h-screen p-8 pb-20 sm:p-20">
        <header className="fixed top-0 left-0 w-full px-6 py-1 bg-white text-black shadow-md z-50 flex items-center justify-center">
          <nav className="bg-white text-black p-4 flex gap-4 text-lg">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/docs" className="hover:underline">Documentation</Link>
            <Link href="/boards" className="hover:underline">Boards</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
            <Link href="/sponsers" className="hover:underline">Sponsors</Link>
          </nav>
        </header>
      </div>
    </CursorGlow>
  )
}
