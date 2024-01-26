import React, { memo } from "react"
import QuestionTitle from "./QuestionTitle"

const DiplomeListChoix = () => {
    return (
        <div>
            <QuestionTitle title={"Quelle diplôme souhaitez vous obtenir ?"} />
        </div>
    )
}

export default memo(DiplomeListChoix)