import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './HousePage.css';

function HousePage() {
  const [characters, setCharacters] = useState([]);
  const { house } = useParams();

  useEffect(() => {
    axios
      .get('https://school-of-magic-api.onrender.com/api/v1/characters')
      .then((response) => {
        const sortedCharacters = response.data.sort((a, b) => {
          if (a.house.name < b.house.name) {
            return -1;
          }
          if (a.house.name > b.house.name) {
            return 1;
          }
          return 0;
        });
        const filteredCharacters = sortedCharacters.filter(
          (character) => character.house.name === house,
        );
        setCharacters(filteredCharacters.slice(0, 10));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [house]);

  return (
    <div className="house-page">
      <div className="house__name">
        <a href="/home" className="back">
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </a>
        {house}
      </div>
      {characters.length > 0
        && characters.map(
          (character) => character && (
            <div className="character-card grid-container" key={character.id}>
              <p className="grid-item">
                <strong>Name:</strong>
              </p>
              <p className="grid-item">{character.name}</p>
              <p className="grid-item">
                <strong>Species:</strong>
              </p>
              <p className="grid-item">{character.species}</p>
              <p className="grid-item">
                <strong>House:</strong>
              </p>
              <p className="grid-item">{character.house.name}</p>
              <p className="grid-item">
                <strong>Date of Birth:</strong>
              </p>
              <p className="grid-item">{character.dateOfBirth}</p>
              <p className="grid-item">
                <strong>Year of birth:</strong>
              </p>
              <p className="grid-item">{character.yearOfBirth}</p>
              <p className="grid-item">
                <strong>Ancestry:</strong>
              </p>
              <p className="grid-item">{character.ancestry}</p>
              <p className="grid-item">
                <strong>Eye Colour:</strong>
              </p>
              <p className="grid-item">{character.eyeColour}</p>
              <p className="grid-item">
                <strong>Hair Colour:</strong>
              </p>
              <p className="grid-item">{character.hairColour}</p>
              <p className="grid-item">
                <strong>Patronus:</strong>
              </p>
              <p className="grid-item">{character.patronus}</p>
              <p className="grid-item">
                <strong>Actor:</strong>
              </p>
              <p className="grid-item">{character.actor}</p>
              <p className="grid-item">
                <strong>Wand:</strong>
              </p>
              <p className="grid-item">
                Wood:&nbsp;
                { character.wand.wood || '-'}
                <br />
                ,Core:&nbsp;
                {character.wand.core || '-'}
                <br />
                ,Length:&nbsp;
                {character.wand.length || '-'}
              </p>
              <div className="image-container">
                <img className="charimg" src={character.image} alt={character.name} />
              </div>
            </div>
          ),
        )}
    </div>
  );
}

export default HousePage;
