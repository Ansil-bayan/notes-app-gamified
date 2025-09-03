import React, { useState, useEffect } from 'react';
import './App.css';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import ProgressDisplay from './components/ProgressDisplay';

const App: React.FC = () => {
  const [notes, setNotes] = useState<{
    id: string;
    title: string;
    content: string;
    created_at: string;
    updated_at: string;
  }[]>([]); // Centralized notes state
  const [userPoints, setUserPoints] = useState(0);

  useEffect(() => {
    // No backend fetch needed for frontend-only app
  }, []);

  const handleNoteAction = () => {
    setUserPoints(prevPoints => prevPoints + 10); // Award 10 points for each new note/action
  };

  return (
    <div className="App">
      <h1>Notes App</h1>
      <ProgressDisplay points={userPoints} />
      <NoteForm notes={notes} setNotes={setNotes} onNoteCreated={handleNoteAction} />
      <NoteList notes={notes} setNotes={setNotes} onNoteUpdated={handleNoteAction} />
    </div>
  );
}

export default App;
