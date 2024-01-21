import React from "react"

const SectionTitle = ({ title }) => {
    return (
        <>
            <h2 className="text-2xl text-center text-blackSecondary font-bold">{title}</h2>
            <div className="flex justify-center mt-3">
                <div className="border w-20 bg-blackSecondary"></div>
            </div>
        </>
    )
}

export default SectionTitle