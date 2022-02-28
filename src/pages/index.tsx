import type { NextPage } from 'next';
import Head from 'next/head';
import { Layout } from '../layouts/layout';
import { WelcomeBlurb } from '../components/WelcomeBlurb/WelcomeBlurb';
import { Projects } from '../components/Projects/Projects';
import utilStyles from '../styles/utils.module.scss';


const Home: NextPage = () => {
  return (
    <Layout>

      {/* Information for head of page */}
      <Head>
        <title>r.h.grant</title>
      </Head>

      {/* Content of page */}
      <WelcomeBlurb/>

      <hr className={utilStyles.separator} />

      <Projects/>

      <hr className={utilStyles.separator} />

    </Layout>
  )
}

export default Home
