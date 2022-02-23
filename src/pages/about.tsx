import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

import styles from '../styles/Home.module.css'

// export default function AboutPage() {


const About: NextPage = () => {
    return (
        <Layout home={false}>

            <Head>
                <title>About</title>
                <meta name="description" content="Portfolio site for Riley" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1>About Page</h1>
            <p>There's really nothing here</p>
            
            {/* The back button is handled by layout, wow! */}

        </Layout>
    )
  }

export default About
  