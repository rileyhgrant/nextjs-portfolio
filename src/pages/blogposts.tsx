import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../layouts/layout';
import { getSortedPostsData } from '../lib/blog-posts'
import utilStyles from '../styles/utils.module.scss'

import Link from 'next/link'
import Date from '../components/date'


export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        }
    }
}



const Blogposts: NextPage = ({ allPostsData }) => {

    return (
        <Layout home={false}>

            <Head>
                <title>Blog</title>
                <meta name="description" content="Portfolio site for Riley" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <section>
                <h1>Blog Page</h1>
                <p>There's also nothing here</p>
            </section>

            {/* Add this <section> tag below the existing <section> tag */}
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                
                <h2 className={utilStyles.headingLg}>Blog</h2>
                
                <ul className={utilStyles.list}>
                    {allPostsData.map(({ id, date, title }) => (
                        <li className={utilStyles.listItem} key={id}>
                        <Link href={`/blogposts/${id}`}>
                          <a>{title}</a>
                        </Link>
                        <br />
                        <small className={utilStyles.lightText}>
                          <Date dateString={date} />
                        </small>
                      </li>
                      
                    ))}
                </ul>
            </section>
            
            {/* The back button is handled by layout, wow! */}


        </Layout>
    )

}

export default Blogposts;
