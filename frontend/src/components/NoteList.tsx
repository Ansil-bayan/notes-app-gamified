import React, { useState, useEffect } from 'react';
// import axios from 'axios'; // No longer needed for frontend-only
import EditNoteForm from './EditNoteForm';

interface Note {
  id: string;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
}

interface NoteListProps {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
  onNoteUpdated: () => void;
}

const NoteList: React.FC<NoteListProps> = ({ notes, setNotes, onNoteUpdated }) => {
  const [editingNoteId, setEditingNoteId] = useState<string | null>(null);

  useEffect(() => {
    // Re-render when notes array changes (handled by App.tsx's state)
  }, [notes]);

  const handleDelete = (id: string) => {
    // Remove note from local state immediately
    setNotes(notes.filter(note => note.id !== id));
    onNoteUpdated(); // Trigger points update

    console.warn("Note deleted from browser's memory (not persistent).");
  };

  const handleEdit = (id: string) => {
    setEditingNoteId(id);
  };

  const handleNoteUpdatedLocally = (updatedNote: Note) => {
    setNotes(prevNotes =>
      prevNotes.map(note => (note.id === updatedNote.id ? updatedNote : note))
    );
    setEditingNoteId(null); // Exit editing mode
    onNoteUpdated(); // Trigger points update

    console.warn("Note updated in browser's memory (not persistent).");
  };

  return (
    <div>
      <h2>Notes</h2>
      {notes.length === 0 ? (
        <p>No notes yet. Start adding some!</p>
      ) : (
        notes.map((note) => (
          <div key={note.id} className="note-item">
            {editingNoteId === note.id ? (
              <EditNoteForm note={note} onNoteUpdated={handleNoteUpdatedLocally} />
            ) : (
              <>
                <h3>{note.title}</h3>
                <p>{note.content}</p>
                <small>Created: {new Date(note.created_at).toLocaleString()}</small><br/>
                <small>Updated: {new Date(note.updated_at).toLocaleString()}</small>
                <button onClick={() => handleEdit(note.id)}>Edit</button>
                <button onClick={() => handleDelete(note.id)}>Delete</button>
              </>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default NoteList;
