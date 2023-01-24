import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import Sparkles from 'react-sparkle';
import Slytherin from '../../../assets/images/Slytherin.png';
import Gryffindor from '../../../assets/images/Gryffindor.png';
import Hufflepuff from '../../../assets/images/Hufflepuff.png';
import Ravenclaw from '../../../assets/images/Ravenclaw.png';

function Home() {
  return (
    <>
      <section className="home-section">
        <Sparkles
          color="white"
          minSize={7}
          maxSize={12}
          overflowPx={80}
          fadeOutSpeed={30}
          flicker={false}
          count={120}
        />
        <h1 className="welcome-title">Hogwarts houses</h1>
        <div className="house-cards">
          <div>
            <Link to={{
              pathname: '/house',
              state: { house: 'Gryffindor' },
            }}
            >
              <img src={Gryffindor} alt="Gryffindor" />
              <p>Gryffindor</p>
            </Link>
          </div>
          <div>
            <Link to={{
              pathname: '/house',
              state: { house: 'Ravenclaw' },
            }}
            >
              <img src={Ravenclaw} alt="Ravenclaw" />
              <p>Ravenclaw</p>
            </Link>
          </div>
          <div>
            <Link to={{
              pathname: '/house',
              state: { house: 'Hufflepuff' },
            }}
            >
              <img src={Hufflepuff} alt="Hufflepuff" />
              <p>Hufflepuff</p>
            </Link>
          </div>
          <div>
            <Link to={{
              pathname: '/house',
              state: { house: 'Slytherin' },
            }}
            >
              <img src={Slytherin} alt="Slytherin" />
              <p>Slytherin</p>
            </Link>
          </div>
        </div>
        <div className="btn-container">
          <p>In which house do you belong?</p>
          <Link to="/Quiz" type="button">Sorting Hat</Link>
        </div>
      </section>
    </>
  );
}

export default Home;
