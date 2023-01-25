import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/home/home';
import LandingPage from './components/pages/leandingPage/landingPage';
import Quiz from './components/pages/quiz/Quiz';
import HousePage from './components/pages/housePage/HousePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" index element={<LandingPage />} />
        <Route path="/Home" index element={<Home />} />
        <Route path="/HousePage/:house" component={HousePage} />
        <Route path="/Quiz" index element={<Quiz />} />
      </Routes>
    </Router>
  );
}

export default App;
