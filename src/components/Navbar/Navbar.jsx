import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='nav'>
      <div className='navLogo'>EV revolt</div>
<ul className='navMenu'>
  <li>Home</li>
  <li>Explore</li>
  <li>About</li>
  <li className='navContact'>Contact</li>

</ul>
    </div>
  )
}

export default Navbar