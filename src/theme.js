import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'gray.100',
      },
    },
  },
  colors: {
    brand: {
      100: '#E6F2FF',
      500: '#3182CE',
      900: '#1A365D',
    },
  },
});

export default theme;