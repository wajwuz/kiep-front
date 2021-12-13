import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    styles: {
        global: {
            body: {
                bg: "#151517",
                color: "white",
            },
        },
    },
    components: {
        Text: {
            variants: {
                "secondary": {
                    color: "#AAAAAA",
                }
            }
        },
        Button: {
            variants: {
                "primary": {
                    bg: "#339F30",
                    borderRadius: "0",
                    borderTop: "6px solid #FFFFFF1C",
                    borderBottom: "6px solid #0000001C",
                    boxShadow: "0px 4px 0px #0000001C",
                    _hover: {
                        bg: "#194f17",
                        color: "#AAA",
                        transform: "translateY(-0.1em)"
                    },
                    _focus: {
                        boxShadow: "0px 4px 0px #0000001C",
                    },
                }
            },
            defaultProps: {
                variant: "primary",
            },
        },
    }
});

export default theme;
