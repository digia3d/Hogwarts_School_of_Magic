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
      <h2>{house}</h2>
      {characters.length === 0 && <p>No characters found</p>}

      {characters.map((char) => (
        <div key={char.id} className="character-card">
          <h3>{char.name}</h3>
          <p>
            <strong>Species:</strong>
            {' '}
            {char.species}
          </p>
          <p>
            <strong>House:</strong>
            {' '}
            {char.house.name}
          </p>
          <p>
            <strong>Actor:</strong>
            {' '}
            {char.actor}
          </p>
          <p>
            <strong>Wand:</strong>
            {' '}
            {char.wand?.wood}
            ,
            {' '}
            {char.wand?.core}
            ,
            {' '}
            {char.wand?.length}
          </p>
          <img src={char.image_url} alt={char.name} width="150" />
        </div>
      ))}
    </div>
  );
}

export default HousePage;
