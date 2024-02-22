import { GetStaticProps, GetServerSideProps } from "next"

import { Article } from "~/content"
import { readToken } from "~/lib/sanity.api"
import { getClient } from "~/lib/sanity.client"
import { getArticles } from "~/lib/sanity.queries"
import Gallery from "~/views/Gallery"

export async function getServerSideProps() {
  const client = getClient({ token: readToken })
  const posts = await getArticles(client)
  return {
    props: {
      posts,
    },
  }
}


const GalleryPage = (props): JSX.Element => {
    return <Gallery {...props}/>
  }
  
  export default GalleryPage