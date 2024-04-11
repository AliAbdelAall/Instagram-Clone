import React from 'react'
import "./style.css"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className='flex center header'>
      <div className='flex center logo-nav'>
      <h2 >Instagram</h2>
        <nav className='flex center nav'>
        <Link
        className='header-link'
        to="/main"
        >Home</Link>
        <Link
        className='header-link'
        to="profile">Profile</Link>


        </nav>
      </div>
    </header>
  )
}

export default Header