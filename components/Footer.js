import { Box, Text, Stack, Link, HStack } from '@chakra-ui/react';

export default function Footer() {
  return (
    <Box bg="gray.100" color="gray.600" py={8} px={4} mt={10}>
      <Stack direction={{ base: 'column', md: 'row' }} justifyContent="space-between" alignItems="center" maxW="6xl" mx="auto">
        <Text fontSize="sm">© 2025 Psychology Consultant. All rights reserved.</Text>
        <HStack spacing={4}>
          <Link href="https://facebook.com" isExternal>Facebook</Link>
          <Link href="https://twitter.com" isExternal>Twitter</Link>
          <Link href="https://linkedin.com" isExternal>LinkedIn</Link>
        </HStack>
      </Stack>
    </Box>
  );
}
