import React, { memo } from "react"
import QuestionTitle from "./QuestionTitle"
import GridList from "react-flexible-list"
import { trouverMaFormation } from "data/trouverMaFormation"
import TrouverFormationCard from "./TrouverFormationCard"
import { useTrouverMaFormationeContexte } from "context/TrouverMaFormationeContexteProvider"

const FiliereChoixCardItem = ({ filiere }) => {
    const { setFiliereChoice, userFormationChoice } = useTrouverMaFormationeContexte()
    // console.log({ selectedFiliere: userFormationChoice.selectedFiliere, filiere });
    return <TrouverFormationCard
        active={userFormationChoice.selectedFiliere === filiere.id}
        onClickCard={() => setFiliereChoice(filiere)}
        content={() => <span className="font-semibold text-center">{filiere.label}</span>}
    />
}
const FiliereListChoix = () => {
    return (
        <div>
            <QuestionTitle title={"Choisissez votre filière de formation"} />
            <GridList
                resourceData={trouverMaFormation.filieres}
                resourceItem={(filiere) => <FiliereChoixCardItem filiere={filiere} />}
                cardWidth={300}
            />
        </div>
    )
}

export default memo(FiliereListChoix)