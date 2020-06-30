import React, { useEffect } from 'react';
import { View, Alert } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';

import Mybutton from '../components/Mybutton';
import Mytext from '../components/Mytext'

const Home = ({ navigation }) => {

    let db = openDatabase({ name: 'userDatabase.db'});

    useEffect(() => {

    })

    useEffect(() => {
        db.transaction(function(txn) {
        txn.executeSql(
            "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
            [],
            function(tx, res) {
            console.log('item:', res.rows.length);
            if (res.rows.length == 0) {
                txn.executeSql('DROP TABLE IF EXISTS table_user', []);
                txn.executeSql(
                    'CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(20), user_contact INT(10), user_address VARCHAR(255))',
                []
                );
            }
            }
        );
        });
    });

    return (
        <View style={{flex: 1, backgroundColor: 'white', flexDirection: 'column'}}>
            <Mytext text="SQLite Example"/>
            <Mybutton 
                title="Register" 
                customClick={() => navigation.navigate('Register')}
            />
            <Mybutton
                title="Update"
                customClick={() => Alert.alert('Update', 'You clicked on Update button')}
            />
            <Mybutton
                title="View"
                customClick={() => Alert.alert('View', 'You clicked on View button')}
            />
            <Mybutton
                title="View All"
                customClick={() => Alert.alert('View All', 'You clicked on View All button')}
            />
            <Mybutton
                title="Delete"
                customClick={() => Alert.alert('Delete', 'You clicked on Delete button')}
            />
        </View>
    )
}

export default Home;