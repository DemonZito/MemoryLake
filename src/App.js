import React from 'react';
import './App.css';
import { NotesTable } from './components/NotesTable';
import { NavigationBar } from './components/Navbar';
import NotesReducer from './redux/notesReducer';
import { Navbar } from 'react-bootstrap';

const App = () => {
  return (
    <div className="App">
      <div>
      <NavigationBar />
      </div>
      </div>
  );
}

export default App;
//<div style={{ maxWidth: '70%', margin: 'auto' }}>
        //<NotesTable />