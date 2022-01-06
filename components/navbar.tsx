import { Box, Button, ButtonProps, Center, Flex, Link, SlideFade, Spacer, useDisclosure } from "@chakra-ui/react";

type NavItem = {
    title: string;
    href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
    {
        title: "Statystyki"
    },
    {
        title: "Zalety"
    },
    {
        title: "Funkcje"
    },
    {
        title: "Pobierz"
    },
]


const NavBar = () => (
    <Center>
        <Box width="70%" maxWidth="77.5rem" height="8rem" padding="4rem 0rem 4rem 0rem">
            <DesktopNavBar />

            <MobileNavBar />
        </Box>
    </Center>
)

const DesktopNavBar = () => (
    <Flex display={{ base: "none", '2xl': "flex" }} alignItems="center">
        <Logo />

        {NAV_ITEMS.map(item => (
            <Link
                fontWeight="600"
                color="#AAAAAA"
                marginLeft="3.625rem"
                textTransform="uppercase"
            >
                {item.title}
            </Link>
        ))}

        <Spacer />

        <LoginWithDiscord />
    </Flex>
)

const MobileNavBar = () => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <>
            <Flex display={{ base: "flex", '2xl': "none" }} alignItems="center">
                <Button onClick={onToggle}>=</Button>
                <Logo />

                <Spacer />

                <LoginWithDiscord display={{ base: "none", md: "flex" }} />
            </Flex>

            <SlideFade in={isOpen} offsetY='20px'>
            </SlideFade>
        </>
    )
}

const Logo = () => (
    <Link
        width="11rem"
        fontWeight="600"

        isTruncated
    >
        BUZKAACLICKAC
    </Link>
)

const LoginWithDiscord = (props: ButtonProps) => (
    <Button variant="discordLogin" marginLeft="3rem" {...props}>
        ZALOGUJ SIĘ PRZEZ DISCORD
    </Button>
)

export default NavBar;
