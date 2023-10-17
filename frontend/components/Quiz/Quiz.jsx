import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Quiz = ({ navigation, quiz, subject }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate("quiz", { subject })}>
            <View style={styles.logo}>
                <MaterialCommunityIcons name="book-education" size={50} color="#d95eaf" />

            </View>
            <View style={styles.about}>
                <Text style={styles.title}>
                    {quiz.title}
                </Text>
                <Text style={styles.subTitle}>
                    {quiz.questions.length} Questions
                </Text>
            </View>
            <View style={styles.arrow}>
                <AntDesign name="arrowright" size={50} color="#077fec" />
            </View>
        </TouchableOpacity>
    )
}

export default Quiz

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'row',
        borderWidth: 3,
        borderColor: '#1b466a',
        borderRadius: 20,
        padding: 10,
        marginVertical: 10,
        marginHorizontal: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#2C3763'
    },
    logo: {

    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    subTitle: {
        color: '#908f9e'
    },
    arrow: {
    }
})