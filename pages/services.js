import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Icon,
} from '@chakra-ui/react';
import { FaUserFriends, FaRegSmile, FaHandsHelping, FaBrain, FaComments, FaHeart } from 'react-icons/fa';

const services = [
  {
    icon: FaUserFriends,
    title: 'Individual Therapy',
    description:
      'Personalized one-on-one therapy sessions designed to support your mental health journey.',
  },
  {
    icon: FaHandsHelping,
    title: 'Couples Counseling',
    description:
      'Helping couples build stronger, healthier relationships through guided counseling.',
  },
  {
    icon: FaRegSmile,
    title: 'Group Workshops',
    description:
      'Interactive group sessions aimed at personal growth and community support.',
  },
  {
    icon: FaBrain,
    title: 'Cognitive Behavioral Therapy (CBT)',
    description:
      'Evidence-based therapy to help you understand and change unhelpful thought patterns.',
  },
  {
    icon: FaComments,
    title: 'Psychological Assessments',
    description:
      'Comprehensive evaluations to better understand your psychological well-being and needs.',
  },
  {
    icon: FaHeart,
    title: 'Relationship Counseling',
    description:
      'Guidance and support for couples and individuals seeking to improve their personal relationships and communication skills.',
  },
];

export default function Services() {
  return (
    <Box maxW="7xl" mx="auto" px={6} py={12}>
      <Heading as="h1" size="2xl" mb={10} textAlign="center" color="teal.700">
        Our Services
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
        {services.map(({ icon, title, description }) => (
          <VStack
            key={title}
            p={6}
            bg="white"
            rounded="md"
            shadow="md"
            spacing={4}
            align="start"
            textAlign="left"
          >
            <Icon as={icon} w={10} h={10} color="teal.500" />
            <Heading size="md" color="teal.700">
              {title}
            </Heading>
            <Text color="gray.600">{description}</Text>
          </VStack>
        ))}
      </SimpleGrid>
    </Box>
  );
}
