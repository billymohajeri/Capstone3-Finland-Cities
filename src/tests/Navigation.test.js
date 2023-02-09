import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Navigation from '../components/Navigation';

it('Renders correctly', () => {
  const navigation = renderer
    .create(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>,
    )
    .toJSON();
  expect(navigation).toMatchSnapshot();
});
