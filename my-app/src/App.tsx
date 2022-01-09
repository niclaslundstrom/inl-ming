import React from 'react';
import CardHolder from './components/cardHolder';
import { EventsData } from './data/EventsData';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">Every Event Meetups &#128567;</header>
    <CardHolder events={EventsData}  />
    </div>
  )
}

export default App;
