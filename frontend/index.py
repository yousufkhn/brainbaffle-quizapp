from pymongo.mongo_client import MongoClient

uri = "mongodb+srv://smallpan:ZRVSPTkDGxOLQWVR@cluster0.kincuxs.mongodb.net/?retryWrites=true&w=majority"

client = MongoClient(uri)

try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)


database_name = "yourDatabaseName"
collection_name = "yourCollectionName"

db = client[database_name]
collection = db[collection_name]

new_document = {"5": "2"}
insert_result = collection.insert_one(new_document)
print(f"Inserted document with ID: {insert_result.inserted_id}")
