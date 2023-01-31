import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import charactersReducer from './reducers/characters';

const rootReducer = combineReducers({
  characters: charactersReducer,
});

const initialState = {
  characters: {
    loading: false,
    characters: [],
    error: null,
  },
};

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState: initialState,
});

export default store;
