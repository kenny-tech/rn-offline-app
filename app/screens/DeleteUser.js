import React, { useState } from 'react';
import { View, Alert } from 'react-native';

import Mytextinput from '../components/Mytextinput';
import Mybutton from '../components/Mybutton';
import  { DB } from '../model/db';

const DeleteUser = ({ navigation }) => {
    const [userId, setUserId] = useState('');

    const deleteUser = () => {
        DB.transaction(tx => {
            tx.executeSql('DELETE FROM allusers WHERE rowid = ?', [userId], (tx, results) => {
                console.log('Results : ', results.rowsAffected);
                if (results.rowsAffected > 0) {
                    Alert.alert(
                        'Success',
                        'User successfully deleted',
                        [
                            {
                                text: 'Ok',
                                onPress: () => navigation.navigate('Home'),
                            },
                        ],
                        { cancelable: false}
                    );
                } else {
                    Alert.alert('Error','Please insert a valid User Id');
                }
            })
        });
    }

    return (
        <View style={{ backgroundColor: 'white', flex: 1}}>
            <Mytextinput
                placeholder="Enter User Id"
                onChangeText={userId => setUserId(userId)}
                style={{ padding: 10 }}
            />
            <Mybutton 
                title="Delete User"
                customClick={() => deleteUser()}
            />
        </View>
    )
}

export default DeleteUser;