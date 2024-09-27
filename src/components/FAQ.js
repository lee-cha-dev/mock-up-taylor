import React from 'react';
import { Box, Heading, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react';

const FAQ = () => (
  <Box py={16} px={8} bg="gray.50">
    <Heading as="h2" size="xl" mb={8} textAlign="center" color="brand.900">
      Frequently Asked Questions
    </Heading>
    <Accordion allowToggle maxWidth="800px" margin="auto">
      {[
        { q: "How long does a typical renovation take?", a: "Project duration varies, but most renovations take 4-8 weeks." },
        { q: "Do you provide free estimates?", a: "Yes, we offer free in-home consultations and estimates." },
        { q: "Are you licensed and insured?", a: "Absolutely! We're fully licensed, bonded, and insured for your peace of mind." },
      ].map((item, index) => (
        <AccordionItem key={index}>
          <h3>
            <AccordionButton _expanded={{ bg: 'brand.100', color: 'brand.900' }}>
              <Box flex="1" textAlign="left" fontWeight="bold">
                {item.q}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h3>
          <AccordionPanel pb={4}>
            {item.a}
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  </Box>
);

export default FAQ;