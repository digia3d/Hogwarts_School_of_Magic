import axios from 'axios';
import URL_API from '../components/api';

const CHARACTERS = 'harryPotter/hp/CHARACTERS';

const initialState = [];

export default function hpReducer(state = initialState, action) {
  switch (action.type) {
    case CHARACTERS:
      return action.payload;
    default:
      return state;
  }
}

export const addCharacter = (payload) => ({
  type: CHARACTERS,
  payload,
});

export const getCharacters = () => async (dispatch) => {
  try {
    const response = await axios.get(URL_API);
    dispatch(addCharacter(response.data));
  } catch (error) {
    console.log(error);
  }
};
