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
    <div className="first-container">
      {citiesDetailsList.data && (
        <div className="second-container">
          <h2 className="text-city">
            City:&nbsp;
            {citiesDetailsList.data.city}
          </h2>
          <img
            className="detail-image"
            src={`https://7gg9.short.gy/COA${citiesDetailsList.data.id}`}
            alt={citiesDetailsList.data.city}
          />
          <table className="details-list">
            <tbody>
              <tr>
                <td>Region</td>
                <td>{citiesDetailsList.data.region}</td>
              </tr>
              <tr>
                <td>Latitude</td>
                <td>{citiesDetailsList.data.latitude}</td>
              </tr>
              <tr>
                <td>Longitude</td>
                <td>{citiesDetailsList.data.longitude}</td>
              </tr>
              <tr>
                <td>Population</td>
                <td>{citiesDetailsList.data.population}</td>
              </tr>
              <tr>
                <td>Elevation Meters</td>
                <td>
                  {citiesDetailsList.data.elevationMeters
                    ? citiesDetailsList.data.elevationMeters
                    : 'Not provided...'}
                </td>
              </tr>
              <tr>
                <td>Time Zone</td>
                <td>
                  {citiesDetailsList.data.timezone === 'Europe__Helsinki' ? 'UTC+2' : ''}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Details;
