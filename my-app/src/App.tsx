import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'
import CardHolder from './components/cardHolder';
import { EventsData } from './data/EventsData';
import Eventdetails from './components/Eventdetails';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <header className="App-header">Every Event &#128567;</header>
      <section className="main-content">
          <Routes>
            <Route path="/" element={ <CardHolder events={EventsData} />}></Route>
            <Route path="/event/:id" element={<Eventdetails Events={EventsData} />}></Route>
          </Routes>
        </section>

    </Router>
    </div>
  )
}

export default App;
