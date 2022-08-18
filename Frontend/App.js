import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import LoginForm from './Authentication/Login/LoginForm';
import RegisterForm from './Authentication/Register/RegisterForm';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Login" component={LoginForm} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}