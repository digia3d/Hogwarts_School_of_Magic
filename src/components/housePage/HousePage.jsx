import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCharactersByHouse } from '../../redux/actions/characters';
import './HousePage.css';

function HousePage() {
  const dispatch = useDispatch();
  const { house } = useParams();

  const { characters, isLoading, error } = useSelector(
    (state) => state.characters,
  );

  useEffect(() => {
    dispatch(fetchCharactersByHouse(house));
  }, [dispatch, house]);

  if (isLoading) return <p>Loading...</p>;
  if (error) {
    return (
      <p>
        Error:
        {error}
      </p>
    );
  }

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
                <img className="charimg" src={character.image_url} alt={character.name} />
              </div>
            </div>
          ),
        )}
    </div>
  );
}

export default HousePage;
