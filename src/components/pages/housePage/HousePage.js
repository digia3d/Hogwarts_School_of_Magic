import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

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

export default HousePage;
