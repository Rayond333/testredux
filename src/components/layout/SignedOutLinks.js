import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
    return (
        <ul className="right">
            <li>||</li>
            <li><NavLink to='/signin'>Login</NavLink></li>
            <li><NavLink to='/register'>Register</NavLink></li>
            <li>||</li>
        </ul>
    )
}

export default SignedOutLinks