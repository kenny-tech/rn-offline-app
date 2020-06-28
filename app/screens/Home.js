import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.titleView}>
                <Text style={styles.titleText}>SQLite Example</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    titleView: {
        margin: 20,
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})

export default Home;