import type { AppProps } from 'next/app'
import { CSSReset, ChakraProvider, Center, VStack } from '@chakra-ui/react'
import theme from '../styles/theme'
import Fonts from '../styles/fonts'
import "focus-visible/dist/focus-visible";
import NavBar from '../components/navbar';
import Footer from '../components/footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Fonts />

      <Center>
        <VStack spacing={{ base: "4.75rem", xl: "8.75rem" }} maxWidth="71rem" margin="0 2rem">
          <NavBar />

          <Component {...pageProps} />

          <Footer />
        </VStack>
      </Center>
    </ChakraProvider>
  )
}

export default MyApp
