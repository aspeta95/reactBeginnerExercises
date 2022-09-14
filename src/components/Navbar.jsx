import React from 'react'

const Navbar = () => {
  return (
    <nav>
        <a href='/' className='site-title'>
            Site Name
        </a>
        <ul>
            <li>
              <a href='/services'>Services</a>
            </li>
            <li>
              <a href='/about'>About</a>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar