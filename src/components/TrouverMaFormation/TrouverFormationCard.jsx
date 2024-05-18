import { useTrouverMaFormationeContexte } from "context/TrouverMaFormationeContexteProvider"
import React from "react"
import { twMerge } from "tailwind-merge"

const TrouverFormationCard = ({ content, customClass, onClickCard, active }) => {
    const { nextStep } = useTrouverMaFormationeContexte()
    return (
        <div
            onClick={() => {
                onClickCard()
                nextStep()
            }}
            // eslint-disable-next-line max-len
            className={twMerge([`p-3 flex flex-col gap-3 justify-center items-center rounded-2xl hover:shadow-md cursor-pointer transition-all ${active ? "bg-blue text-white" : "bg-cardBg"} active:scale-95`], customClass)}
        >
            {content()}
        </div>
    )
}

export default TrouverFormationCard