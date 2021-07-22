import Layout from '../../components/layout'
import Date from '../../components/date'
import Head from 'next/head'
import { getAllPostIds, getPostData } from '../../lib/posts'
import { useRouter } from 'next/router'

import utilStyles from '../../styles/utils.module.css'

export default function Post({ postData }) {
  const { locale } = useRouter()

  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} locale={locale} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}

export const getStaticPaths = async ({ locales }) => {
  const paths = getAllPostIds(locales)
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params, locale }) => {
  const postData = await getPostData(params.id, locale)
  return {
    props: {
      postData,
    },
  }
}
