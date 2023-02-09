import './styles/App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Details from './components/Details';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
