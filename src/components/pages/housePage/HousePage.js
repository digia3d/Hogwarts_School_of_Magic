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
        <div className="character-card grid-container" key={character.id}>
          <p className="grid-item"><strong>Name:</strong></p>
          <p className="grid-item">{character.name}</p>
          <p className="grid-item"><strong>House:</strong></p>
          <p className="grid-item">{character.house}</p>
          <p className="grid-item"><strong>Blood Status:</strong></p>
          <p className="grid-item">{character.bloodStatus}</p>
          <p className="grid-item"><strong>Species:</strong></p>
          <p className="grid-item">{character.species}</p>
          <p className="grid-item"><strong>Date of Birth:</strong></p>
          <p className="grid-item">{character.dateOfBirth}</p>
          <p className="grid-item"><strong>Year of Birth:</strong></p>
          <p className="grid-item">{character.ancestry}</p>
          <p className="grid-item"><strong>Patronus:</strong></p>
          <p className="grid-item">{character.patronus}</p>
          <p className="grid-item"><strong>Actor:</strong></p>
          <p className="grid-item">{character.actor}</p>
          <p className="grid-item"><strong>Alive:</strong></p>
          <p className="grid-item">{character.alive}</p>
          <p className="grid-item"><strong>Wand:</strong></p>
          <p className="grid-item">
            Wood:
            {character.wand.wood}
          </p>
          <p className="grid-item">
            Core:
            {character.wand.core}
          </p>
          <p className="grid-item">
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
