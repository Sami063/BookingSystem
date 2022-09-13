import {createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../Authentication/Login/LoginScreen';
import RegisterScreen from '../Authentication/Register/RegisterScreen';
import {Button, View} from 'react-native'

const HomeStack = createStackNavigator();
const navigation = createStackNavigator();

const HomeStackScreen = (navigation) => {
  
  return (
    <View>
    <Button title='Home' onPress={() => navigation.push('LoginScreen')}/>
    </View>
  )
  }

  export default HomeStackScreen;