import React from "react"
import { MdOutlineSchool } from "react-icons/md"

import AppMaxWidth from "components/AppMaxWidth/AppMaxWidth"
import SectionTitle from "components/Section/SectionTitle"
import Button from "components/Button"

const FormationsPlusRecherchees = () => {
    return (
        <AppMaxWidth>
            <SectionTitle title={"Les formations les plus recherchées"} />
            <div className="flex md:justify-center gap-y-4 gap-x-6 mt-9 flex-wrap">
                {
                    [1, 2, 3, 4, 5, 6, 7].map((formation, index) => {
                        return <Button
                            key={index}
                            title={"Licence système et réseau"}
                            icon={{
                                name: MdOutlineSchool,
                                color: "#C4C4C4",
                                size: 25
                            }}
                            className="bg-none text-tercary text-center h-11 px-5 text-md font-semibold border border-gray"
                        />
                    })
                }
            </div>
        </AppMaxWidth>
    )
}

export default FormationsPlusRecherchees