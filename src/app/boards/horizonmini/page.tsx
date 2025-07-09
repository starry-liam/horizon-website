import CursorGlow from '../../components/CursorGlow';
import Link from 'next/link'
export default function HorizonMiniPage() {
  return (
    <CursorGlow>
      <div className="main"></div>
      <div className="min-h-screen p-8 pb-20 sm:p-20">
        <main className="pt-32 max-w-7xl mx-auto space-y-8 text-center">
          <section className="relative bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8 sm:p-12 text-center mb-8">
            <div className='space-y-4 text-lg text-gray-200 justify-start flex items-center gap-20'>
                <img 
                  src="/minifron.png"
                  alt="Horizon V1 Front"
                  width={300}
                  height={50}
                  className="dark relative z-10 "
                />
                <div className='flex-grow px-space-y-4 text-lg text-gray-200 justify-start items-center'>
                    <h1 className="text-5xl font-extrabold text-white mb-12 tracking-tight r">H²</h1>
                    <p className='text-3xl font-bold'>Horizon presents the smallest of the boards at a length and width of only 35mm</p>
                    <p className="text-3xl font">Features</p>
                    <ul className="list-disc list-inside text-lg text-gray-200">
                      <li>1 Arm Cortex M0+ MCU</li>
                      <li>Barometer and IMU</li>
                      <li>SD and NAND Datalogging</li>
                    </ul>
                </div>
            </div>
          </section>
        </main>

      </div>
    </CursorGlow>
  )
}