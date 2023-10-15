import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Header = ({ navigation }) => {
    return (

        <View style={styles.container}>
            <View style={styles.topContainer}>
                <View style={styles.menuBtn} >
                    <FontAwesome5 name="bars" size={35} color="#077fec" />
                </View>
                <View style={styles.profile} >
                    <MaterialIcons name="account-circle" size={60} color="#077fec" onPress={() => navigation.navigate("profile")} />
                </View>
            </View>
            <View style={styles.greeting}>
                <Text style={styles.text1}>Hello,Yousuf</Text>
                <Text style={styles.text2}>Challenge Your Brain, Embrace the Quiz!</Text>
            </View>
        </View>
    )
}
export default Header

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'white',
        flexDirection: 'column',
        width: '100%'
    },
    topContainer: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        justifyContent: "space-between",
        alignItems: 'center'

    },
    text1: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold'
    },
    text2: {
        color: 'white',
        fontSize: 15,
        fontWeight: "bold",
        color: "#7282C0"
    },
    greeting: {
        flex: 1,
        padding: 20,
        justifyContent: 'center'

    },
    profile: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        margin: 20
    },
    menuBtn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        margin: 20

    }
})