import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import NoteApp from './app/noteapp/NoteApp';
import Editor from './app/noteapp/Editor';


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<NoteApp />} />
        <Route path="/editor/:noteId" element={<Editor />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

