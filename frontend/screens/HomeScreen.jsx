import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import QuizList from '../components/QuizList/QuizList'
import Header from '../components/Header/Header'
import SearchBar from '../components/SearchBar/SearchBar'
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import AppBar from '../components/AppBar/AppBar'

const HomeScreen = ({ navigation, fetchedQuizData }) => {
    const originalData = fetchedQuizData;
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredQuizData, setFilteredQuizData] = useState(fetchedQuizData);

    // console.log(fetchedQuizData)
    useEffect(() => {
        const quizArray = Object.values(fetchedQuizData);
        const filteredData = quizArray.filter(quiz => {
            return quiz.title.toLowerCase().includes(searchQuery.toLowerCase());
        });
        setFilteredQuizData(filteredData);
    }, [searchQuery, fetchedQuizData]);


    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.header}>
                <Header navigation={navigation} />
            </View>
            <View style={styles.searchBar}>
                <SearchBar
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                />
            </View>
            <View style={styles.quizList} >
                <QuizList navigation={navigation} QuizData={filteredQuizData} />
            </View>
            <AppBar navigation={navigation} />
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#202849',
    },
    header: {
        flex: 2.2
    },
    searchBar: {
        marginBottom: 20
    },
    quizList: {
        flex: 4,

    },

})