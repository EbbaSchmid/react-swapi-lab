import { useEffect, useState } from 'react'
import { getStarshipList } from '../../services/sw-api'
import { Link } from 'react-router-dom'

const StarshipList = () => {
  const [StarshipList, setStarshipList] = useState([])

  useEffect(() => {
    const fetchStarshipList = async () => {
      const starshipData = await getStarshipList()
      setStarshipList(starshipData.results)
    }
    fetchStarshipList()
  }, [])
  
  return (
    <>
      <h3>Starship List </h3>
      {StarshipList.length ? 
      <>
        {StarshipList.map(starship => 
          <div key={starship.index}>
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