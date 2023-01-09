import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/home/home';
import LandingPage from './components/pages/leandingPage/landingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" index element={<LandingPage />} />
        <Route path="/Home" index element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
