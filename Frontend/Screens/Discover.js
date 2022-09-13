<<<<<<< Updated upstream
import React, { useState } from 'react';
import {  Button, Link, StyleSheet, TextInput, Text, View } from 'react-native';
import DiscoveryList from './DicoveryList'

function DiscoverScreen({ navigation }) {
    const [text, setText] = useState('');

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Hello there!</Text>
            <View style = {styles.textInput}>
                <TextInput
                    style={{height: 40}}
                    placeholder="Input city!"
                    onChangeText={newText => setText(newText)}
                    defaultValue={text}
                />
                <Button
                    onPress={() => navigation.navigate('DiscoveryList')}
                    title="Go to List"
                />
            </View>
=======
import { View, Button, Text } from 'react-native';

function Discover({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>A list of all resturants !</Text>
>>>>>>> Stashed changes
        </View>
    );
}

<<<<<<< Updated upstream
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

export default DiscoverScreen
=======
export default Discover
>>>>>>> Stashed changes
