import { useState, useEffect } from 'react';
import { getDetails } from '../../services/sw-api';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const StarshipPage = () => {
  const [StarshipPage, setStarshipPage] = useState([])
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
      <>
      <h3>Starship Details</h3>
      </>
      <h4>Name: {starshipDetails.name}</h4>
      <h4>Model: {starshipDetails.model}</h4>
    </div>
  );
}


export default StarshipPage;