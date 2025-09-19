import CursorGlow from '../../components/CursorGlow';
import Link from 'next/link'
import Layout from '../../components/Layout';
export default function HorizonMiniPage() {
  return (
    <CursorGlow>
      <Layout>
      <div className="main"></div>
      <div className="p-8 pb-20 sm:p-20">
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
                <div className='flex-grow px-space-y-5 text-lg text-gray-200 justify-start items-center'>
                    <h1 className="text-5xl font-extrabold text-white mb-12 tracking-tight r">H²</h1>
                    <p className='text-lgd font-bold'>H² has a length and width of only 34mm.</p>
                    <p className="text-lg font-bold">
                      Will fit all rockets with 38mm or larger body tubes.
                    </p>
                    <p className="text-3xl font">Features</p>
                    <ul className="list-disc list-inside text-lg text-gray-200">
                      <li>Arm Cortex M0+ MCU</li>
                      <li>Altimeter and Gyroscope/Accelerometer</li>
                      <li>SD card and EEPROM datalogging</li>
                    </ul>
                    <p className="text-lg font-bold">Pricing around $30. Preorders coming soon.</p>
                </div>
            </div>
          </section>
        </main>

      </div>
      </Layout>
    </CursorGlow>
  )
}