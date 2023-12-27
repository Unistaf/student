import React from "react"
import { NavLink } from "react-router-dom"

const HeaderItem = ({ children, to }) => {
    return (
        <li>
            <NavLink
                className={({ isActive, isPending }) => isActive ?
                    "text-gray-500 text-lg uppercase transition hover:text-gray-500/75 border-b-4 border-blue font-semibold" :
                    "text-gray-500 text-lg uppercase transition hover:text-gray-500/75 font-medium"
                }
                // className="text-gray-500 text-xl uppercase transition hover:text-gray-500/75"
                to={to}
            >
                {children}
            </NavLink>
        </li>
    )
}

export default HeaderItem