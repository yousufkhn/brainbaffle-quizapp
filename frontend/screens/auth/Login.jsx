import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../../metrics/color'
import AnimatedLottieView from 'lottie-react-native'
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Login = ({ navigation }) => {

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [eyePassword, setEyePassword] = useState('eye');

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
        if (eyePassword === "eye") {
            setEyePassword("eye-off")
        }
        else {
            setEyePassword("eye")
        }
    };

    return (

        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={{ alignItems: 'center' }}>
                    <AnimatedLottieView
                        autoPlay
                        style={{
                            width: '90%',
                        }}
                        source={require('../../assets/lottie/login.json')}
                    />
                </View>
                <View style={styles.header}>
                    <Text style={{ color: 'white', fontSize: 40, fontWeight: 'bold' }}>Login</Text>
                    <Text style={{ color: '#7282C0', fontSize: 18 }}>Please sign in to continue</Text>
                </View>
                <View style={{ marginTop: 20, justifyContent: 'center', alignItems: 'center', padding: 10 }}>
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
                    <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate("home")}>
                        <Text style={{ fontSize: 30, color: 'white', fontWeight: 'bold' }} >Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', paddingVertical: 10 }} onPress={() => navigation.navigate("signup")}>
                        <Text style={{ fontSize: 13, color: '#7282C0', fontWeight: 'bold' }}>Don't have an account? </Text>
                        <Text style={{ fontSize: 13, color: '#fe8794', fontWeight: 'bold' }}>Sign up </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>

    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        paddingVertical: 40,
        backgroundColor: colors.darkBlue,

    },
    header: {
        textAlign: 'left',
        flex: 0.5
    },
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