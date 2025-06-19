import CursorGlow from '../components/CursorGlow';
import Link from 'next/link'
import Image from 'next/image';
export default function SponsorsPage() {
  return (
    <CursorGlow>
      <div className="main"></div>
      <div className="min-h-screen p-8 pb-20 sm:p-20">
        <main className="pt-32 max-w-3xl mx-auto space-y-8 text-center">
            <section className="relative bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8 sm:p-12 text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-semibold">
            None yet! click the button below to sponsor us!
            </h2> 
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                        <a
                          href="https://hcb.hackclub.com/donations/start/horizon-avionics"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-large text-white bg-red-700 rounded-full hover:bg-red-600 transition-colors"
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
            </section>
        </main>
      </div>
    </CursorGlow>
  )
}