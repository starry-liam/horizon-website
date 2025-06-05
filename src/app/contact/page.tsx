import CursorGlow from '../components/CursorGlow';
import Link from 'next/link'
export default function ContactPage() {
  return (
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
        <div className="min-h-[calc(100vh-17rem)] flex items-center justify-center pt-16">
            <main className="pt-32 max-w-3xl mx-auto space-y-8 text-center">
                <h2 className="text-2xl sm:text-3xl font-semibold">
                    Contact Us
                </h2>
                <p className="text-lg">
                    For any inquiries, please reach out to us at:
                </p>
                <a href="mailto:horizonavionics.computers@gmail.com" className="text-blue-500 hover:underline">horizonavionics.computers@gmail.com</a>
            </main>
        </div>
      </div>
    </CursorGlow>
  )
}