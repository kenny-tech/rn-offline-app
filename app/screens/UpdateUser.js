import React, { useState } from 'react';
import { View, ScrollView, KeyboardAvoidingView, Alert } from 'react-native';

import Mytextinput from '../components/Mytextinput';
import Mybutton from '../components/Mybutton';
import  { DB } from '../model/db';

const UpdateUser = ({ navigation }) => {
    const [userId, setUserId] = useState('');
    const [userName, setUserName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');

    const searchUser = () => {
        if(userId.trim() != '') {
            DB.transaction(tx => {
                tx.executeSql('SELECT * FROM allusers WHERE rowid = ?', [userId], (tx, results) => {
                    let len = results.rows.length;
                    console.log('len: ', len);
                    if (len > 0) {
                        console.log(results.rows.item(0).name, results.rows.item(0).phone, results.rows.item(0).address);

                        setUserName(results.rows.item(0).name);
                        setPhoneNumber(results.rows.item(0).phone);
                        setAddress(results.rows.item(0).address);
                    } else {
                        Alert.alert('Error:','No user found');
                        setUserName('');
                        setPhoneNumber('');
                        setAddress('');
                    }
                })
            });
        } else {
            Alert.alert('Error','Please enter a user id');
        }
    }

    const updateUser = () => {
        if (userName.trim() != '') {
            if(phoneNumber.trim != '') {
                if(address.trim != '') {
                    DB.transaction(tx => {
                        tx.executeSql('UPDATE allusers SET name=?, phone=?, address=? WHERE rowid=?', [userName, phoneNumber, address, userId], (tx, results) => {
                            console.log('Results: ', results.rowsAffected);
                            if(results.rowsAffected > 0) {
                                Alert.alert(
                                    'Success',
                                    'User successfully updated',
                                    [
                                        {
                                            text: 'Ok',
                                            onPress: () => navigation.navigate('Home'),
                                        },
                                    ],
                                    { cancelable: false}
                                );
                            } else {
                                Alert.alert('Error', 'Failed to update user. Please try again')
                            }
                        })
                    })
                } else {
                    Alert.alert('Error', 'Please fill Address');
                }
            } else {
                Alert.alert('Error', 'Please fill Phone Number');
            }
        } else {
            Alert.alert('Error', 'Please fill Name');
        }
    }

    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <ScrollView keyboardShouldPersistTaps='handled'>
                <KeyboardAvoidingView
                    behavior='padding'
                    style={{ flex:1, justifyContent: 'space-between' }}
                >
                    <Mytextinput
                        placeholder="Enter User Id"
                        style={{ padding: 10 }}
                        onChangeText={ userId => setUserId(userId)}
                    />
                    <Mybutton 
                        title="Search User"
                        customClick = {() => searchUser()}
                    />
                    <Mytextinput 
                        placeholder="Enter Name"
                        value={userName}
                        style={{ padding: 10 }}
                        onChangeText = {userName => setUserName(userName)}
                    />
                    <Mytextinput 
                        placeholder="Phone Number"
                        value={phoneNumber}
                        maxLength={10}
                        keyboardType="numeric"
                        style={{ padding: 10 }}
                        onChangeText = {phoneNumber => setPhoneNumber(phoneNumber)}
                    />
                    <Mytextinput 
                        placeholder="Enter Address"
                        value={address}
                        maxLength={255}
                        numberOfLines={5}
                        multiline={true}
                        style={{ textAlignVertical: 'top', padding: 10 }}
                        onChangeText = {address => setAddress(address)}
                    />
                    <Mybutton 
                        title="Update User"
                        customClick={() => updateUser()}
                    />
                </KeyboardAvoidingView>
            </ScrollView>
        </View>
    )
}

export default UpdateUser;
