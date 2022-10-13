import { useEffect, useState } from 'react'
import { getAllStarships } from '../../services/sw-api'
import { Link } from 'react-router-dom'

const StarshipList = () => {
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
          <h3>Starship List </h3>
          <div className="starship-container">
            {starships.map(starship => 

              <Link className="list-link"
                to="/starship" 
                state={{ starship }}
                key={starship.name}>

                <div key={starship.name}>
                  {starship.name}
                </div>
              </Link>
            )}
          </div>
        </>
    );
}

export default StarshipList;