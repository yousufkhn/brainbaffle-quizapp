import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import QuizScreen from './screens/QuizScreen';
import ProfileScreen from './screens/ProfileScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import axios from 'axios';
import AddQuiz from './screens/AddQuiz';
import Bar from './screens/Bar';
import Login from './screens/auth/Login';
import SignUp from './screens/auth/SignUp';

const Stack = createNativeStackNavigator();



export default function App() {


  const [fetchedQuizData, setFetchQuizData] = useState([])

  const fetchData = async () => {
    try {
      const response = await axios.get('https://quizapp-utxw.onrender.com/get_quiz_data');
      const data = response.data;

      // Convert data to the desired format
      const convertedData = convertToNewFormat(data);

      // Set the converted data to state
      setFetchQuizData(convertedData);
    } catch (error) {
      console.error('Error fetching or converting data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const convertToNewFormat = (data) => {
    const convertedData = {};

    data.forEach((quiz) => {
      const { Title, QuestionCount, Questions } = quiz;

      const convertedQuiz = {
        title: Title.toLowerCase(),
        questionCount: QuestionCount,
        questions: Questions.map((question) => {
          const { question: q, Options, correct, marked } = question;

          return {
            question: q,
            Options,
            correct,
            marked,
          };
        }),
      };

      convertedData[convertedQuiz.title] = convertedQuiz;
    });

    return convertedData;
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false, animation: 'slide_from_right' }}>
        <Stack.Screen name='login'>
          {(props) => <Login {...props} />}
        </Stack.Screen>
        <Stack.Screen name='signup'>
          {(props) => <SignUp {...props} />}
        </Stack.Screen>
        <Stack.Screen name='home'>
          {(props) => <HomeScreen {...props} fetchedQuizData={fetchedQuizData} />}
        </Stack.Screen>
        <Stack.Screen name='quiz'>
          {(props) => <QuizScreen {...props} fetchedQuizData={fetchedQuizData} />}
        </Stack.Screen>
        <Stack.Screen name='profile' component={ProfileScreen} />
        <Stack.Screen name='addQuiz'>
          {(props) => <AddQuiz {...props} fetchData={fetchData} />}
        </Stack.Screen>
        <Stack.Screen name='bar' component={Bar} />

      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
