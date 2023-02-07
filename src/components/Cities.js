import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import fetchCities from '../redux/citiesApi';
import '../styles/Cities.css';

const Cities = () => {
  const state = useSelector((state) => state.cities);
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filtered = state.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));

  useEffect(() => {
    dispatch(fetchCities());
  }, [dispatch]);

  return (
    <>
      <div className="cities-search">
        <form className="search-form">
          <input
            className="search-input"
            type="text"
            value={search}
            aria-label="search"
            onChange={handleChange}
            placeholder="Search a city..."
          />
          <p className="message">
            {filtered.length}
            &nbsp;Items found...
          </p>
        </form>
      </div>
      <div className="cities-container">
        {filtered.map((city) => (
          <div key={city.id} className="city">
            <NavLink to={`/${city.id}`} className="city-link">
              <img src={`https://7gg9.short.gy/COA${city.id}`} alt="coat-of-arms" />
              <h2>{city.name}</h2>
            </NavLink>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cities;
