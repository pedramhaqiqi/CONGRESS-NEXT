import {
    Box,
    Button,
    ChakraProvider,
    Heading,
    HStack,
    Image,
    Link,
    SpaceProps,
    Tag,
    Text,
    WrapItem,
} from "@chakra-ui/react";
import React from "react";
import { Article } from "~/content";
import ArticleTags from "./Tags";


const SmallArticle = (props: Article) => {
  const { topic, tags, date, one_line_summary, image } = props;
  return (
    <ChakraProvider>
      <WrapItem width={{ base: "100%", sm: "45%", md: "45%", lg: "30%" }}>
        <Box w="100%">
          <Box borderRadius="lg" overflow="hidden">
            <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
              <Image
                transform="scale(1.0)"
                src={image}
                alt="some text"
                objectFit="contain"
                width="100%"
                transition="0.3s ease-in-out"
                _hover={{
                  transform: "scale(1.05)",
                }}
              />
            </Link>
          </Box>
          <ArticleTags tags={tags} marginTop="3" color={'red'} />
          <Heading fontSize="xl" marginTop="2">
            <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
              {topic}
            </Link>
          </Heading>
          <Text as="p" fontSize="md" marginTop="2">
            {one_line_summary}
          </Text>
          {/* <BlogAuthor link={props.link} date={props.date} /> */}
        </Box>
      </WrapItem>
    </ChakraProvider>
  );
};

export default SmallArticle;
