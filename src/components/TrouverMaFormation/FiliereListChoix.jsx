import React, { memo } from "react"
import QuestionTitle from "./QuestionTitle"

const FiliereListChoix = () => {
    return (
        <div>
            <QuestionTitle title={"Choisissez votre filière de formation"} />
        </div>
    )
}

export default memo(FiliereListChoix)