import Head from 'next/head'
import Header from '@components/Header'
import dynamic from "next/dynamic";
const Form = dynamic(() => import("../components/Form"), {
  ssr: false
});
//import Form from '@components/Form';
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
        <form name="cooling" data-netlify={true} hidden>
          <input type="hidden" name="form-name" value="cooling" />
          <input class="" name="email" type="email" placeholder="you@example.com" />
        </form>
        <Form />
      </main>

      <Footer />
    </div>
  )
}
