import CursorGlow from '../components/CursorGlow';
import Link from 'next/link'
export default function ContactPage() {
  return (
    <CursorGlow>
      <div className="main"></div>
      <div className="min-h-screen p-8 pb-20 sm:p-20">
        <div className="min-h-[calc(100vh-17rem)] flex items-center justify-center pt-16">
            <main className="pt-32 max-w-3xl mx-auto space-y-8 text-center">
                <section className="relative bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8 sm:p-12 text-center mb-8">
                  <h2 className="text-2xl sm:text-3xl font-semibold">
                      Contact Us
                  </h2>
                  <p className="text-lg">
                      For any inquiries, please reach out to us at:
                  </p>
                  <a href="mailto:horizonavionics.computers@gmail.com" className="text-blue-500 hover:underline">horizonavionics.computers@gmail.com</a>
                </section>
            </main>
        </div>
      </div>
    </CursorGlow>
  )
}