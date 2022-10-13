import { useEffect, useState } from 'react'
import { getAllStarships } from '../../services/sw-api'
import { Link } from 'react-router-dom'

const StarshipList = (props) => {
  const [starships, setStarships] = useState([])

  useEffect(() => {
    const fetchStarshipData = async () => {
      const starshipData = await getAllStarships()
      setStarships(starshipData.results)
    }
    fetchStarshipData()
  }, [])
  
    return (
      <>
        <h3>Starships</h3>
          {starships.length ?
          <>
            {starships.map(starship => 
              <div key={starship.model}>
              <Link 
                to="/starship" 
                state={{ starship }}>
                {starship.name}
                </Link>

              </div>
            )}
          </>
            :
            <>
            <h5>Still Loading</h5>
            </>
            }
            </>
    );
}

export default StarshipList;