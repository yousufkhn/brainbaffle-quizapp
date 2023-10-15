from pymongo.mongo_client import MongoClient
import json

uri = "mongodb+srv://yousufkhan:qwertyuiop@cluster0.kincuxs.mongodb.net/?retryWrites=true&w=majority"

# Create a new client and connect to the server
client = MongoClient(uri)

# Send a ping to confirm a successful connection
try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)

db = client["quizzes"]
collection = db["quiz"]


def add_document(data):
    try:
        # Insert the document into the collection
        result = collection.insert_one(data)

        # Check if the insertion was successful
        if result.inserted_id:
            print("Document added successfully. ID:", result.inserted_id)
        else:
            print("Failed to add document.")
    except Exception as e:
        print("Error:", e)


example_data = {
    "Document ID": "6528df1accadfdb062349329",
    "title": "React Native",
    "questionCount": 5,
    "questions": [
        {
            "question": "What is React Native used for?",
            "Options": [
                "Building web applications",
                "Building mobile applications",
                "Building desktop applications",
                "Building server-side applications"
            ],
            "correct": 2,
            "marked": -1
        },
        {
            "question": "Which of the following is not a core component in React Native?",
            "Options": ["View", "Text", "Image", "Button"],
            "correct": 4,
            "marked": -1
        },
        {
            "question": "What is the purpose of the 'useState' hook in React Native?",
            "Options": [
                "To handle network requests",
                "To manage and update component state",
                "To create animations",
                "To handle navigation"
            ],
            "correct": 2,
            "marked": -1
        },
        {
            "question": "Which command is used to create a new React Native project?",
            "Options": [
                "create-react-native-app",
                "npm init react-native",
                "react-native init",
                "npm create-react-native"
            ],
            "correct": 3,
            "marked": -1
        },
        {
            "question": "In React Native, how can you navigate between screens?",
            "Options": [
                "Using the 'navigate' method",
                "Using the 'goTo' function",
                "Using the 'switchScreen' function",
                "Using the 'moveTo' method"
            ],
            "correct": 1,
            "marked": -1
        }
    ]
}


def retrieve_data(query={}):
    try:
        # Perform a query on the collection
        result = collection.find(query)

        # Check if any documents were found
        if result.count() > 0:
            for document in result:
                print("Document ID:", document["_id"])
                print("Title:", document["title"])
                print("Question Count:", document["questionCount"])
                print("Questions:")
                for question in document["questions"]:
                    print("\tQuestion:", question["question"])
                    print("\tOptions:", question["Options"])
                    print("\tCorrect Option:", question["correct"])
                    print("\tMarked Option:", question["marked"])
                    print("\n")
        else:
            print("No documents found.")

    except Exception as e:
        print("Error:", e)


# Example usage
# Retrieve all documents
# retrieve_data()

# Retrieve documents with a specific title
# retrieve_data({"title": "maths"})


add_document(example_data)
