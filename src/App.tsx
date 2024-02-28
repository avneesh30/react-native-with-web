import React from 'react';
import {
  NativeBaseProvider,
  extendTheme,
  Box,
  StatusBar,
  Center,
} from 'native-base';
import Login from './main/Login';
import Signup from './main/Signup';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const linking = {
  prefixes: ['http://localhost:3000/'],
  config: {
    screens: {
      Login: '/login',
      SignUp: '/signUp',
    },
  },
};

function App() {
  const theme = extendTheme({
    components: {
      Button: {
        // Can simply pass default props to change default behaviour of components.
        baseStyle: {
          rounded: 'md',
        },
        defaultProps: {
          colorScheme: 'red',
        },
      },
    },
  });
  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar
        animated={true}
        backgroundColor="#333"
        barStyle={'light-content'}
      />
      <NavigationContainer linking={linking}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={Signup} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
export default App;
