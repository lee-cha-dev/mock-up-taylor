import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import Hero from './components/Hero';
import Services from './components/Services';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import theme from './theme';
import Gallery from './components/Gallery';


const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Hero />
        <Services />
        <Gallery />
        <FAQ />
        <Footer />
      </Box>
    </ChakraProvider>
  );
};

export default App;