import URL_API from '../api';

const CHARACTERS = 'harryPotter/hp/CHARACTERS';

const initialState = [];

export default function charactersReducer(state = initialState, action) {
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
  await fetch(URL_API)
    .then((res) => res.json())
    .then((data) => { dispatch(addCharacter(data.list)); });
};
