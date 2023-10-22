from fastapi import APIRouter
from fastapi.responses import HTMLResponse, JSONResponse
from models.quiz_model import QuizData
from controllers.quiz_controller import retrieve_data, send_data

router = APIRouter()


@router.get("/", response_class=HTMLResponse)
def read_root():
    return """<h1>QuizApp</h1>"""


@router.get("/get_quiz_data", response_class=JSONResponse)
def get_quiz_data():
    data = retrieve_data()
    return data


@router.post("/send_quiz_data", response_class=JSONResponse)
def send_quiz_data(data: QuizData):
    result = send_data(data)
    return result
