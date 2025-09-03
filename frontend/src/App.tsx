import React, { useState } from 'react';
import './App.css';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import ProgressDisplay from './components/ProgressDisplay';

const App: React.FC = () => {
  const [refreshNotes, setRefreshNotes] = useState(false);
  const [userPoints, setUserPoints] = useState(0); // New state for user points

  const handleNoteCreated = () => {
    setRefreshNotes(!refreshNotes);
    setUserPoints(prevPoints => prevPoints + 10); // Award 10 points for each new note
  };

  return (
    <div className="App">
      <h1>Notes App</h1>
      <ProgressDisplay points={userPoints} />
      <NoteForm onNoteCreated={handleNoteCreated} />
      <NoteList onNoteCreated={handleNoteCreated} />
    </div>
  );
}

export default App;
