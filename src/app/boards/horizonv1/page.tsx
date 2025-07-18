import CursorGlow from '../../components/CursorGlow';
import Link from 'next/link'
import Layout from '../../components/Layout';
export default function HorizonV1Page() {
  return (
    <CursorGlow>
      <Layout>
      <div className="main"></div>
      <div className="p-8 pb-20 sm:p-20">
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
                    <h1 className="text-5xl font-extrabold text-white mb-12 tracking-tight r">Horizon V1</h1>
                    <p className='text-3xl font-bold'>Dev. board for the horizon flight computer line.</p>
                    <p className="text-3xl font">Features</p>
                    <ul className="list-disc list-inside text-lg text-gray-200">
                      <li>3 Microcontrollers</li>
                      <li>Barometer andIntertial measurement unit</li>
                      <li>Ability to control Servos, and Pyro channels</li>
                      <li>Logs flight data to NAND, SD Card, and groundstaion via Radio</li>
                      <li>GPS for location tracking</li>
                      <li>Kalman filters for cleaner data</li>
                    </ul>
                </div>
            </div>
          </section>
        </main>

      </div>
      </Layout>
    </CursorGlow>
  )
}