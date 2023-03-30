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
    case FETCH_CHARACTERS_START: {
      return {
        ...state,
        isLoading: true,
        error: null,
        house: action.payload,
      };
    }
    case FETCH_CHARACTERS_SUCCESS: {
      const sortedCharacters = action.payload.sort((a, b) => {
        if (a.house.name < b.house.name) {
          return -1;
        }
        if (a.house.name > b.house.name) {
          return 1;
        }
        return 0;
      });

      return {
        ...state,
        isLoading: false,
        characters: sortedCharacters,
      };
    }
    case FETCH_CHARACTERS_FAIL: {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
