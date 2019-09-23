import React from 'react'
import {NavLink} from 'react-router-dom'
import './NavbarFilters.css'

export const NavbarFilters = () => {
    return <div className="NavbarFilters_LinkHolder">
        <NavLink to="/active" isActive={(m,l)=>l.pathname==="/" || m}>ACTIVE</NavLink>
        <NavLink to="/completed" >COMPLETED</NavLink>
        <NavLink to="/all" >ALL</NavLink>
    </div>

}


export default NavbarFilters