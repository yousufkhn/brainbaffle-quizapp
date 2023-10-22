from pymongo import MongoClient

# MongoDB setup
uri = "mongodb+srv://yousufkhan:qwertyuiop@cluster0.kincuxs.mongodb.net/?retryWrites=true&w=majority"
client = MongoClient(uri)
db = client["quizzes"]
collection = db["quiz"]
