import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  preloadedState: initialState
});

export default store;
