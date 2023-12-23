/* eslint-disable max-len */
import React from "react"
import { twMerge } from "tailwind-merge"

const Select = ({ label, children, extraClasse, containerClasse }) => {
    return (
        <div className={twMerge([containerClasse])}>
            <label htmlFor="countries" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
            <select id="countries" className={twMerge(["border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 px-4 min-w-max h-11", extraClasse])}>
                {children}
            </select>
        </div>
    )
}

export default Select