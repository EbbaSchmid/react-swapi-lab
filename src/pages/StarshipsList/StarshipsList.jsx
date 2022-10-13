import { useEffect, useState } from 'react'
import { getAllStarships } from '../../services/sw-api'
import { Link } from 'react-router-dom'

const StarshipsList = (props) => {
  const [starships, setStarshipss] = useState([])

  useEffect(() => {
    const fetchStarshipsList = async () => {
      const starshipData = await getAllStarships()
      setStarshipss(starshipData.results)
      console.log(starshipData)
    }
    fetchStarshipsList()
  }, [])
  
    return (
      <>
        <div className="starship-container">
          <h3>Starship List </h3>
          {starships.length ?
            <>
          {starships.map(starship => 

            <Link className="list-link"
              to="/starship" 
              state={ {starship} }>
              key={starship.name}

              <div className="starship-div">
                <h2>(starship.name</h2>
              </div>

            </Link>
          )}
            </>
            :
            <>
            <h3>Starships are Loading</h3>
            </>
          }
          </div>
        </>
    )
}

export default StarshipsList;