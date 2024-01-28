import { useTrouverMaFormationeContexte } from "context/TrouverMaFormationeContexteProvider";
import React from "react"
import { TfiBag } from "react-icons/tfi";
import TrouverFormationCard from "./TrouverFormationCard";

const DomaineCardItem = ({ domaine }) => {
    const { nextStep, setDomaineChoice, userFormationChoice } = useTrouverMaFormationeContexte()
    // console.log({ selectedDomaine: userFormationChoice.selectedDomaine, domaine });
    return (
        <TrouverFormationCard
            active={userFormationChoice.selectedDomaine.id === domaine.id}
            onClickCard={() => setDomaineChoice(domaine)}
            customClass="min-h-[150px] px-4"
            content={() => <>
                <TfiBag size={25} />
                <span className="font-semibold text-center">{domaine.label}</span>
            </>
            }
            onClick={() => {
                nextStep()
            }}
        />
    )
}

export default DomaineCardItem