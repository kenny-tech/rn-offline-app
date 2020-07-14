import React from 'react';
import { View } from 'react-native';

import Mybutton from '../components/Mybutton';
import Mytext from '../components/Mytext'

const Home = ({ navigation }) => {
    return (
        <View style={{flex: 1, backgroundColor: 'white', flexDirection: 'column'}}>
            <Mytext text="SQLite Example"/>
            <Mybutton 
                title="Register" 
                customClick={() => navigation.navigate('Register')}
            />
            <Mybutton
                title="Update"
                customClick={() => navigation.navigate('UpdateUser')}
            />
            <Mybutton
                title="View"
                customClick={() => navigation.navigate('ViewUser')}
            />
            <Mybutton
                title="View All"
                customClick={() => navigation.navigate('ViewUsers')}
            />
            <Mybutton
                title="Delete"
                customClick={() => navigation.navigate('DeleteUser')}
            />
        </View>
    )
}

export default Home;