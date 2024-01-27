import React, { memo } from "react"
import QuestionTitle from "./QuestionTitle"
import GridList from "react-flexible-list"
import { trouverMaFormation } from "data/trouverMaFormation"
import TrouverFormationCard from "./TrouverFormationCard"
import { useTrouverMaFormationeContexte } from "context/TrouverMaFormationeContexteProvider"

const LieuFormationChoixCardItem = ({ lieu }) => {
    const { setLieuFormationChoice } = useTrouverMaFormationeContexte()
    return <TrouverFormationCard
        onClickCard={() => setLieuFormationChoice(lieu)}
        content={() => <span className="font-semibold text-center">{lieu.label}</span>}
    />
}

const LieuEtudeListChoix = () => {
    return (
        <div>
            <QuestionTitle title={"Où souhaites-tu étudier ?"} />
            <GridList
                resourceData={trouverMaFormation.lieuxFormation}
                resourceItem={(lieu) => <LieuFormationChoixCardItem lieu={lieu} />}
                cardWidth={240}
            />
        </div>
    )
}

export default memo(LieuEtudeListChoix)