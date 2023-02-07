const GET_CITIES = 'CITY/GET_CITIES';

const initialState = [];

const citiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CITIES:
      return action.payload;
    default:
      return state;
  }
};

export const getCities = (payload) => ({
  type: GET_CITIES,
  payload,
});

export default citiesReducer;
