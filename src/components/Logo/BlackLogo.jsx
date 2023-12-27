import React from "react"
import blackLogo from "assets/logos/unistaf-black-logo.png"
import { Link } from "react-router-dom"

const BlackLogo = () => {
    return (
        <Link className="block text-teal-600" href="/">
            <img src={blackLogo} alt="Unistaf" className="w-32" />
        </Link>
    )
}

export default BlackLogo