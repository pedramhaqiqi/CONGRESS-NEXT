import {
    ChakraProvider,
    Container,
    Divider,
    Heading
} from '@chakra-ui/react'

import { Article } from '~/content'
import NavBar from '../components/NavBar'
import RecentHearing from './components/HeroBanner'
import ArticleTags from '../components/Tags'

const Gallery = (props) => {
  console.log('props', props)
  const { posts } = props
  console.log('articles', posts)
  const mostRecent: Article = posts[0]
  return (
    <ChakraProvider>
      <NavBar></NavBar>
      <Container maxW={'7xl'} p="12">
        <RecentHearing {...mostRecent}></RecentHearing>
        <Heading as="h2" marginTop="5">
          Latest Hearings:
        </Heading>
        <Divider marginTop="5" />
        {/* <Wrap spacing="30px" marginTop="5">
          {FinalBody.data.map((article) => (
            <SmallArticle
              title={article.title}
              link={article.url}
              tags={article.tags}
              date={article.date}
              summary={article.summary}
              image={article.photo}
              key={article.session}
            ></SmallArticle>
          ))}
        </Wrap> */}
      </Container>
    </ChakraProvider>
  )
}

export default Gallery
