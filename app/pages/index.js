import { Input, Box, Center, Heading, Flex, Button } from "@chakra-ui/react";
import Link from "next/link";
export default function Home() {
  return (
    <Center h="100vh">
      <Flex direction="column">
        <Center p={3}>
          <Heading fontSize={36}>Type in a Stock Ticker</Heading>
        </Center>
        <Center p={3}>
          <Input placeholder="ticker"></Input>
        </Center>
        <Box>
          <Link href="/predict">
            <Button colorScheme="blue">Select</Button>
          </Link>
        </Box>
      </Flex>
    </Center>
  );
}
