import { View, Text, Button, StyleSheet, onPress, Pressable } from 'react-native';
import React, {useState} from 'react';
import './Favorite';
<<<<<<< Updated upstream


function More({ navigation }) {
=======
import { useNavigation} from '@react-navigation/native';
import { useRoute} from '@react-navigation/native';
import Favorite from './Favorite';
import Account from './Account'; 
function More() {
    
    const navigation = useNavigation();
>>>>>>> Stashed changes

    const [option, setOption] = useState([
        {name: 'Account', id: 1},
        {name: 'Reservation', id: 2},
        {name: 'Help center', id: 3},
    ]);

<<<<<<< Updated upstream
    return (
=======
    const user = {
        fullName: 'Sameul G',
        email: '@example.com',
    }
        
    

    const [screen, setScreen] = useState(null)
    function handleOption(name) {
        switch (name) {
            case 'Account':
                setScreen(Account())
                break;
            case 'Reservation':
                setScreen(Reservation())
                break;
            case 'Help center':
                setScreen(HelpCenter())
                break;
        }  

    }

    const Account = () => {
        return (
            <View style={{ height: '100%', width: '100%', backgroundColor: 'green' }}>
                <Pressable onPress={() => setScreen(null)}>
                    <Text>Go back </Text>
                </Pressable>
                <View style={styles.container}>
                        <Pressable style={styles.box}>
                            <Text>Full name: {user.fullName}</Text>
                        </Pressable>
                        <Pressable style={styles.box}>
                            <Text>Email address: {user.email}</Text>
                        </Pressable>
                        <Pressable style={styles.box}>
                            <Text>Tlf: 45010101</Text>
                        </Pressable>
                    </View>
            </View>
        )
    }

    const Reservation = () => {

        return (
            <View style={styles.screen}>
            <Text style={styles.textHeader}>Here is your account infor, and reservations.</Text>
            
        </View>
        )
    }

    if(!screen) {
         return (
>>>>>>> Stashed changes
        <View style={styles.screen}>
            <Text style={styles.textHeader}>Here is your account infor, and reservations.</Text>
            {option.map((option) => { 
                return (
<<<<<<< Updated upstream
                    <View style={styles.container}>
                        <Pressable onPress={() => navigation.goBack()} style={styles.box}>
                            <Text style={styles.text} Key={option.id}> {option.name}</Text>
                        </Pressable>
                    </View>
=======
                    null
                    // <View style={styles.container}>
                    //     <Pressable onPress={() => handleOption(option.name)} style={styles.box}>
                    //         <Text style={styles.text} Key={option.id}> {option.name}</Text>
                    //     </Pressable>
                    // </View>
>>>>>>> Stashed changes
                )
            })}
        </View>
        );
<<<<<<< Updated upstream
    }
=======
    } else {
        return (
            screen
        )
    }
   }
>>>>>>> Stashed changes

const styles = StyleSheet.create({
    screen: {
        backgroundColor: '#177',
        height: '100%',
    },
    container: {
        alignItems: 'center',
    },
    box : {
        width : '85%',
        height : 30,
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 5,
    },
    text : {
        fontSize: 20,
        textAlign : 'center',
    },
    textHeader : {
        fontSize: 20,
        textAlign : 'center',
        marginTop: 30,
        marginBottom: 60,
        color: 'white',
    }
})

export default More;