import { useState } from 'react';
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  FormErrorMessage,
  VStack,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const [submitError, setSubmitError] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState('');

  async function onSubmit(data) {
    setSubmitError('');
    setSubmitSuccess('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'Failed to send message');
      }

      setSubmitSuccess('Message sent successfully! We will get back to you soon.');
      reset();
    } catch (error) {
      setSubmitError(error.message);
    }
  }

  return (
    <Box maxW="600px" mx="auto" py={10} px={6}>
      <Heading mb={6} textAlign="center" color="teal.600">
        Contact Us
      </Heading>

      {submitError && (
        <Alert status="error" mb={6}>
          <AlertIcon />
          {submitError}
        </Alert>
      )}

      {submitSuccess && (
        <Alert status="success" mb={6}>
          <AlertIcon />
          {submitSuccess}
        </Alert>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={4} align="stretch">
          {/* Full Name */}
          <FormControl isInvalid={errors.name} isRequired>
            <FormLabel>Full Name</FormLabel>
            <Input
              type="text"
              placeholder="Your full name"
              {...register('name', { required: 'Full name is required' })}
            />
            <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
          </FormControl>

          {/* Email */}
          <FormControl isInvalid={errors.email} isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="your.email@example.com"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value:
                    /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: 'Invalid email address',
                },
              })}
            />
            <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
          </FormControl>

          {/* Phone Number */}
          <FormControl isInvalid={errors.phone}>
            <FormLabel>Phone Number</FormLabel>
            <Input
              type="tel"
              placeholder="Optional phone number"
              {...register('phone')}
            />
            <FormErrorMessage>{errors.phone && errors.phone.message}</FormErrorMessage>
          </FormControl>

          {/* Subject */}
          <FormControl>
            <FormLabel>Subject</FormLabel>
            <Input
              type="text"
              placeholder="Subject (optional)"
              {...register('subject')}
            />
          </FormControl>

          {/* Message */}
          <FormControl isInvalid={errors.message} isRequired>
            <FormLabel>Message</FormLabel>
            <Textarea
              placeholder="Write your message here"
              rows={6}
              {...register('message', { required: 'Message is required' })}
            />
            <FormErrorMessage>{errors.message && errors.message.message}</FormErrorMessage>
          </FormControl>

          <Button
            colorScheme="teal"
            size="lg"
            type="submit"
            isLoading={isSubmitting}
          >
            Send Message
          </Button>
        </VStack>
      </form>
    </Box>
  );
}
