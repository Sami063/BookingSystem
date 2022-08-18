import { View, Text, Button, StyleSheet, onPress, Pressable } from 'react-native';
import React, {useState} from 'react';
import './Favorite';


function More({ navigation }) {

    const [option, setOption] = useState([
        {name: 'Account', id: 1},
        {name: 'Reservation', id: 2},
        {name: 'Help center', id: 3},
    ]);

    return (
        <View style={styles.screen}>
            <Text style={styles.textHeader}>Here is your account infor, and reservations.</Text>
            {option.map((option) => { 
                return (
                    <View style={styles.container}>
                        <Pressable onPress={() => navigation.goBack()} style={styles.box}>
                            <Text style={styles.text} Key={option.id}> {option.name}</Text>
                        </Pressable>
                    </View>
                )
            })}
        </View>
        );
    }

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