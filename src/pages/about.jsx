// import type { NextPage } from 'next'
import Head from 'next/head'
import { Layout } from '../layouts/layout'

import { AboutBlurb } from '../components/AboutBlurb/AboutBlurb';
import { getAboutData } from '../lib/about-helper';

import utilStyles from '../styles/utils.module.scss';



export async function getStaticProps() {
    const abtData = await getAboutData();
    
    return {
        props: {
            abtData
        }
    }
}



const About = ({ abtData }) => {
    return (
        <Layout>

            {/* header - meta info  */}
            <Head>
                <title>about | r.h.grant</title>
                <meta name="description" content="Portfolio site for Riley" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <AboutBlurb abtData={abtData} />

            <hr className={utilStyles.separator} />

        </Layout>
    )
  }

export default About
  