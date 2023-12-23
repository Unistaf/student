import React from "react"
import DiplomeCardItem from "./DiplomeCardItem"
import { twMerge } from "tailwind-merge"

const DiplomeList = ({ className, isImage }) => {
    return (
        <>
            <div className={twMerge(["flex gap-5", className])}>
                {
                    [1, 2, 3, 4, 5, 6, 7, 8].map((index) => {
                        return <DiplomeCardItem isImage={isImage} key={index} />
                    })
                }
            </div>
        </>
    )
}

export default DiplomeList