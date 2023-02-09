import React from 'react';
import renderer from 'react-test-renderer';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import Cities from '../components/Cities';
import citiesReducer from '../redux/citiesReducer';

const createTestStore = () => {
  const store = configureStore({
    reducer: {
      cities: citiesReducer,
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
          <Cities />
        </Provider>,
      )
      .toJSON();
  });

  test('Renders correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
