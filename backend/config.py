from dotenv import load_dotenv
import os

load_dotenv()

MONGO_URL = os.getenv("MONGO_URL", "mongodb+srv://ansilbayan:ansilbayan123@cluster0.jdlbnyn.mongodb.net/notesapp?retryWrites=true&w=majority&appName=Cluster0")
MONGO_DB_NAME = os.getenv("MONGO_DB_NAME", "notesapp")
