import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
    return (
        <View style={styles.searchbar}>
            <Feather name="search" size={35} color="#D0BFFF" />
            <TextInput
                placeholder='Search Quizzes'
                placeholderTextColor="white"
                style={{
                    width: '100%',
                    fontSize: 18,
                    borderRadius: 22,
                    color: 'white'
                }}
                value={searchQuery}
                onChangeText={text => setSearchQuery(text)}
            />

        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    searchbar: {
        padding: 18,
        marginHorizontal: 20,
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#4D4C7D',
        borderRadius: 22,
        gap: 10
        // color: 'white'
    }
})