import React from 'react';
import renderer from 'react-test-renderer';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import Details from '../components/Details';
import citiesDetailsSlice from '../redux/cityDetailsSlice';

const createTestStore = () => {
  const store = configureStore({
    reducer: {
      details: citiesDetailsSlice,
    },
  });

  return store;
};
export default createTestStore;

describe('Connected React/Redux Component', () => {
  let store;
  let component;

  beforeEach(() => {
    store = createTestStore();

    component = renderer
      .create(
        <Provider store={store}>
          <Details />
        </Provider>,
      )
      .toJSON();
  });

  test('Renders correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
