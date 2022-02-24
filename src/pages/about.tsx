import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../layouts/layout'

import styles from '../styles/Home.module.scss'

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
            <p>{
                    `< Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. >`
                }
            </p>
            
            {/* The back button is handled by layout, wow! */}

        </Layout>
    )
  }

export default About
  