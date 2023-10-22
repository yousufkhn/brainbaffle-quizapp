from routes.quiz_routes import router
from fastapi import FastAPI
# from pymongo import MongoClient

app = FastAPI()

# MongoDB setup
# uri = "mongodb+srv://yousufkhan:qwertyuiop@cluster0.kincuxs.mongodb.net/?retryWrites=true&w=majority"
# client = MongoClient(uri)
# db = client["quizzes"]
# collection = db["quiz"]


app.include_router(router)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000, reload=True)
