import { configureStore } from '@reduxjs/toolkit';
import citiesReducer from './citiesReducer';
import citiesDetailsSlice from './cityDetailsSlice';

const store = configureStore({
  reducer: {
    cities: citiesReducer,
    details: citiesDetailsSlice,
  },
});

export default store;
