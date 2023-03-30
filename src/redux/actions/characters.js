import axios from 'axios';

export const FETCH_CHARACTERS_START = 'FETCH_CHARACTERS_START';
export const FETCH_CHARACTERS_SUCCESS = 'FETCH_CHARACTERS_SUCCESS';
export const FETCH_CHARACTERS_FAIL = 'FETCH_CHARACTERS_FAIL';

export const fetchCharactersByHouse = (house) => (dispatch) => {
  dispatch({ type: FETCH_CHARACTERS_START });
  axios
    .get(`https://school-of-magic-api.onrender.com/api/v1/houses/${house}/characters`)
    .then((res) => {
      dispatch({ type: FETCH_CHARACTERS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: FETCH_CHARACTERS_FAIL, payload: err });
    });
};
