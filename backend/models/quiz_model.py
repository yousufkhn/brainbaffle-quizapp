from pydantic import BaseModel


class QuizData(BaseModel):
    title: str
    questionCount: int
    questions: list
