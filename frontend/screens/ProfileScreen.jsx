import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AnimatedCircularProgress } from 'react-native-circular-progress'


const ProfileScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View>
                    <Ionicons style={{ margin: 10 }} name="arrow-back-sharp" size={50} color="#077fec" onPress={() => navigation.navigate("home")} />
                </View>
                <View style={styles.profileHeader}>
                    <View>
                        <Ionicons name="person-circle-outline" size={120} color="white" />
                    </View>
                    <View>
                        <Text style={{ color: 'white', fontSize: 30, textAlign: "center", fontWeight: 'bold' }}>Yousuf Khan</Text>
                        <Text style={{ color: '#7282C0', fontSize: 15, textAlign: "center" }}>khanyousuf2144@gmail.com</Text>
                    </View>
                </View>
                <View style={styles.timeStat}>
                    <View>
                        <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>
                            This week's learning time
                        </Text>
                        <Text style={{ color: 'white', fontSize: 40, fontWeight: 'bold' }}>
                            4h 30m
                        </Text>
                        <Text style={{ color: 'white', fontSize: 15 }}>
                            Keep Going!
                        </Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <AnimatedCircularProgress
                            size={100}
                            width={12}
                            fill={80}
                            rotation={360}
                            tintColor={'#2ecc71'}
                            backgroundColor="#ffffff87"
                        />
                        <Text style={{ position: 'absolute', justifyContent: "center", color: 'white', fontSize: 25, fontWeight: '500' }}>80%</Text>
                    </View>
                </View>
                <View style={styles.stats}>
                    <View style={styles.stat1}>
                        <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }}>Quizzes Taken</Text>
                        <Text style={{ color: 'white', fontSize: 50, fontWeight: 'bold' }}>56</Text>
                        <Text style={{ color: 'white', fontSize: 15 }}>in this year</Text>
                    </View>
                    <View style={styles.stat2}>
                        <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }}>Time Spent</Text>
                        <Text style={{ color: 'white', fontSize: 50, fontWeight: 'bold' }}>32 </Text>
                        <Text style={{ color: 'white', fontSize: 15 }}>hours</Text>
                    </View>
                    <View style={styles.stat3}>
                        <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }}>Average Score</Text>
                        <Text style={{ color: 'white', fontSize: 50, fontWeight: 'bold' }}>90%</Text>
                        <Text style={{ color: 'white', fontSize: 15 }}>all tests</Text>
                    </View>
                    <View style={styles.stat4}>
                        <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }}>Quizzes Taken</Text>
                        <Text style={{ color: 'white', fontSize: 50, fontWeight: 'bold' }}>56</Text>
                        <Text style={{ color: 'white', fontSize: 15 }}>in this year</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#202849'
    },
    profileHeader: {
        flex: 1,
        alignItems: 'center',
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: "space-between",
        marginHorizontal: 20,
    },
    timeStat: {
        backgroundColor: '#2C3763',
        flexDirection: 'row',
        padding: 20,
        paddingVertical: 40,
        margin: 15,
        borderRadius: 8,
        justifyContent: 'space-around'
    },
    stats: {
        flex: 2
    },
    stat1: {
        flex: 1,
        backgroundColor: '#ff2c55',
        justifyContent: "center",
        alignItems: 'center',
        margin: 10,
        marginHorizontal: 20,
        borderRadius: 8,
        padding: 10
    },
    stat2: {
        flex: 1,
        backgroundColor: '#504fc8',
        justifyContent: "center",
        alignItems: 'center',
        margin: 10,
        marginHorizontal: 20,
        borderRadius: 8,
        padding: 10
    },
    stat3: {
        flex: 1,
        backgroundColor: '#4de3c1',
        justifyContent: "center",
        alignItems: 'center',
        margin: 10,
        marginHorizontal: 20,
        borderRadius: 8,
        padding: 10
    },
    stat4: {
        flex: 1,
        backgroundColor: '#ff8b00',
        justifyContent: "center",
        alignItems: 'center',
        margin: 10,
        marginHorizontal: 20,
        borderRadius: 8,
        padding: 10
    },
})