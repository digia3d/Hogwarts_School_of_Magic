import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './home.css';
import Sparkles from 'react-sparkle';
import Slytherin from '../../../assets/images/Slytherin.png';
import Gryffindor from '../../../assets/images/Gryffindor.png';
import Hufflepuff from '../../../assets/images/Hufflepuff.png';
import Ravenclaw from '../../../assets/images/Ravenclaw.png';
import { fetchCharactersByHouse } from '../../../redux/actions/characters';

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

  useEffect(() => {
    if (characters && characters.house) {
      dispatch(fetchCharactersByHouse(characters.house));
    }
  }, [dispatch, characters.house]);

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
                <p>{ house }</p>
              </Link>
            </div>
          ))}
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
