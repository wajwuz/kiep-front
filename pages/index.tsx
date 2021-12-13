import { Box, Button, Flex, Text, Image, AspectRatio } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Component } from 'react'

const Home: NextPage = () => (
  <>
    <Head>
      <title>Strona Główna - BuzkaaClicker.pl</title>
      <meta name="description" content="Strona główna" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <Landing />
    </main>
  </>
)

const Landing = () => (
  <Flex
    align="center"
    direction={{ base: "column-reverse", xl: "row" }}
    textAlign={{ base: "center", xl: "left" }}
    justifyContent={"center"}
    margin={50}
    minHeight="85vh"
  >
    <Box width={700} padding={100}>
      <Box marginBottom={5} minWidth={550} >
        <Text fontSize="5xl">
          Przyjazny autoclicker,<br />
          tworzony z myślą o tobie
        </Text>

        <Text fontSize="2xl" variant="secondary">
          Mega - od zawsze, na zawsze.
        </Text>
      </Box>

      <Button width={180}>Buy kup teraz</Button>
    </Box>

    <Image src="/home_cropped.png" alt="Strona Główna BuzkaaClickera"
      maxWidth={500} border="0.7rem solid" style={{
        borderImageSlice: 1,
        borderImageSource: "linear-gradient(180deg, rgba(148,179,253,1) 0%, rgba(36,38,43,0) 100%)",
      }} />
  </Flex>
)

export default Home
