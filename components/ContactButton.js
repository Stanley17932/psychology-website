import { Button } from '@chakra-ui/react';
import NextLink from 'next/link';

export default function ContactButton() {
  return (
    <NextLink href="/contact" passHref legacyBehavior>
      <Button
        as="a"
        colorScheme="teal"
        size="lg"
        _hover={{ bg: 'teal.600' }}
        fontWeight="bold"
      >
        Contact Us
      </Button>
    </NextLink>
  );
}
