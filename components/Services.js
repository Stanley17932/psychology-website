import { Box, SimpleGrid, Heading, Text, Stack, Icon } from '@chakra-ui/react';
import { FaUserFriends, FaRegSmile, FaHandsHelping } from 'react-icons/fa';

const services = [
  {
    icon: FaUserFriends,
    title: 'Individual Therapy',
    description: 'Personalized one-on-one therapy sessions to support your mental health journey.',
  },
  {
    icon: FaHandsHelping,
    title: 'Couples Counseling',
    description: 'Helping couples build stronger, healthier relationships.',
  },
  {
    icon: FaRegSmile,
    title: 'Group Workshops',
    description: 'Interactive group sessions for personal growth and community support.',
  },
];

export default function Services() {
  return (
    <Box maxW="6xl" mx="auto" py={10} px={6}>
      <Heading mb={8} textAlign="center" color="teal.600">Our Services</Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        {services.map((service) => (
          <Box key={service.title} p={6} bg="white" rounded="md" shadow="md" textAlign="center">
            <Icon as={service.icon} w={12} h={12} mb={4} color="teal.500" />
            <Heading size="md" mb={2}>{service.title}</Heading>
            <Text color="gray.600">{service.description}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}
