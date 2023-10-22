import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
// import { QuizData } from '../../data/dataConverter'
import Quiz from '../Quiz/Quiz'
import AnimatedLottieView from 'lottie-react-native';

const QuizList = ({ navigation, QuizData }) => {
    const quizKeys = Object.keys(QuizData);
    const [isLoading, setIsLoading] = useState(true);
    // console.log(quizKeys)

    useEffect(() => {
        const timer = setTimeout(() => {
            // Hide the loading screen after 2 seconds
            setIsLoading(false);
        }, 2000);

        // Clear the timer when the component unmounts
        return () => clearTimeout(timer);
    }, []);


    return (
        <ScrollView style={styles.container}>
            <View style={styles.quizListHeading}>
                <Text style={styles.heading}>Quizzes</Text>
                <TouchableOpacity ><Text style={styles.viewAll}>View all</Text></TouchableOpacity>
            </View>
            {isLoading ? <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
                <AnimatedLottieView
                    autoPlay
                    style={{
                        width: 300,
                        height: 300,
                        backgroundColor: '#202849',
                    }}
                    source={require('../../assets/lottie/bookLoading.json')}
                />
            </View> : <ScrollView>
                {quizKeys.map((subject, index) => {
                    const quiz = QuizData[subject];

                    return <Quiz
                        key={index}
                        quiz={quiz}
                        navigation={navigation}
                        subject={quiz.title} />;
                })}
            </ScrollView>}
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