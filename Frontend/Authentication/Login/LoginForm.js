import { StyleSheet, Text, View, SafeAreaView, TextInput, Form, onChangeText, Button } from 'react-native';
import React, {useState} from 'react'
function Login() {

    const [User, setUser] = useState([])

    const [userName, setUsername] = useState('')
    const [Password, setPassword] = useState('')


    const handleClick = () => {

    }

    return (
        <View style={styles.container}>
            <TextInput
            value={userName}
            placeholder="Enter username"
            onChangeText={(userName) => { setUsername(userName)}} />
            
            <TextInput
            value={Password}
            placeholder="Enter password"
            onChangeText={(Password) => { setUsername(Password)}} />

            <Button
            onPress={handleClick} title="Login"
            color="green"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    }, 
    s: {
        backgroundColor: 'blue',
    }
})

export default Login;