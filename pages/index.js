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
    Welcome to Happy Hamster Club.These hamsters are carefully made by hand, so each hamster is unique.5% of the profit are donated to a store full of cute hamsters!<code></code>
    <p className="descriptio">
    COMING SOON WEBSITE!<code></code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
