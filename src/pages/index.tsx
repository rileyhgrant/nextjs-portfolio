import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../layouts/layout'
import { Footer } from '../components/Footer/footer'
import { Header } from '../components/Header/header'
import utilStyles from '../styles/utils.module.scss'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faLinkedin,
  faLinkedinIn,
  faGithub,
  faGithubAlt,
  faPagelines
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFileLines, faMailBulk, faMailForward, faMailReply } from '@fortawesome/free-solid-svg-icons'

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
        <p>I'm a developer, a thru hiker, and a musician.</p>
      </section>

      <section>
        <span>

         
          <a href="https://github.com/rileyhgrant"
            target="_blank">
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className={utilStyles.icon}
            />
          </a>

          {' -- '}

          <a href="https://github.com/rileyhgrant"
            target="_blank">
            <FontAwesomeIcon
              icon={faGithub}
              className={utilStyles.icon}
            />
          </a>

          {' -- '}

          <a href="https://github.com/rileyhgrant"
            target="_blank">
            <FontAwesomeIcon
              icon={faEnvelope}
              className={utilStyles.icon}
            />
          </a>

          {' -- '}

          <a href="https://github.com/rileyhgrant"
            target="_blank">
              <span>
                <FontAwesomeIcon
                  icon={faFileLines}
                  className={utilStyles.icon}
                  />
                {' Resume'}
              </span>
          </a>

        </span>
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
