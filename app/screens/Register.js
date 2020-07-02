import React, { useState } from 'react';
import { View, ScrollView, KeyboardAvoidingView, Alert } from 'react-native';

import Mytextinput from '../components/Mytextinput';
import Mybutton from '../components/Mybutton'
import  { DB } from '../model/db';

const Register = ({ navigation }) => {

    const [userName, setUserName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');

    const registerUser = () => {
        if(userName.trim()!='' && phoneNumber.trim()!='' && address.trim()!='') {
            //insert user
            DB.transaction(function (tx) {
                tx.executeSql('CREATE TABLE IF NOT EXISTS user (name, phone, address)');
            }, function (error) {
                console.log('Transaction Error: ' + error.message);
            }, function () {
                console.log("SQL executed fine");
            });
            DB.transaction((tx) => {
                tx.executeSql('INSERT INTO user VALUES (?,?,?)', [userName, phoneNumber, address]);
                console.log('tx: ',tx);
                Alert.alert(
                    'Success',
                    'You are Registered Successfully',
                    [
                        {
                            text: 'Ok',
                            onPress: () => navigation.navigate('Home'),
                        },
                    ],
                    { cancelable: false}
                );
              }, function (error) {
                  console.log('Insert user error: ' + error);
                  Alert.alert('Error', 'Registration Failed')
            });
        } else {
            Alert.alert('Error', 'All fields are required');
        }
    }

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