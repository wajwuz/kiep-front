import { HamburgerIcon } from "@chakra-ui/icons";
import {
    Box, Button, ButtonProps, Center, Flex, IconButton, LayoutProps, Link,
    LinkProps,
    Menu, MenuButton, MenuItem, MenuList, Spacer,
} from "@chakra-ui/react";
import { DOCS_URL, DASHBOARD_URL } from "../externalLinks";

type NavItem = {
    title: string;
    href?: string;
    layoutProps?: LayoutProps;
}

const NAV_ITEMS: Array<NavItem> = [
    {
        title: "Zalety",
        href: "/#zalets",
    },
    {
        title: "Funkcje",
        href: "/#features",
    },
    {
        title: "Cennik",
        href: "/#plans",
    },
]


const NavBar = () => (
    <Center>
        <Box width="70%" maxWidth="77.5rem" height="8rem" padding="4rem 0rem 4rem 0rem" zIndex="100">
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
                key={item.title}
                fontWeight="600"
                color="#000"
                marginLeft="3.625rem"
                textTransform="uppercase"
                href={item.href}
            >
                {item.title}
            </Link>
        ))}

        <Spacer />

        <Important />
    </Flex>
)

const MobileNavBar = () => (
    <Box display={{ base: "flex", '2xl': "none" }} alignItems="center">
        <Menu>
            <MenuButton
                width="2.5rem"
                as={IconButton}
                aria-label='Nawigacja'
                icon={<HamburgerIcon />}
                variant='ghost'
            />
            <MenuList borderWidth="0">
                {NAV_ITEMS.map(item => (<MobileNavBarItem key={item.title} {...item} />))}

                <MobileNavBarItem display={{ base: "flex", md: "none" }} title="Dokumentacja"
                    href={DOCS_URL} />

                <MobileNavBarItem display={{ base: "flex", md: "none" }} title="Przejdź do panelu"
                    href={DASHBOARD_URL} />
            </MenuList>
        </Menu>

        <Logo
            marginLeft={{ base: "0", md: "1.5rem" }}
            marginRight={{ base: "2.5rem", md: "0" }}
            textAlign="center"
            width={{ base: "100%", md: "fit-content" }} />

        <Spacer />

        <Important display={{ base: "none", md: "flex" }} />
    </Box>
)

const MobileNavBarItem = (props: NavItem & LayoutProps) => (
    <Link href={props.href} {...props}>
        <MenuItem key={props.title}>
            {props.title}
        </MenuItem>
    </Link>
)

const Logo = (props: LinkProps) => (
    <Link
        width="11rem"
        fontWeight="600"
        color="#000"
        href="/"

        isTruncated
        {...props}
    >
        GOXY
    </Link>
)

const Important = (props: ButtonProps) => (
    <>
        <Docs {...props} />
        <Panel {...props} />
    </>
);

const Docs = (props: ButtonProps) => (
    <Button as="a" href={DASHBOARD_URL} variant="ghost" marginLeft="3rem" {...props}>
        Dokumentacja
    </Button>
)

const Panel = (props: ButtonProps) => (
    <Button as="a" href={DASHBOARD_URL} colorScheme="pink" marginLeft="3rem" {...props}>
        Panel
    </Button>
)

export default NavBar;
