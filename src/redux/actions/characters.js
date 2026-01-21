import axios from 'axios';

export const FETCH_CHARACTERS_START = 'FETCH_CHARACTERS_START';
export const FETCH_CHARACTERS_SUCCESS = 'FETCH_CHARACTERS_SUCCESS';
export const FETCH_CHARACTERS_FAIL = 'FETCH_CHARACTERS_FAIL';

const houseIds = {
  Gryffindor: 1,
  Slytherin: 2,
  Ravenclaw: 3,
  Hufflepuff: 4,
};
export const fetchCharactersByHouse = (houseName) => async (dispatch) => {
  dispatch({ type: FETCH_CHARACTERS_START });

  try {
    const houseId = houseIds[houseName];
    if (!houseId) throw new Error('Invalid house name');
    const res = await axios.get(
      `https://school-of-magic-api.onrender.com/api/v1/characters`,
    );

    dispatch({
      type: FETCH_CHARACTERS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: FETCH_CHARACTERS_FAIL,
      payload: err.response?.data?.error || err.message,
    });
  }
};
