import React, { memo } from "react"
import QuestionTitle from "./QuestionTitle"
import GridList from "react-flexible-list"
import DomaineCardItem from "./DomaineCardItem"

const DomaineListChoix = () => {
    return (
        <div>
            <QuestionTitle title={"Dans quel domaine souhaitez-vous effectuer votre formation ?"} />
            <GridList
                resourceData={[1, 2, 3, 4, 5, 6]}
                resourceItem={(domaine) => <DomaineCardItem domaine={domaine} />}
                cardWidth={200}
            />
        </div>
    )
}

export default memo(DomaineListChoix)