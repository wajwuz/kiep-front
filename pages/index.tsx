import {
  Box, Button, Flex, Text, Heading, VStack, Spacer, SimpleGrid,
  Center, Image, Tabs, TabList, Tab, TabPanels, TabPanel
} from '@chakra-ui/react'
import type { NextPage } from 'next'
import Section from "../components/section";
import { DISCORD_URL } from '../externalLinks';
import Head from 'next/head';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Store</title>
    </Head>

    <Hero />
    <Features />
    <Prices />
  </>
)

const Hero = () => (
  <Flex
    align="center"
    direction={{ base: "column", xl: "row" }}
    textAlign={{ base: "center", xl: "left" }}
  >
    <Box>
      <Box marginRight={{ base: "0", xl: "5rem" }}>
        <Heading fontSize={{ base: "2rem", md: "2.6rem" }}>
          Your one and only trusted{" "}
          <Text
            as="span"
            background="linear-gradient(94.3deg, #03506F 0%, #03C4A1 200.63%)"
            backgroundClip="text"
          >
            store
          </Text>
        </Heading>

        <Text variant="secondary" marginTop={2}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </Text>
      </Box>
    </Box>

    <Image src="/static/logo.svg" alt="" width={"200px"} height={"200px"} />
  </Flex>
)

const Features = () => (
  <Section
    id="features"
    title="How can you believe it?"
  >
    <SimpleGrid
      columns={{ base: 1, lg: 3 }}
      spacing={12}
    >
      <FeaturesEntry
        icon="rocket"
        title="Stability"
        description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry." +
                    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," + 
                    "when an unknown printer took a galley of type and scrambled it to make a type specimen book."} />

      <FeaturesEntry
        icon="shield"
        title="Security"
        description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry." +
                    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," + 
                    "when an unknown printer took a galley of type and scrambled it to make a type specimen book."} />

      <FeaturesEntry
        icon="thumb"
        title="Simplicity"
        description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry." +
                    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," + 
                    "when an unknown printer took a galley of type and scrambled it to make a type specimen book."} />
    </SimpleGrid>
  </Section>
)

type FeaturesEntryProps = { title: string; description: string; icon: string; }

const FeaturesEntry: React.FC<FeaturesEntryProps> = ({ title, description, icon }) => (
  <Flex flexDirection="column" gap="15px">
    <Flex backgroundColor="#03506F" width="3.375rem" height="3.375rem" borderRadius="10">
      <Image src={"/static/landing/" + icon + ".svg"} alt="" margin="auto" />
    </Flex>

    <Heading size="md">{title}</Heading>
    <Text>{description}</Text>
  </Flex>
)

const Prices = () => (
  <Section
    id="prices"
    title="Prices"
  >
    <Flex
      alignItems="center"
      width="100%"
      justifyContent={{ base: "center", xl: "space-between" }}
      gap="1rem"
      wrap="wrap"
    >
      <Plan name="Example" price={10}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      </Plan>
      <Plan name="Second example" price={20}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      </Plan>
      <Plan name="Third example" price={30} pro>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </Plan>
    </Flex>

    <Flex flexDirection="column" textAlign="center" marginTop="3rem" gap="1rem">
      <Heading>Looking for something different??</Heading>
      <Text>Napisz do nas, a sprawdzimy czy jesteśmy w stanie to zrealizować!</Text>
      <Button as="a" href={DISCORD_URL} size="lg" margin="auto" colorScheme="black">Contact with us</Button>
    </Flex>
  </Section>
);

type PlanProps = {
  name: string,
  price: number,
  pro?: boolean,
  children: React.ReactNode,
};

const Plan = ({ name, price, pro = false, children }: PlanProps) => (
  <Box
    width="21rem"
    height="26.5rem"
    borderRadius="25"
    borderWidth="1px"
    borderColor={pro ? "#03506F" : "#DDDDDD"}
    padding="2.5rem"
  >
    <Flex flexDirection="column" gap="0.875rem" height="100%">
      <Heading size="md">{name}</Heading>
      <Flex alignItems="end" gap="0.5rem">
        <Heading size="xl">{price} $</Heading>
        <Heading size="md" fontWeight="normal" lineHeight="180%">/monthly</Heading>
      </Flex>
      <Text>{children}</Text>
      <Spacer />

      <Button
        as="a"
        href={DISCORD_URL}
        margin="0 1.5rem"
        size="lg"
        colorScheme={pro ? "pink" : "black"}
      >
        More informations
      </Button>
    </Flex>
  </Box>
);

export default Home
