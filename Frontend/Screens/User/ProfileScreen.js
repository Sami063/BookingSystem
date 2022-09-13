import { Button, View } from 'react-native';
import { useNavigation} from '@react-navigation/native';


const ProfileScreen = () => {
    const navigation = useNavigation();
    
    return (
    <View>
    <Button title='Login' onPress={() => navigation.navigate('Login')}/>
    </View>
  )
  }

  export default ProfileScreen;