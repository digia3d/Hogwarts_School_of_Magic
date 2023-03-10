import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/home';
import LandingPage from './components/leandingPage/landingPage';
import Quiz from './components/quiz/Quiz';
import HousePage from './components/housePage/HousePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" index element={<LandingPage />} />
        <Route path="/Home" index element={<Home />} />
        <Route path="/HousePage/:house" index element={<HousePage />} />
        <Route path="/Quiz" index element={<Quiz />} />
        <Route path="/LandingPage" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
