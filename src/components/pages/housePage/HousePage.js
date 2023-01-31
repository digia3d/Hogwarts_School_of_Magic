import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './HousePage.css';

function HousePage() {
  const [characters, setCharacters] = useState([]);
  const { house } = useParams();

  useEffect(() => {
    axios
      .get(`https://hp-api.onrender.com/api/characters/house/${house}`)
      .then((response) => {
        setCharacters(response.data.slice(0, 10));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [house]);

  return (
    <div className="house-page">
      {characters.map((character) => (
        <div className="character-card" key={character.id}>
          <p>{character.name}</p>
          <p>{character.house}</p>
          <p>{character.bloodStatus}</p>
          <p>{character.species}</p>
          <p>{character.dateOfBirth}</p>
          <p>{character.ancestry}</p>
          <p>{character.patronus}</p>
          <p>{character.actor}</p>
          <p>{character.alive}</p>
          <p>
            Wood:
            {character.wand.wood}
          </p>
          <p>
            Core:
            {character.wand.core}
          </p>
          <p>
            Length:
            {character.wand.length}
          </p>
          <div className="image-container">
            <img className="charimg" src={character.image} alt={character.name} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default HousePage;
