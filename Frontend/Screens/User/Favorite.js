import { View, Text, Button } from 'react-native';


function Favorite({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>My Favorite</Text>
            <Button onPress={() => navigation.goBack()} title="Go back home" />
        </View>
        );
    }

export default Favorite;