import { Animated, Dimensions, FlatList, Modal, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'
// import { QuizData } from '../data/dataConverter'
import { SafeAreaView } from 'react-native-safe-area-context'
import QuestionItem from '../components/QuestionItem/QuestionItem'
const { height, width } = Dimensions.get('window')
import LottieView from 'lottie-react-native';
import { LinearGradient } from 'expo-linear-gradient';

const QuizScreen = ({ route, fetchedQuizData }) => {
  const QuizData = fetchedQuizData
  const { subject } = route.params;
  const [currentIndex, setCurrentIndex] = useState(1);
  const [questions, setQuestions] = useState(QuizData[subject].questions)
  const listRef = useRef()
  const [modalVisible, setModalVisible] = useState(false)
  const onSelectOption = (index, x) => {
    const tempData = questions;
    tempData.map((item, indx) => {
      if (index == indx) {
        item.marked = x;
      }
    })
    let temp = []
    tempData.map(item => {
      temp.push(item)
    })
    setQuestions(temp)
  }
  const getTextScore = () => {
    let marks = 0;
    questions.map(item => {
      if (item.marked !== -1 && item.marked == item.correct) {
        marks = marks + 1;
      }
    });
    return marks;
  };


  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.quizHeading]} >
        <Text style={{ fontSize: 35, color: 'white', fontWeight: 'bold' }}>
          {subject}
        </Text>
      </View>
      <LinearGradient style={styles.questionCount} colors={['#fd4f6a', '#b46ef8']} start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }} >
        <Text style={{ fontSize: 15, color: 'white', fontWeight: 'bold' }}>Question </Text>
        <Text style={{ fontSize: 15, color: 'white', fontWeight: 'bold' }}>{currentIndex}/{questions.length}</Text>
      </LinearGradient>

      <View style={styles.question}>
        <FlatList
          ref={listRef}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          horizontal
          onScroll={e => {
            const x = e.nativeEvent.contentOffset.x / width + 1
            setCurrentIndex((x).toFixed(0))
          }}
          data={questions}
          renderItem={({ item, index }) => {
            return (
              <QuestionItem data={item} selectedOption={(x) => {
                onSelectOption(index, x)
              }} />
            )
          }}></FlatList>
      </View>
      <View style={styles.buttons}>
        {currentIndex == 1 ? null : <TouchableOpacity style={styles.button} onPress={() => {
          if (currentIndex > 1) {
            listRef.current.scrollToIndex({ animated: true, index: parseInt(currentIndex) - 2 })
          }
        }}>
          <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }} >Prev</Text>
        </TouchableOpacity>}

        {currentIndex == questions.length ?
          <TouchableOpacity style={styles.SubmitButton} onPress={() => {
            setModalVisible(true);
          }}>
            <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }} >Submit</Text>
          </TouchableOpacity>
          : <TouchableOpacity style={styles.button} onPress={() => {
            if (currentIndex < questions.length) {
              listRef.current.scrollToIndex({ animated: true, index: parseInt(currentIndex) })
            }

          }}>
            <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>Next</Text>
          </TouchableOpacity>}

      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,.5)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: '#fff',
              width: '90%',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
            }}>
            <Text
              style={{
                fontSize: 30,
                fontWeight: '800',
                alignSelf: 'center',
                marginTop: 20,
              }}>
              Score
            </Text>
            <LottieView
              autoPlay
              style={{
                width: 250,
                height: 250,
                backgroundColor: '#eee',
              }}
              source={require('../assets/lottie/result.json')}
            />

            <Text
              style={{
                fontSize: 50,
                fontWeight: '800',
                alignSelf: 'center',
                color: 'green',
              }}>
              {getTextScore() + "/" + questions.length}
            </Text>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
              style={{
                alignSelf: 'center',
                height: 50,
                justifyContent: 'center',
                paddingHorizontal: 30,
                borderWidth: 2,
                borderRadius: 10,
                marginTop: 20,
                marginBottom: 20,
                borderColor: '#ff9497',
                backgroundColor: '#ff3d59'
              }}
            >
              <Text style={{ fontSize: 20, color: 'white' }}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView >
  )
}

export default QuizScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202849'
  },
  quizHeading: {
    flex: 1.2,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#6a5ae0',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,

  },
  questionCount: {
    flex: 0.6,
    flexDirection: 'row',
    backgroundColor: "#6a5ae0",
    marginTop: 20,
    marginBottom: 30,
    marginHorizontal: 10,
    borderRadius: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderWidth: 5,
    borderColor: '#3e4669',
  },
  question: {
    flex: 7
  },
  buttons: {
    flex: 0.5,
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
    backgroundColor: "#202849",
  },
  button: {
    flex: 1,
    paddingHorizontal: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: "center",
    borderColor: '#3e4669',
    borderWidth: 4,
    marginHorizontal: 5,
    height: 50,
    backgroundColor: '#077fec'
  },
  SubmitButton: {
    flex: 1,
    paddingHorizontal: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: "center",
    borderColor: '#3e4669',
    borderWidth: 4,
    marginHorizontal: 5,
    height: 50,
    backgroundColor: '#17d776'
  }
})