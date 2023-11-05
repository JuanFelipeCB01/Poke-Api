import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <div className='header'>
        <NavLink to="/" className='header-logo'>POKE-API</NavLink>
        <div className='header-nav'>
            <NavLink to='/' className='header-nav-li'>About</NavLink>
            <NavLink to='/' className='header-nav-li'>Contact</NavLink>
            <NavLink to='/' className='header-nav-li'>Pokemons</NavLink>
        </div>
    </div>
  )
}
