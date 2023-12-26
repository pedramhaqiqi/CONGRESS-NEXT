import {
    Box,
    Heading,
    Image,
    Link,
    Text,
} from "@chakra-ui/react";

const RecentHearing = ({ title, tags, article, date, image }) => {
  return (
    <Box>
      <Heading as="h1">Most Recent Hearing:</Heading>
      <Box
        marginTop={{ base: "1", sm: "5" }}
        display="flex"
        flexDirection={{ base: "column", sm: "row" }}
        justifyContent="space-between"
      >
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: "3", sm: "0" }}
        >
          {/* Render tags */}
          {/* {tags.map((tag, index) => (
            <Text key={index} fontSize="md">
              {tag}
            </Text>
          ))} */}
          <Heading marginTop="1">
            <Link
              fontSize="2xl"
              textDecoration="none"
              _hover={{ textDecoration: "none" }}
            >
              {title}
            </Link>
          </Heading>
          <Text as="p" marginTop="2" fontSize="lg">
            {article}
          </Text>
        </Box>
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center"
        >
          <Box
            width={{ base: "100%", sm: "85%" }}
            zIndex="2"
            marginLeft={{ base: "0", sm: "5%" }}
            marginTop="5%"
          >
            <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
              <Image
                padding="4"
                borderRadius="lg"
                src={image}
                alt="some good alt text"
                objectFit="contain"
                width="100%"
                transition="0.3s ease-in-out"
                _hover={{
                  transform: "scale(1.02)",
                }}
              />
            </Link>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box backgroundSize="20px 20px" opacity="0.4" height="100%" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default RecentHearing;
