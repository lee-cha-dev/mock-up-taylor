import React from 'react';
import { Box, Heading, Text, Button } from '@chakra-ui/react';

const Hero = () => (
  <Box
    bg="brand.500"
    color="white"
    p={8}
    textAlign="center"
    position="relative"
    _before={{
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: 'linear-gradient(45deg, rgba(0,0,0,0.1) 25%, transparent 25%, transparent 50%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.1) 75%, transparent 75%, transparent)',
      backgroundSize: '50px 50px',
      transform: 'skewY(-5deg)',
      transformOrigin: 'top left',
    }}
  >
    <Box position="relative" zIndex={1}>
      <Heading as="h1" size="2xl" mb={4} textShadow="2px 2px 4px rgba(0,0,0,0.5)">
        BuildRight Home Improvements
      </Heading>
      <Text fontSize="xl" mb={6}>Transforming Houses into Dream Homes</Text>
      <Button colorScheme="white" variant="outline" size="lg">
        Contact Us: 555-BUILD-IT
      </Button>
    </Box>
  </Box>
);

export default Hero;