import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // **
import LoginScreen from '../Authentication/Login/LoginScreen';
import RegisterScreen from '../Authentication/Register/RegisterScreen';
import HomeScreen from '../Home/HomeScreen';
import Discover from '../Screens/Discover';
import Browse from '../Screens/User/Browse';
import Favorite from '../Screens/User/Favorite';
import More from '../Screens/User/More';
import BookingScreen from '../Screens/BookingScreen';
import Logout from '../Authentication/LogOut/Logout';

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator();

const SecondStack = () => {

  return (
      <Drawer.Navigator initialRouteName="More" useLegacyImplementation={true}> 
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Discover" component={Discover} />
        <Drawer.Screen name="Browse" component={Browse} />
        <Drawer.Screen name="Booking" component={BookingScreen} />
        <Drawer.Screen name="More" component={More} />
        <Drawer.Screen name="Log out" component={Logout} />
    </Drawer.Navigator>
  );
};

export default SecondStack;