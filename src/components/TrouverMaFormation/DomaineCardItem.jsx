import { useTrouverMaFormationeContexte } from "context/TrouverMaFormationeContexteProvider";
import React from "react"
import { TfiBag } from "react-icons/tfi";

const DomaineCardItem = ({ domaine }) => {
    const { nextStep } = useTrouverMaFormationeContexte()
    return (
        <div
            onClick={() => nextStep()}
            className="p-3 min-h-[150px] flex flex-col gap-3 justify-center items-center rounded-md bg-cardBg hover:shadow-lg cursor-pointer active:scale-95"
        >
            <TfiBag size={25} />
            <span className="font-semibold text-center">Commerce et Management</span>
        </div>
    )
}

export default DomaineCardItem