import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react'

const theme = extendTheme(
  withDefaultColorScheme({ colorScheme: 'gray' }),
  {
    initialColorMode: 'light',
    useSystemColorMode: false,
    colors: {
      pink: {
        50: "#fcedff",
        100: "#eac7f0",
        500: "#1E5F74",
        600: "#9b67a3",
        700: "#805587",
      },
      black: {
        500: "#000"
      },
    },
    styles: {
      global: {
        body: {
          bg: "#191A20",
          color: "#FFFFFF",
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
