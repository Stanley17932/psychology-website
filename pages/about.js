import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Image,
  VStack,
  Link,
  Stack,
  Divider,
  HStack,
  Button,
} from '@chakra-ui/react';
import NextLink from 'next/link';

const teamMembers = [
  {
    name: 'John Smith',
    role: 'Lead Psychologist',
    image: '/images/team/Smith.png',
  },
  {
    name: 'Michael Johnson',
    role: 'Clinical Psychologist',
    image: '/images/team/Johnson.png',
  },
  {
    name: 'Sarah Williams',
    role: 'Therapist',
    image: '/images/team/Sarah.png',
  },
  {
    name: 'Emily Brown',
    role: 'Counselor',
    image: '/images/team/Emily.png',
  },
  {
    name: 'David Thompson',
    role: 'Psychiatrist',
    image: '/images/team/Thompson.png',
  },
];

const blogPosts = [
  {
    title: 'Managing Anxiety: Tips and Techniques',
    excerpt:
      'Discover effective strategies to manage anxiety and improve mental well-being...',
    href: '/blog/managing-anxiety',
  },
  {
    title: 'The Importance of Therapy in Mental Health',
    excerpt:
      'Learn how therapy can be a transformative tool for overcoming life challenges...',
    href: '/blog/importance-of-therapy',
  },
  {
    title: 'Building Healthy Relationships',
    excerpt:
      'Explore ways to cultivate and maintain meaningful relationships in your life...',
    href: '/blog/building-healthy-relationships',
  },
];

export default function About() {
  return (
    <Box maxW="7xl" mx="auto" px={6} py={12}>
      {/* Intro Section */}
      <VStack spacing={6} maxW="4xl" mx="auto" mb={16} textAlign="center">
        <Heading as="h1" size="2xl" color="teal.700">
          About Psychology Consultant
        </Heading>
        <Text fontSize="lg" color="gray.700">
          We are dedicated to providing professional psychological consulting
          services tailored to support your mental wellness journey. Our team of
          experienced psychologists and therapists is here to help you thrive.
        </Text>
      </VStack>

      <Divider mb={12} />

      {/* Team Section */}
      <Box mb={16}>
        <Heading as="h2" size="xl" mb={8} textAlign="center" color="teal.600">
          Meet Our Team
        </Heading>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={10} maxW="6xl" mx="auto">
          {teamMembers.map((member) => (
            <VStack key={member.name} spacing={4} align="center" textAlign="center">
              <Image
                borderRadius="full"
                boxSize="150px"
                src={member.image}
                alt={member.name}
                objectFit="cover"
                boxShadow="md"
              />
              <Heading size="md" color="teal.700">{member.name}</Heading>
              <Text color="gray.600">{member.role}</Text>
            </VStack>
          ))}
        </SimpleGrid>
      </Box>

      <Divider mb={12} />

      {/* Blog Preview Section */}
      <Box maxW="4xl" mx="auto">
        <Heading as="h2" size="xl" mb={8} textAlign="center" color="teal.600">
          From Our Blog
        </Heading>
        <Stack spacing={8}>
          {blogPosts.map((post) => (
            <Box key={post.title} p={6} bg="gray.50" rounded="md" boxShadow="sm">
              <Heading size="md" mb={2} color="teal.700">
                <NextLink href={post.href} passHref legacyBehavior>
                  <Link _hover={{ textDecoration: 'underline' }}>{post.title}</Link>
                </NextLink>
              </Heading>
              <Text color="gray.600">{post.excerpt}</Text>
              <HStack mt={4} justifyContent="flex-end">
                <NextLink href={post.href} passHref legacyBehavior>
                  <Button as="a" colorScheme="teal" size="sm">
                    Read More
                  </Button>
                </NextLink>
              </HStack>
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}
