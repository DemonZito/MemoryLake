import React from 'react';
import './App.css';
import { NavigationBar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import NotesReducer from './redux/notesReducer';
import { Col, Row } from 'react-bootstrap';

const App = () => {
  return (
    <>
      <NavigationBar />
      <HeroSection />
    </>
  );
}

export default App;
