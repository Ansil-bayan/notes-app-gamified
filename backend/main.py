from typing import List

from fastapi import FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from odmantic import ObjectId

from .database import connect_db, close_db, db
from .models import Note

app = FastAPI()

origins = [
    "http://localhost:3000",  # React app default port
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
async def startup_db_client():
    await connect_db()

@app.on_event("shutdown")
async def shutdown_db_client():
    await close_db()

@app.get("/")
async def root():
    return {"message": "Notes App Backend"}


@app.post("/notes", response_model=Note, status_code=status.HTTP_201_CREATED)
async def create_note(note: Note):
    await db.engine.save(note)
    return note

@app.get("/notes", response_model=List[Note])
async def get_all_notes():
    notes = await db.engine.find(Note)
    return notes

@app.get("/notes/{id}", response_model=Note)
async def get_note_by_id(id: ObjectId):
    note = await db.engine.find_one(Note, Note.id == id)
    if note is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Note not found")
    return note

@app.put("/notes/{id}", response_model=Note)
async def update_note(id: ObjectId, note_update: Note):
    note = await db.engine.find_one(Note, Note.id == id)
    if note is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Note not found")
    note.title = note_update.title
    note.content = note_update.content
    note.updated_at = note_update.updated_at
    await db.engine.save(note)
    return note

@app.delete("/notes/{id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_note(id: ObjectId):
    note = await db.engine.find_one(Note, Note.id == id)
    if note is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Note not found")
    await db.engine.delete(note)
    return
