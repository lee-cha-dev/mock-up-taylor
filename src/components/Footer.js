import React from 'react';
import { Box, VStack, Heading, Link } from '@chakra-ui/react';

const Footer = () => (
  <Box bg="brand.900" color="white" py={8} px={4}>
    <VStack spacing={4} align="center">
      <Heading as="h2" size="md" mb={4}>
        Quick Links
      </Heading>
      {['About Us', 'Portfolio', 'Testimonials', 'Blog'].map((link) => (
        <Link key={link} href="#" fontWeight="bold" _hover={{ color: 'brand.100' }}>
          {link}
        </Link>
      ))}
    </VStack>
  </Box>
);

export default Footer;