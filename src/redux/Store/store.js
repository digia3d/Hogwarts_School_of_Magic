import { configureStore, combineReducers } from '@reduxjs/toolkit';
import hpReducer from '../Reducers/reducersHp';

const rootReducer = combineReducers({
  reducersHp: hpReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
