import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'

import Date from '../components/date'
import Layout, { siteTitle } from '../components/layout'

import { getSortedPostsData } from '../lib/posts'
import utilStyles from '../styles/utils.module.css'

export default function Home({ allPostsData }) {
  const { t } = useTranslation()

  const router = useRouter()
  const { locale } = router

  const renderTag = (tag) => {
    if (tag === 'Development' || tag === 'Desenvolvimento')
      return <small className={utilStyles.tag}>{tag}</small>
    else if (tag === 'Design')
      return <small className={utilStyles.tag1}>{tag}</small>
    else if (
      tag === 'Design - Development' ||
      tag === 'Design - Desenvolvimento'
    )
      return <small className={utilStyles.tag2}>{tag}</small>
    else return <small className={utilStyles.tag3}>{tag}</small>
  }

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p className={utilStyles.p}>{t('common:whoiam')}</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title, tag }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <div className={utilStyles.flex}>
                <small className={utilStyles.lightText}>
                  <Date dateString={date} locale={locale} />
                </small>
                {renderTag(tag)}
              </div>
              <hr className={utilStyles.hr} />
            </li>
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
        <hr />
        <div className={utilStyles.flex}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('common:poweredBy')}{' '}
          </a>
          <div>
            <img
              src="/vercel.svg"
              alt="Vercel Logo"
              className={utilStyles.vercel}
            />
          </div>
        </div>
      </footer>
    </Layout>
  )
}

export const getStaticProps = async ({ locale }) => {
  const allPostsData = getSortedPostsData(locale)
  return {
    props: {
      allPostsData,
    },
  }
}
