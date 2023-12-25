import type { GetStaticProps } from 'next'

import { readToken } from '~/lib/sanity.api'
import { getClient } from '~/lib/sanity.client'
import { getPosts, type Post } from '~/lib/sanity.queries'
import type { SharedPageProps } from '~/pages/_app'
import Landing from '~/views/Landing'

export const getStaticProps: GetStaticProps<
  SharedPageProps & {
    posts: Post[]
  }
> = async ({ draftMode = false }) => {
  const client = getClient(draftMode ? { token: readToken } : undefined)
  const posts = await getPosts(client)

  return {
    props: {
      draftMode,
      token: draftMode ? readToken : '',
      posts,
    },
  }
}

const LandingPage = (props): JSX.Element => {
  return <Landing/>
}

export default LandingPage
