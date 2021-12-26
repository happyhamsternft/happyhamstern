import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome Happy Hamster Club!" />
        <p className="description">
    
          COMING SOON WEBSITE!<code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
