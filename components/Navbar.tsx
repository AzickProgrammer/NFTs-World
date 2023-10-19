import { Avatar, Box, Flex, Heading, Link, Button } from '@chakra-ui/react'
import { ConnectWallet, useAddress } from '@thirdweb-dev/react'
import NextLink from 'next/link'
import { MdBuild, MdCall } from 'react-icons/md'

export function Navbar() {
  const address = useAddress()

  return (
    <Box maxW={'1200px'} m={'auto'} py={'10px'} px={'40px'}>
      <Flex justifyContent={'space-between'} alignItems={'center'}>
        <Link as={NextLink} href="/">
          <Heading
            bgGradient="linear(to-l, #CC3300, #FF6600)"
            bgClip="text"
            fontSize="6xl"
            fontWeight="extrabold"
          >
            NFTs World
          </Heading>
        </Link>
        <Flex direction={'row'}>
          <Link as={NextLink} href="/buy" mx={2.5}>
            <Button colorScheme="teal" size="md">
              Buy
            </Button>
          </Link>
          <Link as={NextLink} href="/sell" mx={2.5}>
            <Button colorScheme="teal" size="md">
              Sell
            </Button>
          </Link>
        </Flex>
        <Flex dir={'row'} alignItems={'center'}>
          <ConnectWallet />
          {address && (
            <Link as={NextLink} href={`/profile/${address}`}>
              <Avatar src="https://bit.ly/broken-link" ml={'20px'} />
            </Link>
          )}
        </Flex>
      </Flex>
    </Box>
  )
}
