import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCitiesDetails = createAsyncThunk(
  'citiesDetails/fetchCitiesDetails',
  async (id) => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '35adac969amsha5725af3783671bp1aee2djsn4b6ce740649c',
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
      },
    };
    const response = await fetch(
      `https://wft-geo-db.p.rapidapi.com/v1/geo/cities/${id}`,
      options,
    );
    const data = await response.json();
    const resultsDetails = data;
    return resultsDetails;
  },
);

const citiesDetailsSlice = createSlice({
  name: 'citiesDetails',
  initialState: {
    citiesDetails: {},
  },
  reducers: {},

  extraReducers: {

    [fetchCitiesDetails.fulfilled]: (state, action) => {
      state.citiesDetails = action.payload;
    },

  },
});

export default citiesDetailsSlice.reducer;
