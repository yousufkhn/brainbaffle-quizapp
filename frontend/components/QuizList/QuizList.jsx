import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
// import { QuizData } from '../../data/dataConverter'
import Quiz from '../Quiz/Quiz'

const QuizList = ({ navigation, QuizData }) => {
    const quizKeys = Object.keys(QuizData);

    return (
        <ScrollView style={styles.container}>
            <View style={styles.quizListHeading}>
                <Text style={styles.heading}>Quizzes</Text>
                <TouchableOpacity ><Text style={styles.viewAll}>View all</Text></TouchableOpacity>
            </View>

            <ScrollView>
                {quizKeys.map((subject, index) => {
                    const quiz = QuizData[subject];
                    return <Quiz
                        key={index}
                        quiz={quiz}
                        navigation={navigation}
                        subject={subject} />;
                })}
            </ScrollView>
        </ScrollView>
    )
}

export default QuizList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#202849',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,

    },
    heading: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white'
    },
    quizListHeading: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20
    },
    viewAll: {
        fontSize: 15,
        color: '#B9C0DF',
        fontWeight: 'bold',
    }
})