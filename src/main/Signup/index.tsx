import React, { memo } from 'react';
import {
  Box,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
  Center,
  HStack,
} from 'native-base';
import { Dimensions } from 'react-native';
const { height } = Dimensions.get('window');

const Signup = () => {
  return (
    <HStack backgroundColor={'#e2e2e2'}>
      <Center w="100%" h={'100%'}>
        <Box
          safeArea
          p="2"
          py="8"
          width={['72', '72', '320']}
          maxW="container"
          height={height}
          alignContent={'center'}
          justifyContent={'center'}>
          <Heading
            size="lg"
            color="coolGray.800"
            _dark={{
              color: 'warmGray.50',
            }}
            fontWeight="semibold">
            Welcome
          </Heading>
          <Heading
            mt="1"
            color="coolGray.600"
            _dark={{
              color: 'warmGray.200',
            }}
            fontWeight="medium"
            size="xs">
            Sign up to continue!
          </Heading>
          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label>Email</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl>
              <FormControl.Label>Password</FormControl.Label>
              <Input type="password" />
            </FormControl>
            <FormControl>
              <FormControl.Label>Confirm Password</FormControl.Label>
              <Input type="password" />
            </FormControl>
            <Button mt="2" colorScheme="rose">
              Sign up
            </Button>
          </VStack>
        </Box>
      </Center>
    </HStack>
  );
};

export default memo(Signup);
