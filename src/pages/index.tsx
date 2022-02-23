import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'


// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
// import Link from 'next/link'


const Home: NextPage = () => {
  return (
    <Layout home={true}>

      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>{`<changeme!> Wassup, I'm Riley`}</p>
      </section>

      <section>
        <p>Read more{` `}
          <Link href="/about"><a>about me</a></Link>
        </p>
      </section>

      <section>
        <p>Check out my{` `}
          <Link href="/blogposts"><a>blog!</a></Link>
        </p>
      </section>

    </Layout>
  )
}

export default Home
