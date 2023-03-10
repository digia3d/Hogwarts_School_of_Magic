import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './home.css';
import Sparkles from 'react-sparkle';
import Slytherin from '../../assets/images/Slytherin.png';
import Gryffindor from '../../assets/images/Gryffindor.png';
import Hufflepuff from '../../assets/images/Hufflepuff.png';
import Ravenclaw from '../../assets/images/Ravenclaw.png';
import hpSound from '../../assets/audio/hpSound.mp3';
import { fetchCharactersByHouse } from '../../redux/actions/characters';

const houses = ['Gryffindor', 'Ravenclaw', 'Hufflepuff', 'Slytherin'];
const houseImages = {
  Gryffindor,
  Ravenclaw,
  Hufflepuff,
  Slytherin,
};

function Home() {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters);
  const audioRef = useRef(null);
  const [audioPlaying, setAudioPlaying] = useState(false);

  useEffect(() => {
    if (characters && characters.house) {
      dispatch(fetchCharactersByHouse(characters.house));
    }
  }, [dispatch, characters.house]);

  useEffect(() => {
    if (!audioPlaying) {
      setAudioPlaying(true);
      audioRef.current.play();
    }
  }, [audioPlaying, audioRef]);

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
        <h1 className="welcome-title">
          <Link to="/landingPage" className="back" href="/LandingPage">
            <span className="material-symbols-outlined">arrow_back_ios</span>
          </Link>
          Hogwarts houses
        </h1>
        <div className="house-cards">
          {houses.map((house) => (
            <div key={house}>
              <Link
                to={{
                  pathname: `/HousePage/${house}`,
                  state: { house },
                }}
                onClick={() => dispatch(fetchCharactersByHouse(house))}
              >
                <img src={houseImages[house]} alt={house} />
              </Link>
            </div>
          ))}
        </div>
        <div className="btn-container">
          <p className="hat-question">In which house do you belong?</p>
        </div>
        <div className="quiz-link">
          <Link to="/Quiz" type="button">
            <p className="sorting">Sorting Hat</p>
            <img
              src="https://media.giphy.com/media/9EnuwMN4qxFoDfnJam/giphy.gif"
              alt="Sorting Hat Animation"
            />
          </Link>
        </div>
        <audio ref={audioRef} src={hpSound} autoPlay loop>
          <track kind="captions" />
        </audio>
      </section>
    </>
  );
}

export default Home;
