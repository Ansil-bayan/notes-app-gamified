import React, { useState } from 'react';
// import axios from 'axios'; // No longer needed for frontend-only

interface Note {
  id: string;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
}

interface EditNoteFormProps {
  note: Note;
  onNoteUpdated: (updatedNote: Note) => void; // Expects the updated note to be passed back
}

const EditNoteForm: React.FC<EditNoteFormProps> = ({ note, onNoteUpdated }) => {
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const updatedNote: Note = {
      ...note,
      title,
      content,
      updated_at: new Date().toISOString(),
    };

    // Immediately update local state
    onNoteUpdated(updatedNote); // Pass the updated note back to the parent

    console.warn("Note updated in browser's memory (not persistent).");
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
      <button type="button" onClick={() => onNoteUpdated(note)}>Cancel</button> {/* Pass original note on cancel */}
    </form>
  );
};

export default EditNoteForm;
