import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";

const AddQuestion = ({ question, onQuestionNameChange, onChangeOption, onCorrectChange }) => {
    const [current, setCurrent] = useState();

    const handleSelect = (value) => {
        setCurrent(value);
        onCorrectChange(value);
    }


    return (
        <View style={styles.container}>
            <TextInput
                placeholder='Question'
                placeholderTextColor="#8da1f0"
                style={{ fontSize: 25, color: 'white', backgroundColor: '#4D4C7D', padding: 7, borderRadius: 10 }}
                value={question.question}
                onChangeText={(text) => onQuestionNameChange(text)}
            />
            {question.Options.map((option, optionIndex) => (
                <TextInput
                    key={optionIndex}
                    placeholder={`Option ${optionIndex + 1}`}
                    placeholderTextColor="#8da1f0"
                    style={{ fontSize: 20, color: 'white', backgroundColor: '#4D4C7D', padding: 5, borderRadius: 10 }}
                    value={option}
                    onChangeText={(text) => onChangeOption(text, optionIndex)}
                />
            ))}
            <Text style={{ color: 'white', fontSize: 18 }}>Correct Option:</Text>
            <RadioButtonGroup
                containerStyle={{
                    marginBottom: 10,
                    flexDirection: 'row', // Arrange items horizontally
                    justifyContent: 'space-around', // Adjust as needed
                    marginBottom: 10,
                }}
                selected={current}
                onSelected={(value) => { handleSelect(value) }}
                radioBackground="green"
                labelStyle={{ color: 'white' }}
            >
                <RadioButtonItem value="1" label="  1" />
                <RadioButtonItem value="2" label="  2" />
                <RadioButtonItem value="3" label="  3" />
                <RadioButtonItem value="4" label="  4" />
            </RadioButtonGroup>
        </View>
    )
}

export default AddQuestion

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        borderWidth: 3,
        borderColor: '#1b466a',
        borderRadius: 20,
        gap: 20,
        padding: 15,
        width: '100%',
        backgroundColor: '#2C3763'

    }
})