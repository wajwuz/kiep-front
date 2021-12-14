import type { AppProps } from 'next/app'
import { CSSReset, ChakraProvider } from '@chakra-ui/react'
import theme from '../styles/theme'
import Fonts from '../styles/fonts'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
