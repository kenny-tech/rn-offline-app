import React, { useState } from 'react';
import { View, ScrollView, KeyboardAvoidingView, Alert } from 'react-native';

import Mytextinput from '../components/Mytextinput';
import Mybutton from '../components/Mybutton'

const Register = () => {

    const registerUser = () => {
        Alert.alert('Registering user...');
    }

    const [userName, setUserName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('')
    return (
        <View style={{backgroundColor: 'white', flex: 1}}>
            <ScrollView keyboardShouldPersistTaps='handled'>
                <KeyboardAvoidingView
                    behavior="padding"
                    style={{ flex: 1, justifyContent: 'space-between' }}
                >
                <Mytextinput
                    placeholder="Enter Name"
                    onChangeText={userName => setUserName(userName)}
                    style={{ padding:10 }}
                />
                <Mytextinput
                    placeholder="Enter Phone Number"
                    onChangeText={phoneNumber => setPhoneNumber(phoneNumber)}
                    maxLength={10}
                    keyboardType="numeric"
                    style={{ padding:10 }}
                />
                <Mytextinput
                    placeholder="Enter Address"
                    onChangeText={address => setAddress(address)}
                    maxLength={225}
                    numberOfLines={5}
                    multiline={true}
                    style={{ textAlignVertical: 'top',padding:10 }}
                />
                <Mybutton
                    title="Submit"
                    customClick={() => registerUser()}
                />
                </KeyboardAvoidingView>
            </ScrollView>
        </View>
    )
}

export default Register;