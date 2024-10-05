import React, { useState, useEffect, useContext } from 'react';
import { ChakraProvider, Box, useDisclosure } from '@chakra-ui/react';
import Hero from './components/Hero';
import Services from './components/Services';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import {
  themes, getThemeByName
} from './theme';
import Gallery from './components/Gallery';
import BacktickMenu from './components/BacktickMenu'; // You'll need to create this component

const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentTheme, setCurrentTheme] = useState('default');

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === '`') {
        if (isOpen) {
          onClose();
        } else {
          onOpen();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onOpen, onClose]);

  const handleThemeChange = (newTheme) => {
    setCurrentTheme(newTheme.toLowerCase());
  };

  return (
    <ChakraProvider theme={getThemeByName(currentTheme)}>
      <Box>
        <Hero />
        <Services />
        <Gallery />
        <FAQ />
        <Footer />
        <BacktickMenu
          isOpen={isOpen}
          onClose={onClose}
          currentTheme={currentTheme}
          onThemeChange={handleThemeChange}
        />
      </Box>
    </ChakraProvider>
  );
};

export default App;