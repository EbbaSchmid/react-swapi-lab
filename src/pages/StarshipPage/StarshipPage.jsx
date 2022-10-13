import { useState, useEffect } from 'react';
import { getDetails } from '../../services/sw-api';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const StarshipPage = (props) => {
  const [StarshipDetails, setStarshipDetails] = useState({})
  const location = useLocation()

	useEffect(() => {
    const fetchStarshipDetails = async () => {
      const starshipData = await getDetails(location.state.starship.url)
      setStarshipDetails(starshipData)
    }
    fetchStarshipDetails()
  }, [location.state.starship.url])
  
  return (
      <>
      {StarshipDetails.name ?
        <div className="detailsContainer">
          <div className="shipDetail-div">

            <h3>Starship Details</h3>

            <h4>Name: {StarshipDetails.name}</h4>
            <h4>Model: {StarshipDetails.model}</h4>
          </div>
        </div>
        :
        <>
          <h3> Loading Starship Details</h3>
        </>
      }
      </>
  );
}


export default StarshipPage;