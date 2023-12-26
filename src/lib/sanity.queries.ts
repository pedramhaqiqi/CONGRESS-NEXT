import groq from 'groq'
import { type SanityClient } from 'next-sanity'

import { Article } from '~/content'

const articleBySlugQuery = groq`
*[_type == "article" && slug.current == $slug][0]{
  ...,
  "image": mainImage.asset->url,
}
`

const articlesQuery = groq`
*[_type == "article"]{
  ...,
  "image": mainImage.asset->url,
} | order(_createdAt desc)
`

export async function getArticle(
  client: SanityClient,
  slug: string,
): Promise<Article> {
  return await client.fetch(articleBySlugQuery, {
    slug,
  })
}

export async function getArticles(client: SanityClient): Promise<Article[]> {
  return await client.fetch(articlesQuery)
}



