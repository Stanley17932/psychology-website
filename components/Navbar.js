import {
  Box,
  Flex,
  Link,
  Stack,
  useDisclosure,
  Collapse,
  IconButton,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';

// NavLink component - uses Next.js Link and Chakra Link correctly
const NavLink = ({ href, children }) => (
  <NextLink href={href} passHref legacyBehavior>
    <Link
      px={3}
      py={2}
      rounded={'md'}
      _hover={{ textDecoration: 'none', bg: 'teal.100' }}
    >
      {children}
    </Link>
  </NextLink>
);

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box bg="teal.500" px={4} color="white" boxShadow="md">
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        {/* Logo with NextLink + Chakra Link */}
        <NextLink href="/" passHref legacyBehavior>
          <Link
            fontWeight="bold"
            fontSize="xl"
            letterSpacing="wide"
            cursor="pointer"
            _hover={{ textDecoration: 'none', color: 'teal.200' }}
          >
            PsychConsult
          </Link>
        </NextLink>

        <Flex alignItems={'center'}>
          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <Stack direction={'row'} spacing={4}>
              <NavLink href="/">Home</NavLink>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/services">Services</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </Stack>
          </Flex>

          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={onToggle}
            ml={2}
            color="teal.500"
            bg="white"
            _hover={{ bg: 'teal.100' }}
          />
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <Stack bg="teal.400" p={4} display={{ md: 'none' }}>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/services">Services</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </Stack>
      </Collapse>
    </Box>
  );
}
