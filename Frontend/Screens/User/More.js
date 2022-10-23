import { View, Text, Button, StyleSheet, onPress, Pressable} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Favorite';
import { useNavigation} from '@react-navigation/native';
import { useRoute} from '@react-navigation/native';
import Favorite from './Favorite';
import Account from './Account'; 
function More() {
    
    const navigation = useNavigation();

    const [option, setOption] = useState([
        {name: 'Account', id: 1},
        {name: 'Reservation', id: 2},
        {name: 'Help center', id: 3},
    ]);

    const user = {
        fullName: 'Sameul G',
        email: '@example.com',
    }
        
    // Each click event have its own screen it depand on what you click, by default there is no screen displayed.
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
                setScreen(helpCenter())
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

    const helpCenter = () => {
        
        return (
            <View style={{backgroundColor: 'orange', height: '100%', width: '100%'}}>
                <Pressable onPress={() => setScreen(null)}> 
                <Text>back</Text> 
                </Pressable>

            </View>
        )
    }

    // Reservations screen
    // Storing the api data in the setData state
    const [data, setData] = useState([{}]);
    const [thereIsData, setThereIsData] = useState(data);
    
    function noReservations() {
        return  (
        <View style={{backgroundColor: 'orange', height: '100%', width: '100%'}}>
            <Pressable onPress={() => setScreen(null)}> 
                <Text>Back</Text> 
            </Pressable>
            <View>
                <Text style={{textAlign: 'center', marginTop: 50}}>No reservations</Text>
            </View>
        </View>
        ) 
    }
    
    // We get the reservation list from the back-end api
    const Reservation = () => {
        axios.get('http:/10.33.2.46:5001/api/reservation')
        .then((res) => {
            console.log(res.data)
            setData(res.data);
        })

    // It will return reservations otherwise noReservations function method
    if(thereIsData) {
        return (
            <View style={{backgroundColor: 'orange', height: '100%', width: '100%'}}>
                <Pressable onPress={() => setScreen(null)}> 
                    <Text>Back</Text> 
                </Pressable>
                <View style={styles.resContainer}>
                {
                    data.map((data) => {
                        return (
                        <View key={data.id} style={styles.resBox}>
                            <Pressable>
                                <Text> {data.resturantName}</Text>
                                <Text> {data.dateTime}</Text>
                                <Text> {data.arivalTime}</Text>
                                {/* <Text> {data.partySize}</Text> */}
                            </Pressable>
                        </View>
                        )
                    })
                }
                </View>
            </View>
        ) 
    } else {
        return (
            noReservations()
        )
    }
}

    // Main screen returns ...
    if(!screen) {
         return (
        <View style={styles.screen}>
            <Text style={styles.textHeader}>Here is your account info, and reservations.</Text>
            {option.map((option) => { 
                return (
                    <View style={styles.container} key={option.id}>
                        <Pressable onPress={() => handleOption(option.name)} style={styles.box}>
                            <Text style={styles.text} > {option.name}</Text>
                        </Pressable>
                    </View>
                ) 
            })}
        </View>
        );
    } else {
        return (
            screen
        )
    }
   }

const styles = StyleSheet.create({
    screen: {
        backgroundColor: '#177',
        height: '100%',
    },
    container: {
        alignItems: 'center', 
    },
    resContainer: {

    },
    box : {
        width : '85%',
        height : 30,
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 5,
    },
    resBox : {
        width : '85%',
        height : 80,
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
    }, 
    cards : {
        borderRadius: 5,
        margin: 5,
        backgroundColor: 'white',
        width: 90,
        height: 25,
        // flexDirection: 'row',
    },
})

export default More;
