import CursorGlow from '../components/CursorGlow';
import Link from 'next/link'
import Layout from '../components/Layout';
export default function BoardsPage() {
  return (
    <CursorGlow>
      <Layout>
      <div className="main"></div>
      <div className="p-8 pb-20 sm:p-20">
        <main className="pt-32 max-w-7xl mx-auto space-y-8 text-center">
          <div className='space-y-4 text-lg text-gray-200 justify-start flex items-center gap-20'>
            <img
                src="/minifron.png"
                alt="Horizon Mini Front"
                width={300}
                height={50}
                className="dark relative z-10 glow"
            />

            <section className="relative bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8 sm:p-12 text-center mb-8">
            <div className=' flex-grow px-space-y-4 text-lg text-gray-200 justify-start items-center'>
              <p className='text-3xl font-bold'>H²</p>
              <p className="text-lg font-bold">
                The smallest of the horizon boards, H² is the size for any rocket! Learn more {' '}
                <a href="/products/horizonmini" className="text-blue-500 hover:underline">
                  here
                </a>
              </p>
              <p>Starting at $50. Preordering coming soon so stay tuned!</p>
            </div>
            </section>
            <img
                src="/miniback.png"
                alt="Horizon Mini Front"
                width={300}
                height={300}
                className="dark relative z-10 glow"
            />

          </div>
          <div className='space-y-4 text-lg text-gray-200 justify-start flex items-center gap-20'>
            
            <img 
              src="/Front.png"
              alt="Horizon V1 Front"
              width={300}
              height={50}
              className="dark relative z-10 glow"
            />
            <section className="relative bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8 sm:p-12 text-center mb-8">
            <div className=' flex-grow px-space-y-4 text-lg text-gray-200 justify-start items-center'>
              <p className='text-3xl font-bold'>Horizon V1</p>
              <p className="text-lg font-bold">
                The first version of the Horizon Avionics board. Learn more{' '}
                <a href="/products/horizonv1" className="text-blue-500 hover:underline">
                  here
                </a>
              </p>
              <p>We are still in development! If you would like to help, Please consider a donation on the sponsers page, Or contact us using the information on the contact page.</p>
            </div>
            </section>
            <img 
              src="/Back.png"
              alt="Horizon V1 Back"
              width={300}
              height={50}
              className="dark relative z-10 glow"
            />
            
          </div>

        </main>

      </div>
      </Layout>
    </CursorGlow>
  )
}