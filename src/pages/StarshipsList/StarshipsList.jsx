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
      <div className="listContainer">
        <h3>Starship List </h3>
        {starships.length ? 
        <>
        {starships.map(starship => 

            <Link 
            to="/starship" 
            state={ {starship} }>
            key={starship.name}
            </Link>

        )}
          </>
          :
          <>
            <h4>Loading Starships...</h4>
          </>
      }
    </div>
    </>
  )
}

export default StarshipsList;