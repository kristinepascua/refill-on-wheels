import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/customer/WelcomeScreen';
import LoginScreen from '../screens/customer/LoginScreen';
import RegisterScreen from '../screens/customer/RegisterScreen';
import OrderScreen from '../screens/customer/RefillNowScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Welcome"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#133e87',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontFamily: 'Cinzel-Regular',
          },
        }}
      >
        <Stack.Screen 
          name="Welcome" 
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Login" 
          component={LoginScreen}
          options={{ title: 'Log In' }}
        />
        <Stack.Screen 
          name="Register" 
          component={RegisterScreen}
          options={{ title: 'Sign Up' }}
        />
        <Stack.Screen 
          name="Order" 
          component={OrderScreen}
          options={{ title: 'Order Water' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;