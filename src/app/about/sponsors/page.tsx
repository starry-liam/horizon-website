import CursorGlow from '../../components/CursorGlow';
import Link from 'next/link'
import Image from 'next/image';
import Layout from '../../components/Layout';
export default function SponsorsPage() {
  return (
    <CursorGlow>
      <Layout>
      <div className="main"></div>
      <div className="p-8 pb-20 sm:p-20">
        <main className="pt-32 max-w-3xl mx-auto space-y-8 text-center">
            <section className="relative bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8 sm:p-12 text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-semibold">
            None yet! if your interested in funding our development, please contact us using the information on the {''}
            <a href="/contact" className="text-blue-500 hover:underline">
                  contact page
                </a>
            </h2> 
          
            </section>
        </main>
      </div>
      </Layout>
    </CursorGlow>
  )
}