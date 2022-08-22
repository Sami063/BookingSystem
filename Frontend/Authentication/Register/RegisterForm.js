import { StyleSheet, Text, View, SafeAreaView, TextInput, Form, onChangeText, TouchableOpacity } from 'react-native';
import React, {useState} from 'react'; 
import axios from 'axios';

function RegisterScreen() {
    // Object 
    const [user, setUser] = useState([])

    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    
    function Login() {}
    
    // handleSignup
    const Signup = () => {
        let userData = {
            fullName,
            email,
            password, 
            confirmPassword
        };
        setUser([...user, userData])

        // password == confirmPassword ? success : validation massage
        if(password !== confirmPassword) {
            // show validation message - password must match
            if(email.exists) {
                // email exit - user exit
            }
        } else {
            // Use Axios to post data to mongo database
        }
        
        axios.post('http://192.168.43.80:3002/register', {
            fullName,
            email,
            password,
        }).then((response) => {
            alert('Successfully registered');
        }).catch((err) => {
            console.error(err);
        })
        setFullName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        
    };

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Create your account</Text>
            <View style={styles.containerScreen}>
                <View style={styles.inputGroup}>
                    <Text>Full name</Text>
                   <TextInput placeholder='Your full name' 
                   onChangeText={(name) => setFullName(name)} style={styles.textInput}/>     
                </View>
                <View style={styles.inputGroup}>
                    <Text>Email</Text>
                   <TextInput placeholder='Your email' value={email} 
                   onChangeText={(email) => setEmail(email)} style={styles.textInput}/>     
                </View>

                <View style={styles.inputGroup}>
                    <Text>Password</Text>
                   <TextInput placeholder='Your password' value={password} secureTextEntry={true} 
                   onChangeText={(password) => setPassword(password)} style={styles.textInput}/>     
                </View>
                
                <View style={styles.inputGroup}>
                    <Text>Confirm password</Text>
                   <TextInput placeholder='re-enter password' value={confirmPassword} secureTextEntry={true} 
                   onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)} style={styles.textInput}/>     
                </View>

                {/* Redirect user to login screen after creating new account*/}
                <View style={styles.btnLogin}>
                    <TouchableOpacity onPress={Signup}>
                        <Text style={styles.btnText}>Create account</Text>
                    </TouchableOpacity>
                </View>

                {/* Sign up - we will link to the registration form */}
                <View style={styles.btnRegister}>
                    <TouchableOpacity onPress={Login}>
                        <Text style={styles.btnText}>Login</Text>
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
        backgroundColor: '#15b103f6',
        height: '100%',
    }, 
    containerScreen: {
        backgroundColor: 'white',
        height: '80%',
        marginTop: '40%',
        borderRadius: 15,
    },
    inputGroup: {
        marginTop: 15,
        marginLeft: 10,
    }, 
    textInput: {
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        width: '95%',
    },
    btnLogin: {
        backgroundColor: 'green',
        width: '90%',
        height: 30,
        marginLeft: 15, marginTop: 25,
        alignItems: 'center',
        alignContent: 'center',
        borderRadius: 5,
    }, 
    btnRegister: {
        backgroundColor: 'grey',
        width: '90%',
        height: 30,
        marginLeft: 15, marginTop: 25,
        alignItems: 'center',
        alignContent: 'center',
        borderRadius: 5,
    },
    btnText: {
        fontSize: 18,
        color: 'white',
    }
})

export default RegisterScreen; 
