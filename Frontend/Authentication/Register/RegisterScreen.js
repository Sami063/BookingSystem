import { StyleSheet, Text, Alert, View, SafeAreaView, TextInput, Form, onChangeText, TouchableOpacity } from 'react-native';
import React, {useState, useEffect} from 'react'; 
import axios from 'axios';
import { useNavigation} from '@react-navigation/native';
function RegisterScreen() {
    // Object 
    const [user, setUser] = useState([])
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const navigation = useNavigation();

    const [success, setSuccess] = useState()
    const [weather, setWeather] = useState()
    
    const Signup = () => {

        // ip that is provided by android amulator
    axios.post('http://172.17.176.1:4000/register', {
        fullName,
        email,
        password,
    })
    .then(res => {
    let userInfo = res.data;
    console.log(userInfo)
    setSuccess(true)
    
    Alert.alert(
            'Successfully registered'
            )
        navigation.navigate('Login')
    }) 
    .catch(err => {
        console.log(`registration, ${err}`)
    });
}

  // Get request from MongoDB - success
//   useEffect(()=> { //
//     axios.get('http://10.0.2.2:4000/api/user') 
//     .then((response)=> {
//     console.log(response.data)  
//       }); 
//     });
    //exp://192.168.43.80:1900

    return ( 
        <View style={styles.screen}>
            <Text style={styles.title}>Create your account</Text>
            <View style={styles.containerScreen}>
                <View style={styles.inputGroup}>
                   <TextInput placeholder='Your full name' 
                   onChangeText={(name) => setFullName(name)} style={styles.textInput}/>     
                </View>
                <View style={styles.inputGroup}>
                   <TextInput placeholder='Your email' value={email} 
                   onChangeText={(email) => setEmail(email)} style={styles.textInput}/>     
                </View>

                <View style={styles.inputGroup}>
                   <TextInput placeholder='Your password' value={password} secureTextEntry={true} 
                   onChangeText={(password) => setPassword(password)} style={styles.textInput}/>     
                </View>
                
                <View style={styles.inputGroup}>
                   <TextInput placeholder='re-enter password' value={confirmPassword} secureTextEntry={true} 
                   onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)} style={styles.textInput}/>     
                </View>

                {/* Redirect user to login screen after creating new account*/}
                <View style={styles.btnRegister}>
                    <TouchableOpacity onPress={Signup}>
                        <Text style={styles.btnText}>Create account</Text>
                    </TouchableOpacity>
                </View>

                {/* Sign up - we will link to the registration form */}
                <View style={styles.btnLogin}>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.link}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
    },
    screen: {
        backgroundColor: '#004742',
        height: '100%',
    }, 
    containerScreen: {
        backgroundColor: '#004242',
        height: '80%',
        marginTop: '20%',
        borderRadius: 15,
    },
    inputGroup: {
        marginTop: 15,
        marginLeft: 10,
    }, 
    textInput: {
        width: '95%',
        fontSize: 16,
        color: 'black',
        borderWidth: 1,
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: 'white',
        marginVertical: 0,
        marginHorizontal: 5,
    },
    btnRegister: {
        backgroundColor: 'green',
        width: '90%',
        height: 30,
        marginLeft: 15, marginTop: 25,
        alignItems: 'center',
        alignContent: 'center',
        borderRadius: 5,
    }, 
    btnLogin: {
        alignItems: 'center',
        alignContent: 'center',
    },
    btnText: {
        fontSize: 18,
        color: 'white',
    },
    link: {
        fontSize: 18,

    }
})

export default RegisterScreen;