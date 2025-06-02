import CursorGlow from '../components/CursorGlow';
import Link from 'next/link'
import Image from 'next/image';
export default function SponsorsPage() {
  return (
    <CursorGlow>
      <div className="min-h-screen p-8 pb-20 sm:p-20">
        <header className="fixed top-0 left-0 w-full px-6 py-1 bg-white text-black shadow-md z-50 flex rounded-full items-center justify-center">
          <nav className="bg-white text-black p-4 flex gap-4 text-lg">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/docs" className="hover:underline">Documentation</Link>
            <Link href="/boards" className="hover:underline">Boards</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
            <Link href="/sponsers" className="hover:underline">Sponsors</Link>
          </nav>
        </header>
        <main className="pt-32 max-w-3xl mx-auto space-y-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold">
            None yet! click the button below to sponsor us!
            </h2> 
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                        <a
                          href="https://hcb.hackclub.com/donations/start/horizon-avionics"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-large text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-colors"
                        >
                          <Image
                            src="/hcb logo.png"
                            alt="hcb button"
                            width={30}
                            height={30}
                            className="dark"
                          />
                          Donate Here
                        </a>
            </div>
        </main>
      </div>
    </CursorGlow>
  )
}