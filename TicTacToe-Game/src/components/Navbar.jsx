import React from 'react'
import {Link} from 'react-router-dom'
import '../css/Nav.css'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='navbar-brand'>
            <Link className='web_title' to="/">TIC TAC TOE</Link>
        </div>
        <div className='navbar-links'>
            <Link to="/" className='nav-link'>Home</Link>
            <Link to="/clientlogin" className='nav-link'>Client Login</Link>
            <Link to="/board" className='nav-link'>Playing Board</Link>
        </div>
    </div>
  )
}

export default Navbar