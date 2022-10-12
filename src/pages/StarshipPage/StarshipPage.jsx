import { useState, useEffect } from 'react';
import { getDetails } from '../../services/sw-api'
import { useLocation } from 'react-router-dom'

const StarshipPage = () => {
  const [StarshipPage, setStarshipPage] = useState([])
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
      <h3>Starship Details</h3>
      <h3>{starshipDetails.name}</h3>
      <h4>Name: {starshipDetails.name}</h4>
      <h4>Model: {starshipDetails.model}</h4>
    </>
  );
}


export default StarshipPage;