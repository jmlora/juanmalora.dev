import Head from 'next/head'
import Footer from 'components/Footer'
import GlobalContainer from 'components/GlobalContainer'
import ProfessionalResume from 'components/ProfessionalResume'

export default function Home() {
  return (
    <div>
      <Head>
        <title>CV</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <GlobalContainer>
          <ProfessionalResume />
        </GlobalContainer>
        <Footer />
      </main>
    </div>
  )
}
