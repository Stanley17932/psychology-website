import Hero from '../components/Hero';
import Services from '../components/Services';
import { Box, Center, Heading, Text } from '@chakra-ui/react';
import ContactButton from '../components/ContactButton';

export default function Home() {
  return (
    <>
      <Hero />
      
      <Services />
      
      {/* Contact Call-To-Action */}
      <Box bg="teal.50" py={16} px={6} mt={12} textAlign="center" rounded="md" maxW="4xl" mx="auto" boxShadow="md">
        <Heading size="lg" mb={4} color="teal.600">
          Ready to take the next step?
        </Heading>
        <Text fontSize="md" mb={6} color="gray.700">
          Reach out today and start your journey to wellness.
        </Text>
        <Center>
          <ContactButton />
        </Center>
      </Box>
    </>
  );
}
