import Head from 'next/head'
import Link from 'next/link'

import Layout, { siteTitle } from '../components/layout'
import Date from '../components/date'

import { getSortedPostsData } from '../lib/posts'

import utilStyles from '../styles/utils.module.css'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Welcome! I'm a jr <u>frontend developer</u> with some knowledge in{' '}
          <u>UX/UI Design!</u>
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title, tag }) => (
            <>
              <li className={utilStyles.listItem} key={id}>
                <Link href="/posts/[id]" as={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <div className={utilStyles.flex}>
                  <small className={utilStyles.lightText}>
                    <Date dateString={date} />
                  </small>
                  {tag ? <small className={utilStyles.tag}>{tag}</small> : null}
                </div>
              </li>
              <hr className={utilStyles.hr} />
            </>
          ))}
        </ul>
      </section>
      <footer>
        <ul className={utilStyles.listFlex}>
          <li className={utilStyles.listItem}>
            <a href="https://brunormferreira.github.io" target="_blank">
              Site
            </a>
          </li>
          <span className={utilStyles.separator}>|</span>
          <li className={utilStyles.listItem}>
            <a href="https://github.com/brunormferreira" target="_blank">
              Github
            </a>
          </li>
        </ul>
      </footer>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}
