import { useState, useEffect } from 'react';
import { getStarshipDetails } from '../../services/sw-api';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const StarshipPage = () => {
  const [StarshipDetails, setStarshipDetails] = useState({})
  const location = useLocation()

	useEffect(() => {
    const fetchStarshipDetails = async () => {
      const starshipData = await getStarshipDetails(location.state.starship.url)
      setStarshipDetails(starshipData)
    }
    fetchStarshipDetails()
  }, [location.state.starship.url])
  
  return (
    
      <div>
          <h4>Name: {StarshipDetails.name}</h4>
          <h4>Model: {StarshipDetails.model}</h4>
      </div>
  );
}


export default StarshipPage;