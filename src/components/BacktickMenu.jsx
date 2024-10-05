import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  VStack, HStack,
} from '@chakra-ui/react';

const BacktickMenu = ({ isOpen, onClose, currentTheme, onThemeChange }) => {
  const setTheme = (event) => {
    const newTheme = event.target.id;
    onThemeChange(newTheme);
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Theme Menu</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={4}>
            <HStack spacing={2} width="100%">
              <Button
                id="Default"
                onClick={setTheme}
                colorScheme="blue"
                flex={1}
                variant={currentTheme === 'default' ? 'solid' : 'outline'}
              >
                Default
              </Button>
              <Button
                id="Forest"
                onClick={setTheme}
                colorScheme="green"
                flex={1}
                variant={currentTheme === 'forest' ? 'solid' : 'outline'}
              >
                Forest
              </Button>
            </HStack>
            <HStack spacing={2} width="100%">
              <Button
                id="Lavender"
                onClick={setTheme}
                colorScheme="purple"
                flex={1}
                variant={currentTheme === 'lavender' ? 'solid' : 'outline'}
              >
                Lavender
              </Button>
              <Button
                id="Ocean"
                onClick={setTheme}
                colorScheme="cyan"
                flex={1}
                variant={currentTheme === 'ocean' ? 'solid' : 'outline'}
              >
                Ocean
              </Button>
            </HStack>
            <HStack spacing={2} width="100%">
              <Button
                id="Sunset"
                onClick={setTheme}
                colorScheme="orange"
                flex={1}
                variant={currentTheme === 'sunset' ? 'solid' : 'outline'}
              >
                Sunset
              </Button>
              <Button
                id="Earthy"
                onClick={setTheme}
                colorScheme="yellow"
                flex={1}
                variant={currentTheme === 'earthy' ? 'solid' : 'outline'}
              >
                Earthy
              </Button>
            </HStack>
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="red" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default BacktickMenu;