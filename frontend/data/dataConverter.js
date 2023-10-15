import data from "./quizData.json";

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


const QuizData = convertToNewFormat(data);
export { QuizData };
