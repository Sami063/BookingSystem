import { View, Text, Button, StyleSheet } from 'react-native';


function Browse({ navigation }) {
    return (
        <View style={styles.screen}>
            <Text>Browse screen</Text>
            <Text>
                User can search resturant from a list of resturant (db)
            </Text>
            <Text>Posible to book a table here, in the browse screen</Text>
            <Text> They may use filter as an option</Text>
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