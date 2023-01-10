import { Flex, Heading, Link, Spacer, Text, VStack } from "@chakra-ui/react";
import { DISCORD_URL, EMAIL } from "../externalLinks";

const COLUMNS: ColumnProps[] = [
    // {
    //     title: "Store",
    //     links: [],
    //     text: `
    //         ul. św Jana 11/4
    //         Katowice 40-012
    //         NIP: 5030087161
    //         REGON: 522902017
    //         biuro@goxy.pl
    //     `,
    // },
    {
        title: "Regulations",
        links: [
            {
                title: "Privacy policy",
                href: "/privacy-policy",
            },
            {
                title: "Terms of Service",
                href: "/tos",
            },
        ],
    },
    {
        title: "Help",
        links: [
            {
                title: "Email",
                href: EMAIL,
            },
            {
                title: "Discord",
                href: DISCORD_URL,
            },
        ],
    },
    // {
    //     title: "Dla programisty",
    //     links: [
    //         {
    //             title: "Repozytorium Maven",
    //             href: MAVEN_REPO_URL,
    //         },
    //         {
    //             title: "Repozytorium Gitlab",
    //             href: GITLAB_URL,
    //         },
    //     ],
    // },
]

const Footer = () => (
    <VStack width="100%">
        <Flex
            width="100%"
            justifyContent="space-between"
            wrap="wrap"
            gap="2rem"
        >
            {
                COLUMNS.map(column => (
                    <Column key={column.title} {...column} />
                ))
            }
        </Flex>

        <LicenseAndAuthors />
    </VStack>
)

type ColumnProps = {
    title: string;
    links: FooterLink[];
    text?: string,
}

type FooterLink = {
    title: string;
    href: string;
}

const Column = ({ title, links, text }: ColumnProps) => (
    <VStack alignItems="start">
        <Heading fontSize="1.5rem" marginRight="1rem">{title}</Heading>
        {links.map(link => (
            <Link key={link.title} href={link.href} color="#FFFFFF" fontSize="1.25rem" isExternal>{link.title}</Link>
        ))}

        {text && <Text paddingBottom="1rem">
            {text.split("\n").map((line, index) => <Text key={index}>{line}</Text>)}
        </Text>}
    </VStack>
)

const LicenseAndAuthors = () => (
    <Flex width="100%" direction="column" paddingBottom="3rem">
        <Flex
            width="100%"
            direction={{ base: "column", xl: "row" }}
            gap="0.2rem"
        >
            {/* <Text color="#555555">© 2022 Goxy. Wszelkie prawa zastrzeżone</Text> */}
            <Spacer />
            <Text color="#555555">
                Website made by:{" "}
                <Link color="purple" href="https://pixelsmp.pl/" isExternal>netsu</Link> (design),{" "}
                <Link color="purple" href="https://www.makin.cc/" isExternal>www_makin_cc</Link> (code),{" "}
                <Link color="purple" href="https://github.com/wajwuz" isExternal>wajwuz</Link> (current edit)
            </Text>
        </Flex>
    </Flex>
)

export default Footer; 
