import React from 'react'
import {NavLink} from 'react-router-dom'

export const NavbarFilters = () => {
    return <div>
        <div><NavLink to="/active" activeClassName='active' className="active" >ACTIVE</NavLink></div>
        <div><NavLink to="/completed" >COMPLETED</NavLink></div>
        <div><NavLink to="/all" >ALL</NavLink></div>
    </div>

}


export default NavbarFilters