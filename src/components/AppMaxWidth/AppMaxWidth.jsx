import React from "react"
import { twMerge } from "tailwind-merge"

const AppMaxWidth = ({ children, className }) => {
    return (
        <div className={twMerge(["max-w-7xl mx-auto py-14 px-5"], className)}>{children}</div>
    )
}

export default AppMaxWidth