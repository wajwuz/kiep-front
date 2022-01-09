import { Flex, Heading, Link, SimpleGrid, Spacer, Text, VStack } from "@chakra-ui/react";

const COLUMNS: ColumnProps[] = [
    {
        title: "BuzkaaClicker",
        links: [
            {
                title: "Zalety",
                href: "/#zalets",
            },
            {
                title: "Funkcje",
                href: "/#features",
            },
            {
                title: "Zdobądź",
                href: "/#getit",
            },
        ],
    },
    {
        title: "Regulaminy",
        links: [
            {
                title: "Polityka prywatności",
                href: "#",
            },
            {
                title: "Regulamin usług",
                href: "#",
            },
        ],
    },
    {
        title: "Kontakt",
        links: [
            {
                title: "Milosz@koczura.pl",
                href: "mailto:Milosz@koczura.pl",
            },
        ],
    },
]

const Footer = () => (
    <VStack width="100%">
        <SimpleGrid
            columns={{ base: 1, sm: 2, md: 3 }}
            spacingY="2rem"
            width="100%"
            paddingBottom="2rem"
        >
            {
                COLUMNS.map(column => (
                    <Column key={column.title} {...column} />
                ))
            }
        </SimpleGrid>

        <LicenseAndAuthors />
    </VStack>
)

type ColumnProps = {
    title: string;
    links: FooterLink[];
}

type FooterLink = {
    title: string;
    href: string;
}

const Column = ({ title, links }: ColumnProps) => (
    <VStack alignItems="start">
        <Heading fontSize="1.5rem">{title}</Heading>
        {links.map(link => (
            <Link key={link.title} href={link.href} color="#aaaaaa" fontSize="1.25rem">{link.title}</Link>
        ))}
    </VStack>
)

const LicenseAndAuthors = () => (
    <Flex
        width="100%"
        paddingBottom="3rem"
        direction={{ base: "column", xl: "row" }}
    >
        <Text color="#555555">© 2022 BuzkaaClicker. Wszelkie prawa zastrzeżone</Text>
        <Spacer />
        <Text color="#555555">Wykonanie: makin, Buzkaa, netsu (design), nat (pomoc przy OpenBSD).</Text>
    </Flex>
)

export default Footer; 
