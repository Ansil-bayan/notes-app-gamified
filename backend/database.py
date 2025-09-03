from motor.motor_asyncio import AsyncIOMotorClient
from odmantic import AIOEngine
from .config import MONGO_URL, MONGO_DB_NAME

class DataBase:
    client: AsyncIOMotorClient = None
    engine: AIOEngine = None

db = DataBase()

async def connect_db():
    print(f"Attempting to connect to MongoDB at: {MONGO_URL} with database: {MONGO_DB_NAME}")
    try:
        db.client = AsyncIOMotorClient(MONGO_URL)
        await db.client.admin.command('ping') # Test connection
        db.engine = AIOEngine(client=db.client, database=MONGO_DB_NAME)
        print("Successfully connected to MongoDB!")
    except Exception as e:
        print(f"Failed to connect to MongoDB: {e}")
        raise # Re-raise to stop the app if connection fails

async def close_db():
    if db.client:
        db.client.close()
        print("MongoDB connection closed.")
