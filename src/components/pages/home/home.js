import { React } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import Sparkles from 'react-sparkle';
import Slytherin from '../../../assets/images/Slytherin.png';
import Grifindor from '../../../assets/images/Grifindor.png';
import Hufflepuf from '../../../assets/images/Hufflepuf.png';
import Ravenclaw from '../../../assets/images/Ravenclaw.png';

function Home() {
  return (
    <>
      <section className="home-section">
        <Sparkles
          color="white"
          fadeOutSpeed={10}
          newSparkleOnFadeOut={false}
          flicker
          flickerSpeed="fast"
          count={80}
        />
        <h1 className="welcome-title">Hogwarts houses</h1>
        <div className="house-cards">
          <card>
            Grifindor
            <div>
              <img src={Grifindor} alt="grifindor" />
            </div>
          </card>
          <card>
            Ravenclaw
            <div>
              <img src={Ravenclaw} alt="ravenclaw" />
            </div>
          </card>
          <card>
            Hufflepuf
            <img src={Hufflepuf} alt="hafflepuf" />
          </card>
          <card>
            Slyterin
            <div className="imgH">
              <img src={Slytherin} alt="slytherin" />
            </div>
          </card>
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
