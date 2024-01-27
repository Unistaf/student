import React, { memo } from "react"
import QuestionTitle from "./QuestionTitle"
import GridList from "react-flexible-list"
import { trouverMaFormation } from "data/trouverMaFormation"
import TrouverFormationCard from "./TrouverFormationCard"
import { useTrouverMaFormationeContexte } from "context/TrouverMaFormationeContexteProvider"

const DiplomeChoixCardItem = ({ diplome }) => {
    const { setDiplomeChoice } = useTrouverMaFormationeContexte()
    return <TrouverFormationCard
        onClickCard={() => setDiplomeChoice(diplome)}
        content={() => <span className="font-semibold text-center">{diplome.label}</span>}
    />
}

const DiplomeListChoix = () => {
    return (
        <div>
            <QuestionTitle title={"Quelle diplôme souhaitez vous obtenir ?"} />
            <GridList
                resourceData={trouverMaFormation.diplomes}
                resourceItem={(diplome) => <DiplomeChoixCardItem diplome={diplome} />}
                cardWidth={250}
            />
        </div>
    )
}

export default memo(DiplomeListChoix)