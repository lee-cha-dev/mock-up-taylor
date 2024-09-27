import React from 'react';
import { Box, Heading, Text, SimpleGrid } from '@chakra-ui/react';

const ServiceCard = ({ title }) => (
  <Box
    bg="brand.100"
    p={6}
    borderRadius="md"
    boxShadow="lg"
    transition="transform 0.3s"
    _hover={{ transform: 'translateY(-5px)' }}
  >
    <Heading as="h3" size="lg" mb={4} color="brand.500">
      {title}
    </Heading>
    <Text>Professional {title.toLowerCase()} services tailored to your needs and budget.</Text>
  </Box>
);

const Services = () => (
  <Box py={16} px={8} bg="white">
    <Heading as="h2" size="xl" mb={8} textAlign="center" color="brand.900">
      Our Services
    </Heading>
    <SimpleGrid columns={[1, null, 3]} spacing={10}>
      {['Kitchen Remodeling', 'Bathroom Renovation', 'Home Extensions'].map((service) => (
        <ServiceCard key={service} title={service} />
      ))}
    </SimpleGrid>
  </Box>
);

export default Services;