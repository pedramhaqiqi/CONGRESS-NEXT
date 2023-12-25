import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ChakraProvider,
  Flex,
  Link,
  Stack,
  useColorMode,
  useColorModeValue,
  useDisclosure
} from "@chakra-ui/react";
import { ReactNode } from "react";


export default function NavBar() {
  
  return (
    <>
      <ChakraProvider>
        <Box bg={useColorModeValue("gray.50", "gray.900")} px={4}>
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <Box>co:ngress</Box>
          </Flex>
        </Box>
      </ChakraProvider>
    </>
  );
}
