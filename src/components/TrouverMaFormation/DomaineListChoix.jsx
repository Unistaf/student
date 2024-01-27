import React, { memo } from "react"
import QuestionTitle from "./QuestionTitle"
import GridList from "react-flexible-list"
import DomaineCardItem from "./DomaineCardItem"
import { trouverMaFormation } from "data/trouverMaFormation"

const DomaineListChoix = () => {
    return (
        <div>
            <QuestionTitle title={"Dans quel domaine souhaitez-vous effectuer votre formation ?"} />
            <GridList
                resourceData={trouverMaFormation.domaines}
                resourceItem={(domaine) => <DomaineCardItem domaine={domaine} />}
                cardWidth={200}
            />
        </div>
    )
}

export default memo(DomaineListChoix)