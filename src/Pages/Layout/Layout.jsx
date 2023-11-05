import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className='nav' >
      <nav className='nav-links'>
        <Link to='/home'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/pokemons'>Pokemons</Link>
      </nav>
      <hr/>
      <Outlet/>
    </div>
  )
}
