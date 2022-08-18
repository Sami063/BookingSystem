import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import LoginForm from './Authentication/Login/LoginForm';
import RegisterForm from './Authentication/Register/RegisterForm';
import Discover from './Screens/Discover';
import Browse from './Screens/User/Browse';
import Favorite from './Screens/User/Favorite';
import More from './Screens/User/More';


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Discover">
        <Drawer.Screen name="Discover" component={Discover} />
        <Drawer.Screen name="Browse" component={Browse} />
        <Drawer.Screen name="Favorite" component={Favorite} />
        <Drawer.Screen name="More" component={More} />
        <Drawer.Screen name="Login" component={RegisterForm} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
