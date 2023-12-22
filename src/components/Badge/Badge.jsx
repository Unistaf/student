import React from "react"
import { twMerge } from "tailwind-merge"

const Badge = ({ className, children }) => {
    return (
        <span className={twMerge(["me-2 px-3.5 py-2 rounded-full w-max font-semibold", className])}>
            {children}
        </span>
    )
}

export default Badge