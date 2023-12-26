import {
    ChakraProvider,
    Container,
    Divider,
    Heading,
    Wrap
} from '@chakra-ui/react'

import { Article } from '~/content'
import NavBar from '../components/NavBar'
import RecentHearing from './components/HeroBanner'
import ArticleTags from '../components/Tags'
import SmallArticle from '../components/ArticleSmall'

const Gallery = (props) => {
  const { posts } = props
  const mostRecent: Article = posts?.[0]
  return (
    <ChakraProvider>
      <NavBar></NavBar>
      <Container maxW={'7xl'} p="12">
        <RecentHearing {...mostRecent}></RecentHearing>
        <Heading as="h2" marginTop="5">
          Latest Hearings:
        </Heading>
        <Divider marginTop="5" />
        <Wrap spacing="30px" marginTop="5">
          {posts.map((article) => (
            <SmallArticle
              {...article}
            ></SmallArticle>
          ))}
        </Wrap>
      </Container>
    </ChakraProvider>
  )
}

export default Gallery
