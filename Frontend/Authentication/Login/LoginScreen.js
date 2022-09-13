import { StyleSheet, Text, View, SafeAreaView, TextInput, Form, onChangeText, TouchableOpacity } from 'react-native';
import React, {useState, useEffect, useContext} from 'react'
import { useNavigation} from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import axios from 'axios';
import {AuthContext} from '../Context/AuthContext';


function LoginScreen() {
    const navigation = useNavigation();

    const [user, setUser] = useState([])
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {login} = useContext(AuthContext);

    // fromDb 
    // useEffect(() => {
    //     let userData; 
    //     axios.get('http://10.0.2.2:4000/api/user')
    //     .then((response) => {
    //         // console.log()
    //     })
    // })
    
    return (
        <View style={styles.screen}>
            <View style={styles.containerScreen}>
                <View style={styles.inputGroup}>
                   <TextInput placeholder='Your email' onChangeText={(email) => setEmail(email)} style={styles.buttons}/>     
                </View>
                <View style={styles.inputGroup}>
                   <TextInput placeholder='Your password' onChangeText={(password) => setPassword(password)} 
                   secureTextEntry={true} style={styles.buttons}  />     
                </View>

                {/* Buttons for login and signup */}
                <View style={styles.btnLogin}>
                    <TouchableOpacity onPress={() => {login(email, password)} }>
                        <Text style={styles.btnText}>Login</Text>
                    </TouchableOpacity>
                </View>

                {/* Sign up - we will link to the registration form */}
                <View style={styles.btnRegister}>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                        <Text style={styles.btnText}>Create new account</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

// 15b103f6
const styles = StyleSheet.create({
    // Screen style
    screen: {
        backgroundColor: '#004242',
        height: '100%',
    }, 
    // COntainer that holds all the connect elements
    containerScreen: {
        backgroundColor: '#004242',
        height: '80%',
        marginTop: '35%',
        borderRadius: 20,
    },
    inputGroup: {
        marginTop: 15,
        marginLeft: 10,
    }, 
    // Input buttons styles
    buttons: {
        width: '95%',
        fontSize: 16,
        color: 'black',
        borderWidth: 1,
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: 'white',
        marginVertical: 1,
        marginHorizontal: 5,
    },
    // Button style for login 
    btnLogin: {
        backgroundColor: '#66FFFF',
        width: '92%',
        height: 30,
        fontSize: 16,
        marginLeft: 15,
        alignItems: 'center',
        alignContent: 'center',
        borderRadius: 5,
        marginTop: 40,
    }, 
    btnRegister: {
        // backgroundColor: 'grey',
        // width: '90%',
        // height: 30,
        marginLeft: 15, marginTop: 25,
        alignItems: 'center',
        alignContent: 'center',
        // borderRadius: 5,
    },
    btnText: {
        fontSize: 20,
        color: 'black',
    },
})

export default LoginScreen;