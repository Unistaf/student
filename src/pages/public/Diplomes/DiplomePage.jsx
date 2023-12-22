import AppMaxWidth from "components/AppMaxWidth/AppMaxWidth"
import PublicBreadcrumps from "components/Breadcrumps/PublicBreadcrumps"
import Button from "components/Button"
import DiplomeCardItem from "components/Diplomes/DiplomeCardItem"
import Input from "components/Input"
import Select from "components/Select"
import React from "react"
import { HiSearch } from "react-icons/hi"

const DiplomePage = () => {
    return <div>
        <PublicBreadcrumps />
        <AppMaxWidth>
            <h1 className="text-4xl font-bold">Trouver un diplôme</h1>
            <p className="mt-3">
                Un programme de formation accrédité est avant tout soumis à un
                processus d'évaluation et d'examen qui permet de garantir que ledit
                programme répond aux deux éléments de référence en termes de critères
                de qualité définis par l'ANAQ-SUP, à savoir les normes et les standards.
            </p>
            <p className="mt-5">
                <strong>*Bon à savoir</strong> : La durée de validité d'un programme (ou diplôme) de formation est de <strong>5 ans.</strong>
            </p>
            <div>
                <form className="grid grid-cols-4 gap-5 items-end mt-5">
                    <Input label={"Nom de l'établissement"} placeholder={"Rechercher"} extraClasse={"bg-transparent border-blue"} />
                    <Select label={"Type d'établissement"} extraClasse={"bg-transparent border-blue"}>
                        <option>Type d'établissement</option>
                    </Select>
                    <Select label={"Lieu"} extraClasse={"bg-transparent border-blue"}>
                        <option>Lieu</option>
                    </Select>
                    <Button
                        icon={{
                            name: HiSearch,
                            size: 20,
                            color: "#FFF"
                        }}
                        title={"Rechercher"}
                        className="bg-blue text-white h-11 px-5"
                    />
                </form>
            </div>
            <p className="mt-10 text-xl font-medium mb-5">Des diplômes accréditées qui pourront vous intéresser </p>
            {
                <div className="flex flex-col gap-5">
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8].map((index) => {
                            return <DiplomeCardItem key={index} />
                        })
                    }
                </div>
            }
        </AppMaxWidth>
    </div>
}

export default DiplomePage