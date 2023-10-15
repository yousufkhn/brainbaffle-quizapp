import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';

const SearchBar = () => {
    return (
        <View style={styles.searchbar}>
            <TextInput placeholder='Search Quizzes' placeholderTextColor="white" style={{ fontSize: 15 }} />
            <Feather name="search" size={30} color="#D0BFFF" />
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    searchbar: {
        padding: 18,
        marginHorizontal: 20,
        // marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#4D4C7D',
        borderRadius: 22,
        color: 'white'
    }
})