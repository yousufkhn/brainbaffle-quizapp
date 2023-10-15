import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const AppBar = () => {
    const Tab = createBottomTabNavigator();
    return (
        <View style={styles.container}>
            <Feather name="home" size={32} color="#077fec" />
            <FontAwesome name="search" size={32} color="#077fec" />
            <Ionicons name="person" size={32} color="#077fec" />
        </View>
    )
}

export default AppBar

const styles = StyleSheet.create({
    container: {
        flex: 0.5,
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: "#202849"

    }
})