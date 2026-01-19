import axios from 'axios';

export const FETCH_CHARACTERS_START = 'FETCH_CHARACTERS_START';
export const FETCH_CHARACTERS_SUCCESS = 'FETCH_CHARACTERS_SUCCESS';
export const FETCH_CHARACTERS_FAIL = 'FETCH_CHARACTERS_FAIL';

export const fetchCharactersByHouse = (houseName) => async (dispatch) => {
  dispatch({ type: FETCH_CHARACTERS_START });

  try {
    const res = await axios.get(
      `http://localhost:3000/api/v1/houses/${houseName}/characters`,
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
