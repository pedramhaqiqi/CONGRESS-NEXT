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
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <ChakraProvider>
        <Box bg={useColorModeValue("gray.50", "gray.900")} px={4}>
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <Box>co:ngress</Box>
            <Stack direction={"row"} spacing={7}>
                <Button bg={"gray.50"} onClick={toggleColorMode}>
                  {colorMode === "dark" ? <MoonIcon color={"black"} /> : <SunIcon color={"black"} />}
                </Button>
              </Stack>
          </Flex>
        </Box>
      </ChakraProvider>
    </>
  );
}
