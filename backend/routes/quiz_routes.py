from fastapi import APIRouter, Depends, FastAPI
from typing import Annotated
from fastapi.responses import HTMLResponse, JSONResponse
from fastapi.security import OAuth2PasswordBearer
from models.quiz_model import QuizData
from controllers.quiz_controller import retrieve_data, send_data, get_current_user
from models.user_models import User

router = APIRouter()

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")


@router.get("/", response_class=HTMLResponse)
def read_root():
    return """<h1>QuizApp</h1>"""


@router.get("/get_quiz_data", response_class=JSONResponse)
def get_quiz_data(token: Annotated[str, Depends(oauth2_scheme)]):
    data = retrieve_data()
    return data


@router.post("/send_quiz_data", response_class=JSONResponse)
def send_quiz_data(data: QuizData):
    result = send_data(data)
    return result


@router.get("/users/me")
async def read_users_me(current_user: Annotated[User, Depends(get_current_user)]):
    return current_user
