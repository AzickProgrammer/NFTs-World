// _app.tsx
import { ChakraProvider, Container } from '@chakra-ui/react'
import theme from '@chakra-ui/theme'
import { ThirdwebProvider } from '@thirdweb-dev/react'
//import type { AppProps } from 'next'
import { Navbar } from '../components/Navbar'
import { AppProps } from 'next/app'
//import '@styles/globals.css'

const activeChain = 'mumbai'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={activeChain}>
      <ChakraProvider theme={theme}>
        <Container maxW={'1200px'}>
          <Navbar />
          <Component {...pageProps} />
        </Container>
      </ChakraProvider>
    </ThirdwebProvider>
  )
}

export default MyApp
