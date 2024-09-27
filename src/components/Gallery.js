// File: src/components/Gallery.js
import React from 'react';
import { Box, Heading, SimpleGrid, Image } from '@chakra-ui/react';

const Gallery = () => {
  const images = [
    "https://d194ip2226q57d.cloudfront.net/images/Dream-Renovations_Monticello-Custom-Homes_Kitch.original.jpg",
    "https://magnoliahomeremodeling.com/cms/resources/media/2023/06/watchung-union-county-nj-kitchen-remodeling-with-new-appliances-and-cabinets.jpg",
    "https://tituscontracting.com/wp-content/uploads/2021/06/Old-new-Eagan-MN-remodel-scaled-1-1200x800.jpg"
  ];

  return (
    <Box py={16} px={8} bg="gray.100">
      <Heading as="h2" size="xl" mb={8} textAlign="center" color="brand.900">
        Our Recent Projects
      </Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={8}>
        {images.map((src, index) => (
          <Box
            key={index}
            borderRadius="lg"
            overflow="hidden"
            boxShadow="xl"
            transition="transform 0.3s"
            _hover={{ transform: 'scale(1.05)' }}
          >
            <Image
              src={src}
              alt={`Project ${index + 1}`}
              width="100%"
              height="300px"
              objectFit="cover"
            />
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Gallery;