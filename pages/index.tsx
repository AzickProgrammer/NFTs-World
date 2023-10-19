import NextLink from 'next/link'
import {
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  Image,
  Box,
} from '@chakra-ui/react'

const Home: React.FC = () => {
  return (
    <Container
      maxW="100%"
      h="90vh"
      padding={0}
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
    >
      <Stack spacing={4} align="center" textAlign="center">
        <Heading color="green.800" fontWeight="bold">
          Welcome to our NFTs marketplace!
        </Heading>
        <Text
          m="6"
          color="green.500"
          fontSize="lg"
          fontStyle="italic"
          fontWeight="bold"
          p="5"
          borderRadius="md"
        >
          You can buy NFTs and sell your NFT collection
        </Text>
        <Button
          as={NextLink}
          href="/buy"
          color="green.800"
          size="md"
          height="48px"
          width="200px"
          border="2px"
          borderColor="green.500"
        >
          Collect NFTs
        </Button>

        <Stack direction="row" spacing={4} mt={4}>
          <Flex direction="column" alignItems="center">
            <Image
              mt={22}
              boxSize="200px"
              objectFit="cover"
              src="/images/meta.jpg"
              alt="Image 1"
              rounded="150px"
            />
            <Text
              borderWidth={2}
              borderColor="purple.500"
              p={5}
              className="my-text"
              as="kbd"
              mt={7}
              color="tomato"
              fontSize="2xl"
            >
              As you can see, you can also trade with Matic currency on MetaMask
            </Text>
          </Flex>

          <Flex direction="column" alignItems="center">
            <Image
              mt={22}
              boxSize="200px"
              objectFit="cover"
              src="/images/metamask2.jpg"
              alt="Image 2"
              rounded="150px"
            />

            <Text
              textShadow="1px 1px #ff0022"
              m="4"
              as="kbd"
              mt={47}
              color="black"
              fontSize="2xl"
            >
              We are working towards enabling the use of all MetaMask coins in
              the future
            </Text>
          </Flex>

          <Flex direction="column" alignItems="center">
            <Image
              mt={22}
              boxSize="200px"
              objectFit="cover"
              src="/images/MATIC.jpg"
              alt="Image 3"
              rounded="150px"
            />
            <Text
              borderWidth={2}
              borderColor="purple.500"
              p={5}
              className="my-text"
              as="kbd"
              mt={7}
              color="tomato"
              fontSize="2xl"
            >
              The TIS coin on MetaMask has the capability to handle transactions
            </Text>
          </Flex>
        </Stack>
      </Stack>
    </Container>
  )
}

export default Home
