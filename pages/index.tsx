import { Box, Button, Flex, Text, Image, Heading, VStack, HStack, Spacer, Grid, SimpleGrid, Center } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Icon } from '@iconify/react';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Strona Główna - BuzkaaClicker.pl</title>
      <meta name="description" content="Strona główna" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <Center>
        <Box>
          <Landing />

          <Zalets />

          <Box marginBottom={1000} />
        </Box>
      </Center>
    </main>
  </>
)

const Landing = () => (
  <Flex
    align="center"
    direction={{ base: "column", xl: "row" }}
    textAlign={{ base: "center", xl: "left" }}
    justifyContent={"center"}
    margin="3rem"
    minHeight="100vh"
  >
    <Box maxWidth={600}>
      <Box marginBottom={5} maxWidth={500} marginRight={{ base: "0", xl: "5rem" }}>
        <Heading fontSize={{ base: "1.6rem", lg: "2.6rem" }}>
          Przyjazny autoclicker,<br />
          tworzony z myślą o tobie
        </Heading>

        <Text variant="secondary" marginTop={2} marginBottom={7}>
          Mega - od zawsze, na zawsze
        </Text>
      </Box>

      <Button width={180} marginBottom={10}>Buy kup teraz</Button>
    </Box>

    <Image src="/home_cropped.png" alt="Strona Główna BuzkaaClickera"
      border="0.7rem solid"
      style={{
        borderImageSlice: 1,
        borderImageSource: "linear-gradient(180deg, rgba(148,179,253,1) 0%, rgba(36,38,43,0) 100%)",
      }} />
  </Flex>
)

const Zalets = () => (
  <Box
    spacing={5}
    margin={{ base: "0 1em", lg: "0 3em" }}>
    <Heading>Zalety, które pokochasz</Heading>
    <Text marginTop={3} variant="secondary">Tylko zalety, bo jesteśmy zajebiści.</Text>
    <SimpleGrid
      columns={{ base: 1, lg: 2 }}
      spacing={12}
      marginTop={"2rem"}
    >
      <ZaletsWidget color="#312323" title={"Kąfiguracja"} description={"W naszym autoclickerze możesz przypisać" +
        "klawisz na wiele sposobów. Dodatkowo działa tylko w oknie gry! Koniec z przypadkowymi kliknięciami."} />

      <ZaletsWidget color="#233123" title={"Kąfiguracja"} description={"W naszym autoclickerze możesz przypisać" +
        "klawisz na wiele sposobów. Dodatkowo działa tylko w oknie gry! Koniec z przypadkowymi kliknięciami."} />

      <ZaletsWidget color="#23202D" title={"Kąfiguracja"} description={"W naszym autoclickerze możesz przypisać" +
        "klawisz na wiele sposobów. Dodatkowo działa tylko w oknie gry! Koniec z przypadkowymi kliknięciami."} />
    </SimpleGrid>
  </Box>
)

interface ZaletsProps {
  title: string;
  description: string;
  color: string;
}

const ZaletsWidget: React.FC<ZaletsProps> = ({ title, description, color }) => (
  <Box
    backgroundColor={color}
    padding={{ base: "2rem 2rem", lg: "50px" }}
    borderRadius={"18px"}
    maxWidth={"563px"}
    align={"start"}
    justifyContent={"start"}
  >
    <HStack align={"start"}>
      <Icon icon="ant-design:smile-outlined" width="120px" height="50px" />
      <Spacer />
      <VStack align={"start"} marginLeft={"50px"}>
        <Heading fontSize={"2xl"}>{title}</Heading>
        <Text fontSize={"16px"} color={"#AAAAAA"}>{description}</Text>
      </VStack>
    </HStack>
  </Box>
)

export default Home
