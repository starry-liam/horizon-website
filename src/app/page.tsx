import Image from "next/image";
import CursorGlow from './components/CursorGlow';

export default function Home() {
  return (
    <CursorGlow>
      <div className="min-h-screen p-8 pb-20 sm:p-20">
        <header className="fixed top-0 left-0 w-full px-6 py-4 bg-white text-black shadow-md z-50 flex items-center justify-between">
          <nav className="space-x-6 hidden md:flex">
            <a href="#about" className="hover:text-gray-400">About</a>
            <a href="#features" className="hover:text-gray-400">Features</a>
            <a href="#contact" className="hover:text-gray-400">Contact</a>
          </nav>
        </header>
        
        <main className="pt-32 max-w-3xl mx-auto space-y-8 text-center">
          <Image
            src="/horizonlogo.svg"
            alt="Horizon Avionics Logo"
            className ="flex mx-auto ax-w-2mxl justify-center"
            width={500}
            height={200}
          />
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Hackclub's first open source flight computer
          </h2>
          
          <div className="space-y-4 text-lg text-gray-200">
            <p>3 Microcontrollers and all the features you could ever need</p>
            <p>Designed for the Hackclubbers, by Hackclubbers</p>
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
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-black bg-white rounded-full hover:bg-gray-100 transition-colors"
            >
              Read our docs
            </a>
          </div>
        </main>
      </div>
    </CursorGlow>
  );
}
