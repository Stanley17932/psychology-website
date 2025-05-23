import { Box, Heading, Text, Button, Stack } from '@chakra-ui/react';
import NextLink from 'next/link';

export default function Hero() {
  return (
    <Box
      bg="teal.50"
      py={20}
      px={6}
      textAlign="center"
      maxW="4xl"
      mx="auto"
      rounded="md"
      boxShadow="md"
    >
      <Heading as="h1" size="2xl" mb={4} color="teal.700">
        Welcome to Your Path to Mental Wellness
      </Heading>
      <Text fontSize="xl" mb={8} color="gray.700">
        Professional psychology consulting services tailored to help you thrive.
      </Text>
      <Stack direction={{ base: 'column', sm: 'row' }} spacing={4} justifyContent="center">
        <NextLink href="/services" passHref>
          <Button colorScheme="teal" size="lg">
            Our Services
          </Button>
        </NextLink>
        <NextLink href="/contact" passHref>
          <Button variant="outline" colorScheme="teal" size="lg">
            Contact Us
          </Button>
        </NextLink>
      </Stack>
    </Box>
  );
}
