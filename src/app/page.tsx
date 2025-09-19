import Image from "next/image";
import CursorGlow from './components/CursorGlow';
import Link from 'next/link'
import Layout from "./components/Layout"
export const metadata = {
  title: 'Horizon Avionics',
  description: 'Horizon Avionics Computers',
  icons: {
    icon: '/favicon.ico',
  },
}
export default function Home() {
  return (
    <CursorGlow>
      <Layout>
      <div className="main"></div>
      <div className="p-4 pb-8 sm:p-8">
        <main className="pt-24 max-w-3xl mx-auto space-y-8 text-center">
          <Image
            src="/Horizon Logo.png"
            alt="Horizon Avionics Logo"
            className ="flex mx-auto ax-w-2mxl justify-center"
            width={662}
            height={265}
          />
          <h2 className="text-2xl sm:text-3xl font-semibold">
            From our mind, to design, to your rocket.
          </h2>
          
          <div className="space-y-4 text-lg text-gray-200">
            <p>Launching Open Source Avionics for the Next Generation of Rocketry</p>
          </div>
          <div className="text-gray-200 max-w-xl mx-auto font-medium italic">
            <p>Board pre-orders coming soon!</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <a
                href="https://github.com/Horizon-Avionics"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium text-white bg-gray-900 rounded-full hover:bg-red-500 transition-colors"
              >
                <Image
                  src="/github.svg"
                  alt="GitHub"
                  width={24}
                  height={24}
                  className="dark:invert"
                />
                Explore design files
              </a>
              <Link
                href="/products/horizonmini"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium text-white bg-gray-900 rounded-full hover:bg-red-500 transition-colors"
              >
              Check Out our new board
            </Link>
          </div>
        </main>
        </div>
        </Layout>
    </CursorGlow>
  )
}
