import { View, Text, Button } from 'react-native';


function ReservationList({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Reservationnnn Screens</Text>
            <Button onPress={() => navigation.goBack()} title="Go back home" />
        </View>
        );
    }

export default ReservationList;