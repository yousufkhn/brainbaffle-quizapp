import { Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
const { height, width } = Dimensions.get('window')

const QuestionItem = ({ data, selectedOption }) => {

    return (
        <View style={styles.container}>
            <View style={styles.question}>
                <Text style={{ fontSize: 25, fontWeight: 'bold', padding: 8, color: "white" }}>{data.question}</Text>
            </View>

            <View style={styles.options}>
                <FlatList data={data.Options} renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity style={{
                            backgroundColor: data.marked == index + 1 ? '#FF6AC2' : '#202849',
                            margin: 8,
                            padding: 15,
                            borderRadius: 20,
                            borderWidth: 4,
                            borderColor: '#1b466a',
                        }}
                            onPress={() => {
                                selectedOption(index + 1)
                            }}>
                            <Text style={{
                                textAlign: "center", fontSize: 15, fontWeight: 'bold',
                                color: 'white'
                            }}>
                                {item}
                            </Text>
                        </TouchableOpacity>
                    )
                }} />
            </View>

        </View>
    )
}

export default QuestionItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width
    },
    question: {
        flex: 1,
        alignItems: "center",
    },
    options: {
        backgroundColor: "#202849",
        flex: 1.5,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        justifyContent: 'center',
        padding: 7

    }
})