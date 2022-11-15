import { NavLink } from 'react-router-dom'
import React from 'react'
import './Header.css'

const Header = () => (
    <div className='header'>
        <h2>Jac Enterprises Mystery Educator </h2>
        <ul>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/javengers'>Javengers</NavLink>
        </ul>
    </div>
    
)

export default Header;