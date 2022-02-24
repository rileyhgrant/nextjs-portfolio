import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../layouts/layout'
import { Footer } from '../components/Footer/footer'
import { Header } from '../components/Header/header'
import utilStyles from '../styles/utils.module.scss'


// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
// import Link from 'next/link'


const Home: NextPage = () => {
  return (
    <Layout home={true}>

      <Head>
        <title>{siteTitle}</title>
      </Head>

      {/* <Header/> */}
      <h1>Hi there, I'm Riley</h1>


      <section className={utilStyles.headingMd}>
        <p>I'm a developer, thru hiker, and musician.</p>
      </section>

      <section>
        <p>
          <Link href="/about"><a>LINK</a></Link>
          {' -- '}
          <Link href="/about"><a>LINK</a></Link>
          {' -- '}
          <Link href="/about"><a>LINK</a></Link>
          {' -- '}
          <Link href="/about"><a>LINK</a></Link>
        </p>
      </section>

      {/* 
        <section>
          <p>Check out my{` `}
            <Link href="/blogposts"><a>blog!</a></Link>
          </p>
        </section> 
      */}

    {/* <Footer/> */}


    </Layout>
  )
}

export default Home
