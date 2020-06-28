import React from 'react';
import { View, Alert } from 'react-native';

import Mybutton from '../components/Mybutton';
import Mytext from '../components/Mytext'

const Home = () => {
    return (
        <View style={{flex: 1, backgroundColor: 'white', flexDirection: 'column'}}>
            <Mytext text="SQLite Example"/>
            <Mybutton 
                title="Register" 
                customClick={() => Alert.alert('Register', 'You clicked on Register button')}
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