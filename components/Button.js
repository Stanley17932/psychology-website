import { Button as ChakraButton } from '@chakra-ui/react';

export default function Button({ children, variant = 'solid', colorScheme = 'teal', ...props }) {
  return (
    <ChakraButton variant={variant} colorScheme={colorScheme} {...props}>
      {children}
    </ChakraButton>
  );
}
