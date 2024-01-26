import AppMaxWidth from "components/AppMaxWidth/AppMaxWidth"
import FiliereListChoix from "components/TrouverMaFormation/FiliereListChoix"
import DomaineListChoix from "components/TrouverMaFormation/DomaineListChoix"
import DiplomeListChoix from "components/TrouverMaFormation/DiplomeListChoix"
import LieuEtudeListChoix from "components/TrouverMaFormation/LieuEtudeListChoix"
import React from "react"
import TrouverMaFormationeContexteProvider from "context/TrouverMaFormationeContexteProvider"

// const TrouverFormationContainer = ({ children }) => {
//     return <>{children}</>
// }

const TrouverFormation = () => {
    return (
        <AppMaxWidth>
            <TrouverMaFormationeContexteProvider>
                <DomaineListChoix />
                <FiliereListChoix />
                <DiplomeListChoix />
                <LieuEtudeListChoix />
            </TrouverMaFormationeContexteProvider>
        </AppMaxWidth>
    )
}

export default TrouverFormation