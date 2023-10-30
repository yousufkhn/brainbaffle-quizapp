import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../../metrics/color'
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


const SignUp = ({ navigation }) => {

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const [eyePassword, setEyePassword] = useState('eye');
    const [eyeConfirmPassword, setEyeConfirmPassword] = useState('eye');

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
        if (eyePassword === "eye") {
            setEyePassword("eye-off")
        }
        else {
            setEyePassword("eye")
        }
    };

    const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordVisible(!confirmPasswordVisible);
        if (eyeConfirmPassword === "eye") {
            setEyeConfirmPassword("eye-off")
        }
        else {
            setEyeConfirmPassword("eye")
        }
    };
    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity style={{ marginBottom: 10, padding: 10 }} onPress={() => navigation.pop()}>
                <Ionicons name="arrow-back-outline" size={34} color="white" />
            </TouchableOpacity>
            <View style={{ padding: 10 }}>
                <Text style={{ color: 'white', fontSize: 40, fontWeight: 'bold' }}>
                    Create Account
                </Text>
                <Text style={{ color: '#7282C0', fontSize: 18 }}>
                    Please fill your details here
                </Text>
            </View>
            <View style={{ marginTop: 50, alignItems: 'center', padding: 10 }}>
                <View style={styles.inputBg}>
                    <FontAwesome name="user" size={24} color="white" />
                    <TextInput
                        placeholder='UserName'
                        placeholderTextColor="white"
                        style={{
                            width: '100%',
                            fontSize: 20,
                            borderRadius: 22,
                            color: 'white'
                        }}
                    />
                </View>
                <View style={styles.inputBg}>
                    <Entypo name="mail" size={24} color="white" />
                    <TextInput
                        placeholder='Email'
                        placeholderTextColor="white"
                        style={{
                            width: '100%',
                            fontSize: 20,
                            borderRadius: 22,
                            color: 'white'
                        }}
                    />
                </View>
                <View style={styles.inputBg}>
                    <Entypo name="lock-open" size={24} color="white" />
                    <TextInput
                        placeholder='Password'
                        placeholderTextColor="white"
                        style={{
                            width: '87%',
                            fontSize: 20,
                            borderRadius: 22,
                            color: 'white'
                        }}
                        secureTextEntry={!passwordVisible}
                    />
                    <TouchableOpacity onPress={togglePasswordVisibility}><Ionicons name={eyePassword} size={24} color="white" /></TouchableOpacity>

                </View>
                <View style={styles.inputBg}>
                    <Entypo name="lock-open" size={24} color="white" />
                    <TextInput
                        placeholder='Confirm Password'
                        placeholderTextColor="white"
                        style={{
                            width: '87%',
                            fontSize: 20,
                            borderRadius: 22,
                            color: 'white'
                        }}
                        secureTextEntry={!confirmPasswordVisible}
                    />
                    <TouchableOpacity onPress={toggleConfirmPasswordVisibility}><Ionicons name={eyeConfirmPassword} size={24} color="white" /></TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate("login")}>
                    <Text style={{ fontSize: 30, color: 'white', fontWeight: 'bold' }} >Sign up</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ flexDirection: 'row', paddingVertical: 10 }} onPress={() => navigation.navigate("login")}>
                    <Text style={{ fontSize: 13, color: '#7282C0', fontWeight: 'bold' }}>Already have an account? </Text>
                    <Text style={{ fontSize: 13, color: '#fe8794', fontWeight: 'bold' }}>Login </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default SignUp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.darkBlue,
        padding: 10,
        paddingTop: 80
    }
    ,
    inputBg: {
        padding: 18,
        marginHorizontal: 10,
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#4D4C7D',
        borderRadius: 22,
        gap: 10

    },
    loginBtn: {
        width: '70%',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: "center",
        borderColor: '#3e4669',
        borderWidth: 4,
        height: 60,
        backgroundColor: '#fe8794',
        marginTop: 10
    }
})