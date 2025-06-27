import CursorGlow from '../components/CursorGlow';
import Image from 'next/image';

const boards = [
  { name: 'Horizon V1', percent: 60, color: 'bg-blue-500', stage: 4 },
  { name: 'Horizon Mini', percent: 10, color: 'bg-green-500', stage: 3 },
  { name: 'Horizon Station', percent: 30, color: 'bg-yellow-400', stage: 2 },
];

const stages = ['Idea', 'Prototype', 'Design', 'Production', 'Testing', 'Complete'];

export default function AboutPage() {
  return(
    <CursorGlow>
      <div className="main"></div>
      <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-8 pt-32 md:pt-36">
        <main className="w-full max-w-3xl mx-auto space-y-16">
          {/* Hero Card */}
          <section className="relative bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8 sm:p-12 text-center mb-8">
            <div className="absolute left-1/2 -top-4 -translate-x-1/2 w-24 h-2 bg-blue-500 rounded-full mb-6" />
            <h1 className="text-4xl font-extrabold text-white mb-2 tracking-tight">About Us</h1>
            <p className="text-lg text-blue-200 font-semibold mb-4">Empowering the next generation of open source enthusiasts</p>
            <p className="text-base sm:text-lg text-gray-200 mb-2">Horizon Avionics is developing the future of open-source aerospace tech</p>
            <p className="text-base sm:text-lg text-gray-300 mb-6">Under Hack Club, we are a 501(c)(3) non-profit, designing and building affordable avionics computers for amateur rocketry.</p>
            <div className="flex justify-center">
              <Image src="/horizonlogo.svg" alt="Horizon Avionics Logo" width={120} height={48} className="rounded-xl bg-white/10 p-2" />
            </div>
          </section>

          {/* What We Do */}
          <section className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl border border-white/10 p-6 sm:p-10 text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">What We Do</h2>
            <p className="text-gray-200 text-base sm:text-lg">We design, build, and share open-source avionics systems for amateur rocketry. Our mission is to make aerospace technology accessible, affordable, and fun for everyone.</p>
          </section>
          
          {/* Board Progress */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Board Progress</h2>
            <div className="space-y-8">
              {boards.map(board => (
                <div key={board.name} className="bg-white/10 backdrop-blur rounded-xl shadow-lg border border-white/10 p-5 flex flex-col gap-2">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-white font-semibold text-lg">{board.name}</span>
                    <span className="text-blue-200 font-mono text-sm">{board.percent}%</span>
                  </div>
                  {/* Stages above bar */}
                  <div className="flex justify-between text-xs text-gray-300 font-semibold mb-1 px-1">
                    {stages.slice(0, 3).map((stage, i) => (
                      <span key={stage} className={`w-1/5 text-left ${i === 0 ? 'text-left' : 'text-center'}`}>{stage}</span>
                    ))}
                    <span className="w-1/5 text-center"></span>
                    {stages.slice(3).map((stage, i) => (
                      <span key={stage} className={`w-1/5 text-right ${i === stages.slice(3).length - 1 ? 'text-right' : 'text-center'}`}>{stage}</span>
                    ))}
                  </div>
                  {/* Progress bar */}
                  <div className="w-full h-4 bg-white/20 rounded-full overflow-hidden relative">
                    <div className={`${board.color} h-4 rounded-full transition-all duration-700`} style={{ width: `${board.percent}%` }}></div>
                    {/* Stage markers */}
                    {stages.map((_, i) => (
                      <div key={i} className="absolute top-0 h-4" style={{ left: `${(i/(stages.length-1))*100}%`, transform: 'translateX(-50%)', width: '2px' }}>
                        <div className={`h-4 w-0.5 ${i <= board.stage ? board.color : 'bg-white/30'} rounded-full mx-auto`}></div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>
          </section>

          {/* Get Involved */}
          <section className="bg-blue-600/80 rounded-2xl shadow-xl p-8 text-center flex flex-col items-center">
            <h2 className="text-2xl font-bold text-white mb-2">Get Involved</h2>
            <p className="text-blue-100 mb-4">Want to join our mission or support us? Reach out or sponsor us today!</p>
            <a href="/contact" className="inline-block bg-white text-blue-700 font-bold px-6 py-2 rounded-full shadow hover:bg-blue-100 transition-colors">Contact Us</a>
          </section>
        </main>
      </div>
    </CursorGlow>
  )
}
