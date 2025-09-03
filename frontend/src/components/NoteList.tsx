import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EditNoteForm from './EditNoteForm';

interface Note {
  id: string;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
}

interface NoteListProps {
  onNoteCreated: () => void;
}

const NoteList: React.FC<NoteListProps> = ({ onNoteCreated }) => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [editingNoteId, setEditingNoteId] = useState<string | null>(null);

  useEffect(() => {
    fetchNotes();
  }, [onNoteCreated]); // Re-fetch notes when a new note is created

  const fetchNotes = async () => {
    try {
      const response = await axios.get<Note[]>('/api/notes');
      setNotes(response.data);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`/api/notes/${id}`);
      fetchNotes(); // Refresh the list after deletion
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  const handleEdit = (id: string) => {
    setEditingNoteId(id);
  };

  const handleNoteUpdated = () => {
    setEditingNoteId(null); // Exit editing mode
    fetchNotes(); // Refresh the list after update
  };

  return (
    <div>
      <h2>Notes</h2>
      {notes.map((note) => (
        <div key={note.id} className="note-item">
          {editingNoteId === note.id ? (
            <EditNoteForm note={note} onNoteUpdated={handleNoteUpdated} />
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
      ))}
    </div>
  );
};

export default NoteList;
