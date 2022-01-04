import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    Heading: 'Inter',
    body: 'Inter',
  },
  fontWeights: {
    Heading: "800",
  },
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
          fontSize: { base: "1rem", lg: "1.25rem" },
        }
      }
    },
    Heading: {
      baseStyle: {
        fontWeight: "800",
      },
    },
    Button: {
      variants: {
        "primary": {
          bg: "#339F30",
          borderRadius: "0",
          borderTop: "6px solid #FFFFFF1C",
          borderBottom: "6px solid #0000001C",
          boxShadow: "0px 4px 0px #0000001C",
          fontWeight: "600",
          fontSize: "1.05rem",
          height: "2.938rem",
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
