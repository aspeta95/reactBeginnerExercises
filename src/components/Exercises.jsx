import React from 'react'
import { Link , useParams} from 'react-router-dom'

const Exercises = () => {

    const { id } = useParams()

  return (<>
    <h1>Exercise {id}</h1>
    <Link to='exercises/calculator' >Calculator</Link>
    <Link to='exercises/wordle' >Wordle</Link>
  </>
  )
}

export default Exercises