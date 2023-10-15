from fastapi import FastAPI
from fastapi.responses import HTMLResponse, JSONResponse
from pymongo import MongoClient
from typing import Optional

app = FastAPI()

# MongoDB setup
uri = "mongodb+srv://yousufkhan:qwertyuiop@cluster0.kincuxs.mongodb.net/?retryWrites=true&w=majority"
client = MongoClient(uri)
db = client["quizzes"]
collection = db["quiz"]

# Routes


@app.get("/", response_class=HTMLResponse)
def read_root():
    return """
    <html>
        <head>
            <title>Quiz App</title>
        </head>
        <body>
            <h1>Quiz App</h1>
            <div id="quiz-container"></div>

            <script>
                // Make an AJAX request to fetch quiz data
                fetch('/get_quiz_data')
                    .then(response => response.json())
                    .then(data => {
                        // Handle the retrieved data and update the DOM
                        console.log(data);
                    })
                    .catch(error => console.error('Error:', error));
            </script>
        </body>
    </html>
    """


@app.get("/get_quiz_data", response_class=JSONResponse)
def get_quiz_data():
    # Retrieve data from MongoDB
    # You should define retrieve_data function
    # data = retrieve_data({"title": "maths"})
    data = retrieve_data()
    return data


def retrieve_data(query={}):
    try:
        # Perform a query on the collection
        result = collection.find(query)

        # Check if any documents were found
        if result.count() > 0:
            documents = []
            for document in result:
                documents.append({
                    "Document ID": str(document["_id"]),
                    "Title": document["title"],
                    "Question Count": document["questionCount"],
                    "Questions": document["questions"]
                })
            return documents
        else:
            return {"message": "No documents found."}

    except Exception as e:
        return {"error": str(e)}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000, reload=True)
