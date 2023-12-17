/* eslint-disable max-len */
import React from "react"
import { twMerge } from "tailwind-merge"

const CardSection = ({ label, description, className, number }) => {
    return (
        <div className="shadow-2xl rounded-lg min-h-[100px] p-10 text-center relative">
            <div
                className={twMerge("text-white flex justify-center items-center font-semibold absolute w-[50px] h-[50px] top-[-40px] right-[50%] translate-x-1/2 translate-y-1/2 rounded-full", className)}
            >
                {number}
            </div>
            <h4 className="mt-5 font-semibold">{label}</h4>
            <p className="font-normal">{description}</p>
        </div>
    )
}

export default CardSection