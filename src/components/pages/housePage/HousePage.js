import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

function HousePage({ house }) {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios
      .get(`https://hp-api.onrender.com/api/characters/house/${house}`)
      .then((response) => {
        setPeople(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [house]);

  return (
    <div>
      {people.map((person) => (
        <div className="person-card" key={person.id}>
          <p>{person.name}</p>
          <p>{person.house}</p>
          <p>{person.bloodStatus}</p>
        </div>
      ))}
    </div>
  );
}

HousePage.propTypes = {
  house: PropTypes.string.isRequired,
};

export default HousePage;
