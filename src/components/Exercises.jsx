import React from 'react'
import { Link , useParams} from 'react-router-dom'

const Exercises = () => {

    const { id } = useParams()

  return (<>
    <h1>Exercise {id}</h1>
    <Link to='' ></Link>
  </>
  )
}

export default Exercises