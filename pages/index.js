import Head from 'next/head'
import Header from 'components/Header'
import Footer from 'components/Footer'
import GlobalContainer from 'components/GlobalContainer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>CV</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <GlobalContainer>
          <Header />
          <Footer />
        </GlobalContainer>
      </main>
    </div>
  )
}
