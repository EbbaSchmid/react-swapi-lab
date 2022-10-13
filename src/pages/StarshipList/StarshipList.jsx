import { useEffect, useState } from 'react'
import { getAllStarships } from '../../services/sw-api'
import { Link } from 'react-router-dom'

const StarshipList = (props) => {
  const [starships, setStarships] = useState([])

  useEffect(() => {
    const fetchStarshipData = async () => {
      const starshipData = await getAllStarships()
      setStarships(starshipData.results)
      console.log(starshipData)
    }
    fetchStarshipData()
  }, [])
  
  return (
    <>
      <h3>Starship List </h3>
      {StarshipList.length ? 
      <>
        {StarshipList.map(starship => 
          <div key={starship.model}>
            <Link 
            to="/starship" 
            state={{starship}}>
            {starship.name}</Link>
            <br/>
          </div>
        )}
      </>
      :
      <>
        <h4>Loading Starships...</h4>
      </>
      }
    </>
  );
}

export default StarshipList;