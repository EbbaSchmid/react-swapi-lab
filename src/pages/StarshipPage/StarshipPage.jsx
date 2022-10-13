import { useState, useEffect } from 'react';
import { getDetails } from '../../services/sw-api';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const StarshipPage = (props) => {
  const [StarshipDetails, setStarshipDetails] = useState({})
  const location = useLocation()

	useEffect(() => {
    const fetchDetails = async () => {
      const starshipData = await getDetails(location.state.starship.url)
      setStarshipDetails(starshipData)
    }
    fetchDetails()
  }, [location.state.starship.url])
  
  return (
    <>
      <div>
      {StarshipDetails.name ?
        <>
          <h4>Name: {StarshipDetails.name}</h4>
          <h4>Model: {StarshipDetails.model}</h4>
        </>
        :
        <>
          <p> Loading Starship Details</p>
        </>
      }
      </div>
    </>
  );
}


export default StarshipPage;