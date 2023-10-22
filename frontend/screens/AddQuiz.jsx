import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import AddQuestion from '../components/AddQuestion/AddQuestion';
import axios from 'axios';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Toast from 'react-native-toast-message';

const AddQuiz = ({ navigation, fetchData }) => {
    const [quizName, setQuizName] = useState('');
    const [questions, setQuestions] = useState(
        [{
            "question": "",
            "Options": ["", "", "", ""],
            "correct": -1,
            "marked": -1
        }])

    const handleAddQuestion = () => {
        setQuestions((prevQuestions) => [
            ...prevQuestions,
            {
                "question": '',
                "Options": ['', '', '', ''],
                "correct": -1,
                "marked": -1,
            },
        ]);
    };

    const handleQuestionNameChange = (text, index) => {
        setQuestions((prevQuestions) => {
            const newQuestions = [...prevQuestions];
            newQuestions[index].question = text;
            return newQuestions;
        });
    };

    const handleChangeOption = (text, questionIndex, optionIndex) => {
        setQuestions((prevQuestions) => {
            const newQuestions = [...prevQuestions];
            newQuestions[questionIndex].Options[optionIndex] = text;

            return newQuestions;
        });
    };

    const handleCorrectChange = (value, questionIndex) => {
        setQuestions((prevQuestions) => {
            const newQuestions = [...prevQuestions];
            newQuestions[questionIndex].correct = parseInt(value, 10) || -1; // convert to number or -1 if not a valid number
            return newQuestions;
        });
    };



    const handleRemoveQuestion = (index) => {
        setQuestions((prevQuestions) => {
            const newQuestions = [...prevQuestions];
            newQuestions.splice(index, 1);
            return newQuestions;
        });
    };

    const handleQuizNameChange = (text) => {
        setQuizName(text);
    };

    const handleSubmit = () => {
        // Transform the  data structure
        const data = {
            title: quizName,
            questionCount: questions.length,
            questions: questions.map((question) => ({
                question: question.question,
                Options: question.Options,
                correct: question.correct,
                marked: question.marked,
            })),
        };
        const formattedData = JSON.stringify(data, null, 2)
        axios.post('https://quizapp-utxw.onrender.com/send_quiz_data', {
            title: quizName,
            questionCount: questions.length,
            questions: questions.map((question) => ({
                question: question.question,
                Options: question.Options,
                correct: question.correct,
                marked: question.marked,
            })),
        })
            .then(() => {
                // Call fetchData after successful submission
                fetchData();
            })
            .then(() => {
                // Navigate to the 'home' screen
                navigation.navigate('home');
            })
            .then(() => {
                Toast.show({
                    type: 'success',
                    text1: 'Quiz Uploaded',
                    text2: 'successfully',
                    autoHide: true,
                    visibilityTime: 2000,
                    position: 'top',
                    bottomOffset: 50,
                    topOffset: 200
                })
            })
            .catch((error) => {
                Toast.show({
                    type: 'error',
                    text1: 'Quiz was not uploaded',
                    text2: 'some error',
                    autoHide: true,
                    visibilityTime: 2000,
                    position: 'top',
                    bottomOffset: 50,
                    topOffset: 200
                })
            });
    };


    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 15 }}>
                <Text style={styles.heading}>Make your own Quiz</Text>
                <TextInput
                    placeholder='Name your Quiz'
                    placeholderTextColor="#8da1f0"
                    style={styles.input}
                    value={quizName}
                    onChangeText={handleQuizNameChange}
                />
                <ScrollView >
                    <Toast />

                    {questions.map((question, index) => (
                        <View key={index} style={styles.questionContainer}>
                            <Text style={{ color: 'white', fontSize: 20, }}> Question No.{index + 1}</Text>
                            <AddQuestion question={question} onQuestionNameChange={(text) => handleQuestionNameChange(text, index)}
                                onChangeOption={(text, optionIndex) => handleChangeOption(text, index, optionIndex)}
                                onCorrectChange={(value) => handleCorrectChange(value, index)} />
                            <TouchableOpacity onPress={() => handleRemoveQuestion(index)} style={styles.deleteButton}>
                                <MaterialCommunityIcons name="delete-outline" size={24} color="white" />
                                <Text style={{ color: 'white', fontSize: 20 }}>Delete Question</Text>
                            </TouchableOpacity>
                        </View>

                    ))}
                    <TouchableOpacity onPress={handleAddQuestion} style={styles.addButton}>
                        <Ionicons name="add-circle-outline" size={24} color="white" />
                        <Text style={{ color: 'white', fontSize: 20, }}>Add Question</Text>
                    </TouchableOpacity>

                </ScrollView>
            </View>
            <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
                <Text style={{ color: 'white', fontSize: 20 }}>Submit Quiz</Text>
            </TouchableOpacity>
        </SafeAreaView >
    )
}

export default AddQuiz

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#202849',
        padding: 10,
        paddingTop: 20,
        justifyContent: 'space-between',
        // alignItems: 'center'
    },
    heading: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center'
    },
    input: {
        padding: 13,
        margin: 20,
        // marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#4D4C7D',
        borderRadius: 22,
        color: 'white',
        fontSize: 25
    },
    questionContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    submitButton: {
        flex: 1,
        // paddingHorizontal: 10,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: "center",
        borderColor: '#3e4669',
        borderWidth: 4,
        marginHorizontal: 5,
        height: 50,
        backgroundColor: '#17d776',
    },
    deleteButton: {
        flex: 1,
        // paddingHorizontal: 10,
        flexDirection: 'row',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: "center",
        borderColor: '#3e4669',
        borderWidth: 4,
        marginHorizontal: 5,
        height: 50,
        backgroundColor: '#e65b65',
        width: '70%',
        marginBottom: 15
    },
    addButton: {
        flex: 1,
        flexDirection: 'row',
        // paddingHorizontal: 10,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: "center",
        borderColor: '#3e4669',
        borderWidth: 4,
        marginHorizontal: 55,
        height: 50,
        backgroundColor: '#077fec',


    }
})