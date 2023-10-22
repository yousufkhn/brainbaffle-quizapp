from db import collection


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
