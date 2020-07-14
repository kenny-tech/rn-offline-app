import React, { useState, useEffect  } from 'react';
import { View, Text, Alert } from 'react-native';
import Mytextinput from '../components/Mytextinput';
import Mybutton from '../components/Mybutton';

import { DB } from '../model/db';

const ViewUser = () => {

    const [userId, setUserId] = useState('');
    const [userData, setUserData] = useState('');

    const searchUser = () => {
        if(userId.trim() != '') {
            DB.transaction(tx => {
                tx.executeSql('SELECT rowid, name, phone, address FROM allusers WHERE rowid = ?', [userId], (tx, results) => {
                    let len = results.rows.length;
                    console.log('len: ', len);
                    if (len > 0) {
                        setUserData(results.rows.item(0));
                        console.log(userData);
                    } else {
                        Alert.alert('Error:','No user found');
                        setUserData('');
                    }
                })
            });
        } else {
            Alert.alert('Error','Please enter a user id');
        }
    }

    return (
        <View>
            <Mytextinput
                placeholder="Enter User Id"
                style={{ padding: 10 }}
                onChangeText={ userId => setUserId(userId)}
            />
            <Mybutton 
                title="Search User"
                customClick = {() => searchUser()}
            />
            {
                userData != '' ? (
                    <View style={{ marginLeft: 35, marginRight: 35, marginTop: 10 }}>
                        <Text>User Id: {userData.rowid}</Text>
                        <Text>User Name: {userData.name}</Text>
                        <Text>User Phone Number: {userData.phone}</Text>
                        <Text>User Address: {userData.address}</Text>
                    </View>
                ) : (<View></View>)
            }
        </View>
    )
    
}

export default ViewUser;