import { View, Text, Button, StyleSheet } from 'react-native';


function Dashboard({ navigation }) {
    return (
        <View style={styles.Dashboard}>
            <Button onPress={() => navigation.goBack()} title="Go back home" />
        </View>
        );
    }


    
const styles = StyleSheet.create({ 
    Dashboard : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',      
        backgroundColor: 'red',
        }
      })
export default Dashboard;