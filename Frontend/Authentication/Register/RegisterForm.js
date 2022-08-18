import { StyleSheet, Text, View, SafeAreaView, TextInput, Form, onChangeText, TouchableOpacity } from 'react-native';
import React, {useState} from 'react'
function LoginForm() {

    // Object 
    const [user, setUser] = useState([])

    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleUserInput = (name) => {
        setFullName(name)
        
    }

    const handleUserEmail = (userEmail) => {
        setEmail(userEmail);
    };
    const handleUserpwd = (pwd) => {
        setPassword(pwd);
    }
    const handleUserConfirmPassword = (conf_Pwd) => {
        setConfirmPassword(conf_Pwd)
    }

    // If the email exists in the database - validation massage 'user already exist'
    const handleLogin = () => {
        setUser([...user, fullName])
        console.log(user)
        setFullName('');
    } 


    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Create your account</Text>
            <View style={styles.containerScreen}>
                <View style={styles.inputGroup}>
                    <Text>Full name</Text>
                   <TextInput placeholder='Your full name' value={fullName} 
                   onChangeText={handleUserInput} style={styles.textInput}/>     
                </View>
                <View style={styles.inputGroup}>
                    <Text>Email</Text>
                   <TextInput placeholder='Your email' value={email} 
                   onChangeText={handleUserEmail} style={styles.textInput}/>     
                </View>

                <View style={styles.inputGroup}>
                    <Text>Password</Text>
                   <TextInput placeholder='Your password' value={password} secureTextEntry={true} 
                   onChangeText={handleUserpwd} style={styles.textInput}/>     
                </View>
                
                <View style={styles.inputGroup}>
                    <Text>Confirm password</Text>
                   <TextInput placeholder='re-enter password' value={confirmPassword} secureTextEntry={true} 
                   onChangeText={handleUserConfirmPassword} style={styles.textInput}/>     
                </View>

                {/* Redirect user to login screen after creating new account*/}
                <View style={styles.btnLogin}>
                    <TouchableOpacity onPress={handleLogin}>
                        <Text style={styles.btnText}>Create account</Text>
                    </TouchableOpacity>
                </View>

                {/* Sign up - we will link to the registration form */}
                <View style={styles.btnRegister}>
                    <TouchableOpacity onPress={handleLogin}>
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

export default LoginForm;