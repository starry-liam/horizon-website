import CursorGlow from '../components/CursorGlow';
import Link from 'next/link'
// Update the import path if Layout is in src/components/Layout.tsx
import Layout from '../components/Layout';
export default function ContactPage() {
  return (
    <CursorGlow>
      <Layout>
      <div className="main"></div>
      <div className="p-8 pb-20 sm:p-20">
        <div className="min-h-[calc(100vh-17rem)] flex items-center justify-center pt-16">
            <main className="pt-32 max-w-3xl mx-auto space-y-8 text-center">
                <section className="relative bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8 sm:p-12 text-center mb-8">
                  <h2 className="text-2xl sm:text-3xl font-semibold">
                      Contact Us
                  </h2>
                  <p className="text-lg">
                      For any inquiries, please reach out to us at:
                  </p>
                  <a href="mailto:sales@horizonavionics.org" className="text-blue-500 hover:underline">sales@horizonavionics.org</a>

                  
                </section>
                
            </main>
        </div>
      </div>
      </Layout>
    </CursorGlow>
  )
}