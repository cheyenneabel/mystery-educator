import { NavLink } from 'react-router-dom'
import React from 'react'

const Header = () => (
    <div>
        <h1>React Fetch Demo</h1>
        <ul>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/javengers'>Javengers</NavLink>
        </ul>
    </div>
    
)

export default Header;