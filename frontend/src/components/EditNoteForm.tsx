import React, { useState } from 'react';
import axios from 'axios';

interface Note {
  id: string;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
}

interface EditNoteFormProps {
  note: Note;
  onNoteUpdated: () => void;
}

const EditNoteForm: React.FC<EditNoteFormProps> = ({ note, onNoteUpdated }) => {
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.put(`/api/notes/${note.id}`, { title, content, updated_at: new Date().toISOString() });
      onNoteUpdated();
    } catch (error) {
      console.error('Error updating note:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="edit-note-form">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button type="submit">Save</button>
      <button type="button" onClick={onNoteUpdated}>Cancel</button>
    </form>
  );
};

export default EditNoteForm;
