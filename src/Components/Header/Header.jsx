import React from 'react'
import { NavLink, Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='header'>
        <NavLink to="/" className='header-logo'>POKE-API</NavLink>
        <div className='header-nav'>
            <NavLink to='' className='header-nav-li'></NavLink>
            <NavLink to='' className='header-nav-li'></NavLink>
            <NavLink to='' className='header-nav-li'></NavLink>
        </div>
    </div>
  )
}
