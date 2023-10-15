import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import QuizList from '../components/QuizList/QuizList'
import Header from '../components/Header/Header'
import SearchBar from '../components/SearchBar/SearchBar'
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import AppBar from '../components/AppBar/AppBar'
import axios from 'axios';
import * as FileSystem from 'expo-file-system';

const HomeScreen = ({ navigation, fetchedQuizData }) => {
    // const [fetchedQuizData, setFetchQuizData] = useState([])

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get('http://192.168.19.124:80/get_quiz_data');
    //             const data = response.data;

    //             // Convert data to the desired format
    //             const convertedData = convertToNewFormat(data);

    //             // Set the converted data to state
    //             setFetchQuizData(convertedData);
    //         } catch (error) {
    //             console.error('Error fetching or converting data:', error);
    //         }
    //     };

    //     fetchData();
    // }, []);

    // const convertToNewFormat = (data) => {
    //     const convertedData = {};

    //     data.forEach((quiz) => {
    //         const { Title, QuestionCount, Questions } = quiz;

    //         const convertedQuiz = {
    //             title: Title.toLowerCase(),
    //             questionCount: QuestionCount,
    //             questions: Questions.map((question) => {
    //                 const { question: q, Options, correct, marked } = question;

    //                 return {
    //                     question: q,
    //                     Options,
    //                     correct,
    //                     marked,
    //                 };
    //             }),
    //         };

    //         convertedData[convertedQuiz.title] = convertedQuiz;
    //     });

    //     return convertedData;
    // };


    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.header}>
                <Header navigation={navigation} />
            </View>
            <View style={styles.searchBar}>
                <SearchBar />
            </View>
            <View style={styles.quizList}>
                <QuizList navigation={navigation} QuizData={fetchedQuizData} />
            </View>
            <AppBar />
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