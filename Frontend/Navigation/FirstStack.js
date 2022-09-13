import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // **
import LoginScreen from '../Authentication/Login/LoginScreen';
import RegisterScreen from '../Authentication/Register/RegisterScreen';
import Logout from '../Authentication/LogOut/Logout';
import BookingScreen from '../Screens/BookingScreen';
import More from '../Screens/User/More'

const Stack = createNativeStackNavigator()

const FirstStack = () => {

  return (
      <Stack.Navigator initialRouteName="Discover"> 
        {/* <Stack.Screen name="Booking" component={BookingScreen} /> */}
        {/* <Stack.Screen name="More" component={More} /> */}
        <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default FirstStack;