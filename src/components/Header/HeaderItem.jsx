import React from "react"
import { NavLink } from "react-router-dom"

const HeaderItem = ({ children }) => {
    return (
        <li>
            <NavLink className="text-gray-500 text-xl transition hover:text-gray-500/75" href="/"> {children} </NavLink>
        </li>
    )
}

export default HeaderItem