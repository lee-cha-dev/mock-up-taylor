import { extendTheme } from '@chakra-ui/react';

const createTheme = (colors) => {
  return extendTheme({
    colors: {
      brand: {
        primary: colors.primary,
        secondary: colors.secondary,
        tertiary: colors.tertiary,
      },
    },
    styles: {
      global: (props) => ({
        body: {
          bg: colors.bodyBg,
        },
      }),
    },
    config: {
      initialColorMode: 'light',
      useSystemColorMode: false,
    },
  });
};

export default createTheme;