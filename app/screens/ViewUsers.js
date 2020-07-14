import React, { useState, useEffect  } from 'react';
import { FlatList, Text, View } from 'react-native';

import { DB } from '../model/db';

const ViewUsers = () => {

    const [flatListItems, setFlatListItems] = useState([]);

    const listViewItemSeparator = () => {
        return (
            <View style={{ height: 0.2, width: '100%', backgroundColor: '#808080' }} />
        )
    }

    const getUsers = () => {
        DB.transaction(tx => {
            tx.executeSql('SELECT rowid, name, phone, address FROM allusers', [], (tx, results) => {
                let temp = [];
                console.log(results.rows);
                for (let i = 0; i < results.rows.length; ++i) {
                    temp.push(results.rows.item(i));
                }
                setFlatListItems(temp);
            })
        });
    }

    useEffect(() => {
        getUsers()
    }, []);

    return (
        <View>
            <FlatList
                data={flatListItems}
                ItemSeparatorComponent={listViewItemSeparator}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={{ backgroundColor: 'white', padding: 20 }}>
                        <Text>ID: {item.rowid}</Text>
                        <Text>Name: {item.name}</Text>
                        <Text>Phone: {item.phone}</Text>
                        <Text>Address: {item.address}</Text>
                    </View>
                )}
            />
        </View>
    )
    
}

export default ViewUsers;