import React, { memo } from "react"
import QuestionTitle from "./QuestionTitle"

const LieuEtudeListChoix = () => {
    return (
        <div>
            <QuestionTitle title={"Où souhaites-tu étudier ?"} />
            LieuEtudeListChoix
        </div>
    )
}

export default memo(LieuEtudeListChoix)