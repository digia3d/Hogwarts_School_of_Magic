import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

function HousePage({ house }) {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get(`https://hp-api.onrender.com/api/characters/house/${house}`)
      .then((response) => {
        setCharacters(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [house]);

  return (
    <div>
      {characters.map((character) => (
        <div className="character-card" key={character.id}>
          <p>{character.name}</p>
          <p>{character.house}</p>
          <p>{character.bloodStatus}</p>
          <p>{character.species}</p>
          <img src={character.image} alt={character.name} />
        </div>
      ))}
    </div>
  );
}

HousePage.propTypes = {
  house: PropTypes.string.isRequired,
};

export default HousePage;
