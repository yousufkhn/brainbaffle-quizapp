from pydantic import BaseModel
from typing import Annotated, Union


class User(BaseModel):
    username: str
    email: Union[str, None] = None
    password: str
    disabled: Union[bool, None] = None
