import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCities } from './citiesReducer';

const baseUrl = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities?limit=20&countryIds=fi&minPopulation=50000&sort=-population&types=CITY';
const FETCH_CITIES = 'cities/FETCH_CITIES';

const fetchCities = createAsyncThunk(FETCH_CITIES, async (_, thunkAPI) => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '35adac969amsha5725af3783671bp1aee2djsn4b6ce740649c',
      'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
    },
  };
  const response = await fetch(baseUrl, options);
  const data = await response.json();
  const citiesArray = data.data.map((city) => ({
    id: city.id,
    name: city.name,
  }));

  thunkAPI.dispatch(getCities(citiesArray));
  if (!citiesArray) return [];
  return citiesArray;
});

export default fetchCities;
