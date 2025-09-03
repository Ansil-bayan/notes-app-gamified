import React, { useState } from 'react';
import axios from 'axios';

interface NoteFormProps {
  onNoteCreated: () => void;
}

const NoteForm: React.FC<NoteFormProps> = ({ onNoteCreated }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('/api/notes', { title, content });
      setTitle('');
      setContent('');
      onNoteCreated(); // Call the callback to refresh the note list
    } catch (error) {
      console.error('Error creating note:', error);
    }
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
