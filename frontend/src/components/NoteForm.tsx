import React, { useState } from 'react';
// import axios from 'axios'; // No longer needed for frontend-only

interface Note {
  id: string;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
}

interface NoteFormProps {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
  onNoteCreated: () => void;
}

const NoteForm: React.FC<NoteFormProps> = ({ notes, setNotes, onNoteCreated }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newNote: Note = {
      id: Date.now().toString(), // Unique ID for local notes
      title,
      content,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    // Add note to local state immediately
    setNotes(prevNotes => [...prevNotes, newNote]);
    setTitle('');
    setContent('');
    onNoteCreated(); // Trigger points update

    console.warn("Note added to browser's memory (not persistent).");
  };

  return (
    <div>
      <h2>Create Note</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Note</button>
      </form>
    </div>
  );
};

export default NoteForm;
