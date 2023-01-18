import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';

import './landingPage.css';

function LandingPage() {
  return (
    <>
      <main>
        <div className="leanding-img">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <h1>WELCOME TO HOGWARTS</h1>
          <Link to="/Home">
            <span>Enter</span>
          </Link>
        </div>
      </main>
    </>
  );
}

export default LandingPage;
