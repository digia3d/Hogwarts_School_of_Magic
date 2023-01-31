import {
  FETCH_CHARACTERS_START,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_FAIL,
} from '../actions/characters';

const initialState = {
  characters: [],
  isLoading: false,
  error: null,
  house: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS_START:
      return {
        ...state,
        isLoading: true,
        error: null,
        house: action.payload,
      };
    case FETCH_CHARACTERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        characters: action.payload,
      };
    case FETCH_CHARACTERS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
