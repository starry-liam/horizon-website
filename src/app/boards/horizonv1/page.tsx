import CursorGlow from '../../components/CursorGlow';
import Link from 'next/link'
export default function HorizonV1Page() {
  return (
    <CursorGlow>
      <div className="main"></div>
      <div className="min-h-screen p-8 pb-20 sm:p-20">
        <main className="pt-32 max-w-7xl mx-auto space-y-8 text-center">
          <section className="relative bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8 sm:p-12 text-center mb-8">
            <div className='space-y-4 text-lg text-gray-200 justify-start flex items-center gap-20'>
                <img 
                  src="/Front.png"
                  alt="Horizon V1 Front"
                  width={300}
                  height={50}
                  className="dark relative z-10 "
                />
                <div className='flex-grow px-space-y-4 text-lg text-gray-200 justify-start items-center'>
                    <h1 className="text-5xl font-extrabold text-white mb-12 tracking-tight r">Horizon Version 1</h1>
                    <p className='text-3xl font-bold'>The first Horizon Avionics board.</p>
                    <p className="text-3xl font">Features</p>
                    <ul className="list-disc list-inside text-lg text-gray-200">
                      <li>3 Microcontrollers</li>
                      <li>Barometer, Intertial measurement unit, and GPS</li>
                      <li>Ability to control Servos, DC Motor, and Pyro channels</li>
                      <li>Logs flight data to NAND and SD Card</li>
                      <li>Sends data to ground station via 915mhz LoRa Radio</li>
                      <li>Filters data using Kalman filters</li>
                    </ul>
                </div>
            </div>
          </section>
        </main>

      </div>
    </CursorGlow>
  )
}