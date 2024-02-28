import React, { memo } from 'react';
import {
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  HStack,
  Center,
} from 'native-base';
import { Dimensions } from 'react-native';
const { height } = Dimensions.get('window');

const Login = ({ navigation }: any) => {
  return (
    <HStack backgroundColor={'#e2e2e2'}>
      <Center flex={1} w="100%" h={'100%'}>
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
            fontWeight="600"
            color="coolGray.800"
            _dark={{
              color: 'warmGray.50',
            }}>
            Welcome
          </Heading>
          <Heading
            mt="1"
            _dark={{
              color: 'warmGray.200',
            }}
            color="coolGray.600"
            fontWeight="medium"
            size="xs">
            Sign in to continue!
          </Heading>

          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label>Email ID</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl>
              <FormControl.Label>Password</FormControl.Label>
              <Input type="password" />
              <Link
                _text={{
                  fontSize: 'xs',
                  fontWeight: '500',
                  color: 'indigo.500',
                }}
                alignSelf="flex-end"
                mt="1">
                Forget Password?
              </Link>
            </FormControl>
            <Button mt="2" colorScheme="rose">
              Sign in
            </Button>
            <HStack mt="6" justifyContent="center">
              <Text
                fontSize="sm"
                color="coolGray.600"
                _dark={{
                  color: 'warmGray.200',
                }}>
                I'm a new user.{' '}
              </Text>
              <Link
                _text={{
                  color: 'indigo.500',
                  fontWeight: 'medium',
                  fontSize: 'sm',
                }}
                // href="signup"
                onPress={() => navigation.navigate('SignUp')}>
                Sign Up
              </Link>
            </HStack>
          </VStack>
        </Box>
      </Center>
    </HStack>
  );
};

export default memo(Login);
