import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to='/createbh'>Neues Bienenhaus</NavLink></li>
            <li><NavLink to='/map'>Karte</NavLink></li>
            <li><NavLink to='/overviewbh'>Übersicht</NavLink></li>
            <li><NavLink to='/'>Log Out</NavLink></li>
            <li><NavLink to='/' className='btn btn-floating pink lighten-1'>RH</NavLink></li>
        </ul>
    )
}

export default SignedInLinks