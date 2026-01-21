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
    <>
      <div className="house__name">
        <a href="/home" className="back">
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </a>
        {house}
      </div>
      <div className="house-page">
        {characters.length === 0 && <p>No characters found</p>}

        {characters.map((char) => (
          <div key={char.id} className="character-card grid-container">
            <p className="grid-item">
              <strong>Name:</strong>
            </p>
            <p className="grid-item">{char.name}</p>

            <p className="grid-item">
              <strong>Alternate names:</strong>
            </p>
            <p className="grid-item">{char.alternate_names || '-'}</p>

            <p className="grid-item">
              <strong>Gender:</strong>
            </p>
            <p className="grid-item">{char.gender}</p>

            <p className="grid-item">
              <strong>Species:</strong>
            </p>
            <p className="grid-item">{char.species}</p>

            <p className="grid-item">
              <strong>House:</strong>
            </p>
            <p className="grid-item">{char.house?.name}</p>

            <p className="grid-item">
              <strong>Date of birth:</strong>
            </p>
            <p className="grid-item">{char.dateOfBirth || '-'}</p>

            <p className="grid-item">
              <strong>Year of birth:</strong>
            </p>
            <p className="grid-item">{char.yearOfBirth || '-'}</p>

            <p className="grid-item">
              <strong>Ancestry:</strong>
            </p>
            <p className="grid-item">{char.ancestry || '-'}</p>

            <p className="grid-item">
              <strong>Eye colour:</strong>
            </p>
            <p className="grid-item">{char.eyeColour || '-'}</p>

            <p className="grid-item">
              <strong>Hair colour:</strong>
            </p>
            <p className="grid-item">{char.hairColour || '-'}</p>

            <p className="grid-item">
              <strong>Patronus:</strong>
            </p>
            <p className="grid-item">{char.patronus || '-'}</p>

            <p className="grid-item">
              <strong>Actor:</strong>
            </p>
            <p className="grid-item">{char.actor || '-'}</p>

            <p className="grid-item">
              <strong>Alive:</strong>
            </p>
            <p className="grid-item">{char.alive ? 'Yes' : 'No'}</p>

            <p className="grid-item">
              <strong>Hogwarts student:</strong>
            </p>
            <p className="grid-item">{char.hogwartsStudent ? 'Yes' : 'No'}</p>

            <p className="grid-item">
              <strong>Hogwarts staff:</strong>
            </p>
            <p className="grid-item">{char.hogwartsStaff ? 'Yes' : 'No'}</p>

            <p className="grid-item">
              <strong>Wand:</strong>
            </p>
            <p className="grid-item">
              Wood:
              {' '}
              {char.wand?.wood || '-'}
              {' '}
              <br />
              Core:
              {' '}
              {char.wand?.core || '-'}
              {' '}
              <br />
              Length:
              {' '}
              {char.wand?.length || '-'}
            </p>

            <div className="image-container">
              <img className="charimg" src={char.image_url} alt={char.name} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default HousePage;
