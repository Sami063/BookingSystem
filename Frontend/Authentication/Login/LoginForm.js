import { StyleSheet, Text, View, SafeAreaView, TextInput, Form, onChangeText, TouchableOpacity } from 'react-native';
import React, {useState} from 'react'
function LoginForm() {

    const [user, setUser] = useState([])

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleUserEmail = () => {

    }
    const handleUserPassword = (pwd) => {
        
    }
    
    const handleLogin = () => {

        // If the email exists in the database & password == password
        // Redirect user to his own account
        // Login success - redirect
    }


    return (
        <View style={styles.screen}>
            <View style={styles.containerScreen}>
                <View style={styles.inputGroup}>
                    <Text>Email</Text>
                   <TextInput placeholder='Your email' value={email} onChangeText={handleUserEmail} style={styles.textInput}/>     
                </View>
                <View style={styles.inputGroup}>
                    <Text>Password</Text>
                   <TextInput placeholder='Your password' value={password} onChangeText={handleUserPassword} 
                   secureTextEntry={true} style={styles.textInput}/>     
                </View>

                {/* Buttons for login and sign in */}
                <View style={styles.btnLogin}>
                    <TouchableOpacity onPress={handleLogin}>
                        <Text style={styles.btnText}>Login</Text>
                    </TouchableOpacity>
                </View>

                {/* Sign up - we will link to the registration form */}
                <View style={styles.btnRegister}>
                    <TouchableOpacity onPress={handleLogin}>
                        <Text style={styles.btnText}>Create new account</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: '#15b103f6',
        height: '100%',
    }, 
    containerScreen: {
        backgroundColor: 'white',
        height: '80%',
        marginTop: '50%',
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

export default LoginForm;