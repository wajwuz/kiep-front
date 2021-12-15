import * as CSS from "csstype"
import { Box, Button, Flex, Text, Heading, VStack, HStack, Spacer, Grid, SimpleGrid, Center, Stack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Icon } from '@iconify/react';
import Section from "../components/section_header";
import ProTag from "../components/pro_tag";
import { Image, OutlinedImage } from "../components/image";

const Home: NextPage = () => (
  <>
    <Head>
      <title>Strona Główna - BuzkaaClicker.pl</title>
      <meta name="description" content="Strona główna" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <Center>
        <VStack spacing="8.75rem" maxWidth="75rem" margin="0 1rem">
          <Landing />

          <Statistics />

          <Zalets />

          <Features />

          <Box height="100vh" />
        </VStack>
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

    <OutlinedImage src="/home_cropped.png" alt="Strona Główna BuzkaaClickera" width="416px" height="556px" />
  </Flex>
)

const Statistics = () => (
  <VStack
    spacing="2rem"
  >
    <Heading>Statystyki</Heading>

    <Flex
      align="center"
      direction={{ base: "column", md: "row" }}
      textAlign={{ base: "center", md: "left" }}
      justifyContent={"center"}
      margin="3rem"
    >
      <StatisticEntry textColor="#FFB6B6" />
      <StatisticEntry textColor="#B6FFE5" />
      <StatisticEntry textColor="#B6D3FF" />
    </Flex>
  </VStack>
)

type StatisticEntryProps = { textColor: CSS.Property.Color; }

const StatisticEntry: React.FC<StatisticEntryProps> = ({ textColor }) => (
  <Box align="center" m="1rem 3rem">
    <Text fontSize="2.25rem"
      fontWeight={800}
      backgroundImage={"linear-gradient(110deg, " + textColor + ", #FFFFFF)"}
      backgroundClip="text">
      75683
    </Text>
    <Text fontSize="18px" color="#DFDFDF">osób uruchomiło <Text fontWeight={700} color={"#fff"}>BuzkaaClicker</Text> w ostatnich 30 dniach</Text>
  </Box>
);

const Zalets = () => (
  <Section
    title="Zalety, które pokochasz"
    description="Tylko zalety, bo jesteśmy zajebiści."
  >
    <SimpleGrid
      columns={{ base: 1, lg: 2 }}
      spacing={12}
    >
      <ZaletsEntry color="#312323" title="Kąfiguracja" description={"W naszym autoclickerze możesz przypisać " +
        "klawisz na wiele sposobów. Dodatkowo działa tylko w oknie gry! Koniec z przypadkowymi kliknięciami."} />

      <ZaletsEntry color="#233123" title="Kąfiguracja" description={"W naszym autoclickerze możesz przypisać " +
        "klawisz na wiele sposobów. Dodatkowo działa tylko w oknie gry! Koniec z przypadkowymi kliknięciami."} />

      <ZaletsEntry color="#23202D" title="Kąfiguracja" description={"W naszym autoclickerze możesz przypisać " +
        "klawisz na wiele sposobów. Dodatkowo działa tylko w oknie gry! Koniec z przypadkowymi kliknięciami."} />
    </SimpleGrid>
  </Section>
)

type ZaletsEntryProps = { title: string; description: string; color: CSS.Property.Color; }

const ZaletsEntry: React.FC<ZaletsEntryProps> = ({ title, description, color }) => (
  <Box
    backgroundColor={color}
    padding={{ base: "2rem 2rem", lg: "50px" }}
    borderRadius={"18px"}
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

const Features = () => (
  <Section
    title="Funkcje"
    description="Scyzoryk, ale do Minecrafta."
  >
    <Flex direction="column" alignItems="center">
      {/* background */}
      <Box backgroundColor="#24262B" width="100%" height="28.75rem" borderRadius="1.125rem" />
      <Flex position="absolute" paddingTop="3.125rem" direction="column" alignItems="center">
        <Flex direction={{ base: "column", lg: "row" }}>
          <FeatureButton title="Klikanie" active={true} />
          <FeatureButton title="Konfiguracja" />
          <FeatureButton title="Kopanie" pro={true} />
          <FeatureButton title="Dodatkowa essa" pro={true} />
        </Flex>

        <FeaturePreview />
      </Flex>
    </Flex>
  </Section>
)

type FeatureButtonProps = {
  title: String;
  active?: boolean;
  pro?: boolean;
};

const FeatureButton = ({ title, active, pro }: FeatureButtonProps) => (
  <Box
    backgroundColor={active ? "#94B3FD" : "transparent"}
    padding="0 1.375rem"
    borderRadius="0.5rem"
    display="flex"
    alignItems="center"
    height="2.75rem"
  >
    <Text fontSize={20} fontWeight={600}>{title}</Text>
    {pro ? <ProTag marginLeft="1rem" /> : null}
  </Box>
)

const FeaturePreview = () => (
  <Box margin={{ base: "1.125rem 2rem 0 2rem", lg: "3.125rem 2rem 0 2rem" }}>
    <OutlinedImage src="/feature_preview_sample_text.png" width="879px" height="556px" />
  </Box>
)

export default Home
