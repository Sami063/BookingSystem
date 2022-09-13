import { View, Text, Button, StyleSheet } from 'react-native';
<<<<<<< Updated upstream


function Browse({ navigation }) {
    return (
        <View style={styles.screen}>
            <Text>Browse screen</Text>
            <Text>
                User can search resturant from a list of resturant (db)
            </Text>
            <Text>Posible to book a table here, in the browse screen</Text>
            <Text> They may use filter as an option</Text>
=======
import { useNavigation, useRoute} from '@react-navigation/native';

function Browse() {
    
    const route = useRoute();

    return (
        <View style={styles.screen}>
            <Text>name: {route.params.fullName}</Text>
            <Text>email: {route.params.email}</Text>
>>>>>>> Stashed changes
        </View>
        );
    }


    
const styles = StyleSheet.create({ 
    screen : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',      
        backgroundColor: 'white',
        }
      })


export default Browse;