import { View, Text, Button } from 'react-native';


function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>My HomeScreen</Text>
            <Button title="Go back home" />
        </View>
        );
    }

export default HomeScreen;