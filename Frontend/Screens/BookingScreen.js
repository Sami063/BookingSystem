import { StyleSheet, Alert, Text, View, Pressable ,SafeAreaView, TextInput, onChangeText, TouchableOpacity } from 'react-native';
import { useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import CalendarPicker from 'react-native-calendar-picker';
import axios from 'axios';

const BookingScreen = () => {
    // buttons
    const [options, setOptions] = useState([
        {name: 'Calender', id: 1},
        {name: 'Time', id: 2},
        {name: 'Recipt', id: 3},
    ]);

    // Booking time
    const reservationTime = [
        {time: '12:00', id: 1},
        {time: '12:30', id: 2},
        {time: '13:00', id: 3},
        {time: '13:30', id: 4},
        {time: '14:00', id: 5},
        {time: '14:30', id: 6},

        {time: '15:00', id: 7},
        {time: '15:30', id: 8},
        {time: '16:00', id: 9},
        {time: '16:30', id: 10},
        {time: '17:00', id: 11},
        {time: '17:30', id: 12},
        {time: '18:00', id: 13},
        {time: '18:30', id: 14},
        {time: '19:00', id: 15},
    ]

    // User can click a button to select party size
    const party = [
        {size: '1', id: 1},
        {size: '2', id: 2},
        {size: '3', id: 3},
        {size: '4', id: 4},
        {size: '5', id: 5},
        {size: '6', id: 6},
    ]

    // Storing data for reservations, date and time and so on
    const [reservations, setReservations] = useState([]) // We wil push user reservation data into reservations
    const [resturantName, setResturantName] = useState('My Favorite Resturant')
    const [newTime, setNewTime] = useState()
    const [date, setDate] = useState()
    const [tableNumber, setTableNumber] = useState()
    const [partySize, setPartySize] = useState(5)
    





    // Start Of Calender
    const onDateChanged = (newDate) => {
        setDate(newDate.toString());
        console.log(newDate.toString());
        }

        // Calender & partySize
    const Calender = () => { 
        return (
            <View>
                <Text style={{marginBottom: 20, textAlign: 'center', marginTop: -25, color: 'white'}}>
                    How many person will you be with? 
                </Text>
                <View style={styles.partyContainer}>
                {
                    party.map((party) => {
                        return (
                            <View key={party.id}>
                                <Pressable onPress={() => handleParty(party.id, party.size)} style={styles.partySizeBtn}>
                                    <Text style={styles.partyText}>{party.size}</Text>
                                </Pressable>
                            </View>
                        )
                    })
                }
                </View>
                <CalendarPicker onDateChange={onDateChanged} />
            </View>
        )
    }
    // End Of Calender

    // Time function
    const handleTime = (id, time) => {
        switch(id) {
            case 1:
                setNewTime(time)
                break;
            case 2:
                setNewTime(time)
                break;
            case 3:
                setNewTime(time)
                break;
            case 4:
                setNewTime(time)
                break;
            case 5:
                setNewTime(time)
                break;
            default: alert('Not available')
        }
    }
    const bookingTime = () => {
        return (
            <View style={styles.timeContainer}>
                {
                    reservationTime.map((res) => {
                        return (
                            <View key={res.id}>
                                <Pressable onPress={() => handleTime(res.id, res.time)} style={styles.btnTime}>
                                    <Text  style={styles.timeText}>{res.time}</Text>
                                </Pressable>
                            </View>
                        )
                    })
                }
            </View>
        )
    }
 
    const Recipt = () => {
        return (
            <View style={{backgroundColor: 'white', margin: 20, borderRadius: 10 }}>
                <View style={{padding: 15}}>
                    <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 10}}>{resturantName}</Text>
                    <Text>Date: {date} </Text>
                    <Text>Arrival time: {newTime}</Text>
                    <Text>Number of Diners: {partySize} people</Text>
                    <Text></Text>
                    <Text> Reservation Code: #290</Text>
                </View>
            </View>
        )
    }

    // Each click event have an id, state will be changing based on the event id, 
    // Options
    const [name, setName] = useState('Continue')
    const handleChange = (id) => {
        if(id == 1) {
            setBooking(Calender())
            setStep(2)
            setName('Continue')
        } else if(id == 2) { 
            setBooking(bookingTime())
        } else {
            setBooking(Recipt())
        }
    }
    
    // Here is the state of the calender, time and recipt, by default the state have a Calender function method
    // !date, !newTime means if no time & date specified then will return null
    const [booking, setBooking] = useState(Calender)
    const [step, setStep] = useState(2)

    function handleNext() {
        if(!date) {
            null
            Alert.alert(
                'Please select a date'
                )
        } else if(step == 2) {
            setBooking(bookingTime()) 
            setStep(3)
        } else if(!newTime) {
            null
            Alert.alert('Please select a time')
        } else if (step == 3) {
            setBooking(Recipt())
            setName('Confirm reservation')
            setStep(4)
        } else if (step == 4) {
            sendToBackend()
            Alert.alert('Successfully confirmed')
            returnToDefault()
            
        }
    }
    // Will return things to default
    function returnToDefault() {
        setBooking(Calender())
        setStep(2)
        setName('Continue')
        setDate(null)
        setNewTime(null)
        setPartySize(null)
    }

    function sendToBackend () {
        axios.post("http://10.33.3.56:5001/api/Reservation/booking", {
            ResturantName: resturantName,
            DateTime: date,
            ArivalTime: newTime,
            PartySize: partySize,
        })
        .then(response => {
            console.log(response.data)
        })
        .catch(err => {
            console.log(err)
        })
        
    }
    
    // Main BookingScreen will return this
    return (
    <SafeAreaView>
        <View style={styles.bookingScreen}>
            {/* Buttons */}
        <View style={styles.buttons}>
            {options.map((option) => { 
                return (
                    <View key={option.name} style={styles.cardContainer}>
                        <Pressable onPress={() => handleChange(option.id)} style={styles.cards}>
                            <Text style={styles.text}> {option.name}</Text>
                        </Pressable>
                    </View>
                )
            })}
        </View> 
        {/* Screen body for calendar, time, recipt*/}
        <View>
            {/* on event change */}
            <View style={styles.ctr}>
            {
                // Will be rendering after each button click
                booking 
            }
            </View>
            <View>
                <TouchableOpacity onPress={ handleNext }  style={styles.btnContinue}>
                    <Text style={styles.continueTxt}>{name}</Text>
                </TouchableOpacity>
            </View>
        </View>
        </View>
    </SafeAreaView>
    )
}

// Styles 
const styles = StyleSheet.create({
    bookingScreen: {
        backgroundColor: '#004242',
        width: '100%', 
        height: '100%',
    },
    buttons: {
        flexDirection: 'row',
        marginTop: 30,
        justifyContent: 'center',
        justifyItems: 'center',
    },
    cardContainer: {
        // flexDirection: 'row',
    },
    cards : {
        borderRadius: 5,
        margin: 5,
        backgroundColor: 'white',
        width: 90,
        height: 25,
        // flexDirection: 'row',
    },
    text : {
        fontSize: 18,
        textAlign : 'center',
    },
    ctr: {
        marginTop: 30,
        height: 280,
    },
    btnContinue: {
        borderRadius: 5,
        marginTop: 30,
        backgroundColor: '#66FFFF',
        height: 30,
        width: '90%',
        marginLeft: 15, marginTop: 70,
    },
    continueTxt: {
        fontSize: 20,
        textAlign : 'center',
    },
    
    // bookingTime, style for time body
    timeContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '90%',
        marginLeft: 25,
    },
    btnTime: {
        borderRadius: 5,
        margin: 5,
        backgroundColor: 'white',
        width: 45,
        height: 30,
    },
    timeText: {
        textAlign: 'center',
        margin: 3,
    },
    // Styles for part size
    partyText: {
        textAlign: 'center',
        margin: 5,
    },
    partySizeBtn: {
        borderRadius: 5,
        margin: 5,
        backgroundColor: 'white',
        width: 40,
        height: 30,
        marginTop: -10,
        marginBottom: 20,
    },
    partyContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '90%',
        marginLeft: 25,
    }
});

export default BookingScreen; 
