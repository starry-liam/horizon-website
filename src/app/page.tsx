import Image from "next/image";
import CursorGlow from './components/CursorGlow';
import Link from 'next/link'
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
      <div className="main"></div>
      <div className="min-h-screen p-4 pb-8 sm:p-8">
        <main className="pt-24 max-w-3xl mx-auto space-y-8 text-center">
          <Image
            src="/horizonlogo.svg"
            alt="Horizon Avionics Logo"
            className ="flex mx-auto ax-w-2mxl justify-center"
            width={500}
            height={200}
          />
          <h2 className="text-2xl sm:text-3xl font-semibold">
            First Ever Open Source Flight Computer
          </h2>
          
          <div className="space-y-4 text-lg text-gray-200">
            <p>3 Microcontrollers and all the features you could ever need</p>
            <p>By teenagers! For Enthusiasts!</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <a
                href="https://github.com/Horizon-Avionics"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-colors"
              >
                <Image
                  src="/github.svg"
                  alt="GitHub"
                  width={24}
                  height={24}
                  className="dark:invert"
                />
                Check out the repositories
              </a>
              
              <a
                href="https://docs.google.com/document/d/1rhxR0z3o1-5nPLaZscAGfexemYaoFTkNt6UDeAldLvw/edit?pli=1&tab=t.0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-6 py-3 text-base font-medium text-black bg-white rounded-full hover:bg-gray-100 transition-colors"
              >
                Read our docs
              </a>
            
            <Link
              href="/sponsers"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-colors"
            >
              Sponsors
            </Link>
          </div>
        </main>
        </div>
    </CursorGlow>
  )
}
