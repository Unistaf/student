import { useTrouverMaFormationeContexte } from "context/TrouverMaFormationeContexteProvider"
import React from "react"
import { twMerge } from "tailwind-merge"

const TrouverFormationCard = ({ content, customClass, onClickCard }) => {
    const { nextStep } = useTrouverMaFormationeContexte()
    return (
        <div
            onClick={() => {
                onClickCard()
                nextStep()
            }}
            className={twMerge(["p-3 flex flex-col gap-3 justify-center items-center rounded-md bg-cardBg hover:shadow-lg cursor-pointer active:scale-95"], customClass)}
        >
            {content()}
        </div>
    )
}

export default TrouverFormationCard