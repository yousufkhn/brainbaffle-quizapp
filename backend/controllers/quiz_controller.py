from db import collection
from models.user_models import User
from typing import Annotated, Union
from fastapi import Depends, FastAPI
from fastapi.security import OAuth2PasswordBearer


oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")


def retrieve_data(query={}):
    try:
        # Perform a query on the collection
        result = collection.find(query)

        # Check if any documents were found
        documents = []
        print(type(result))
        for document in result:
            documents.append({
                "Document ID": str(document["_id"]),
                "Title": document["title"],
                "Question Count": document["questionCount"],
                "Questions": document["questions"]
            })
        return documents

    except Exception as e:
        return {"error": str(e)}


def send_data(data):
    collection.insert_one(data.dict())


def fake_decode_token(token):
    return User(
        username=token + "fakedecoded", email="john@example.com", full_name="John Doe"
    )


async def get_current_user(token: Annotated[str, Depends(oauth2_scheme)]):
    user = fake_decode_token(token)
    return user
