import React from 'react'
import { Link, Routes, Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Exercises from './Exercises'

const Navbar = () => {

 

  return (<>
    <nav>
        <Link to='/' className='site-title'>
            Home
        </Link>
        <ul>
            <li>
              <Link to='/exercises'>Exercises</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
        </ul>
    </nav>

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/exercises'>
        <Route index element={<Exercises />} />
        <Route path=':id' element={<Exercises />}></Route>
      </Route>
      <Route path='/about' element={<About />} />
    </Routes>

  </>
  )
}

export default Navbar