import React from "react"
import { MdOutlineSchool } from "react-icons/md"

import AppMaxWidth from "components/AppMaxWidth/AppMaxWidth"
import Button from "components/Button"
import imgPrepare from "assets/imgs/preparez-vous.png"

const TrouverMaVoie = () => {
    return (
        <AppMaxWidth>
            <div className="grid grid-cols-2 px-10">
                <div>
                    <img src={imgPrepare} alt="Projet professionnel" />
                </div>
                <div>
                    <h3
                        className="text-xl font-bold text-blackSecondary w-60"
                    >
                        Préparez votre projet professionnel avec nous
                    </h3>
                    <div className="w-24 h-1 bg-blackSecondary my-3"></div>
                    <p className="mt-2 mb-5 tracking-wider leading-7">
                        Unistaf est une plateforme d’orientation visant à dématérialiser les informations concernant les écoles accréditées ainsi que leurs programmes auprès des organisations agréées.
                    </p>
                    <Button
                        className="bg-blue text-white text-center h-11 px-5 text-md font-semibold"
                        title={"Trouver ma voie"}
                        icon={{
                            name: MdOutlineSchool,
                            color: "#FFF",
                            size: 25
                        }}
                    />
                </div>
            </div>
        </AppMaxWidth>
    )
}

export default TrouverMaVoie