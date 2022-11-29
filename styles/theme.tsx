import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react'

const theme = extendTheme(
  withDefaultColorScheme({ colorScheme: 'pink' }),
  {
    initialColorMode: 'light',
    useSystemColorMode: false,
    colors: {
      pink: {
        500: "#C684D0",
        600: "#9b67a3",
      },
      black: {
        500: "#000"
      },
    },
    styles: {
      global: {
        body: {
          bg: "#FEFBFF",
          color: "#2B2E33",
        },
      },
    },
    components: {
      Tabs: {
        baseStyle: {
          tab: {
            fontWeight: '800',
          },
        },
      },
    },
  },
);

export default theme;
