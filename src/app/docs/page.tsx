import CursorGlow from '../components/CursorGlow';
import Link from 'next/link'
import Layout from '../components/Layout';
export default function DocsPage() {
  return(
    <CursorGlow>
      <Layout>
      <div className="main"></div>
      <div className="min-h-screen p-8 pb-20 sm:p-20">
      </div>
      </Layout>
    </CursorGlow>
  )
}