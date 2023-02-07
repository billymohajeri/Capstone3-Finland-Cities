import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCitiesDetails } from '../redux/cityDetailsSlice';
import '../styles/Details.css';

const Details = () => {
  const citiesDetailsList = useSelector((state) => state.details.citiesDetails);
  const dispatch = useDispatch();

  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchCitiesDetails(id));
  }, [dispatch, id]);

  return (
    <div className="details-container">
      {citiesDetailsList.data && (
        <>
          <div>
            <h2 className="text-city">
              City:&nbsp;
              {citiesDetailsList.data.city}
              <img
                src={`https://7gg9.short.gy/COA${citiesDetailsList.data.id}`}
                alt={citiesDetailsList.data.city}
              />
            </h2>
          </div>
          <ul className="details-list">
            <li>
              <p className="info-text">
                Region:&nbsp;
                {citiesDetailsList.data.region}
              </p>
            </li>
            <li>
              <p className="info-text">
                Latitude:&nbsp;
                {citiesDetailsList.data.latitude}
              </p>
            </li>
            <li>
              <p className="info-text">
                Longitude:&nbsp;
                {citiesDetailsList.data.longitude}
              </p>
            </li>
            <li>
              <p className="info-text">
                Population:&nbsp;
                {citiesDetailsList.data.population}
              </p>
            </li>
            <li>
              <p className="info-text">
                Elevation Meters:&nbsp;
                {citiesDetailsList.data.elevationMeters
                  ? citiesDetailsList.data.elevationMeters
                  : 'Not provided...'}
              </p>
            </li>
            <li>
              <p className="info-text">
                Time Zone: UTC+2&nbsp;
                {citiesDetailsList.data.timezone}
              </p>
            </li>
          </ul>
        </>
      )}
    </div>
  );
};

export default Details;
