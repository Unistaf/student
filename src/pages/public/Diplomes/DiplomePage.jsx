import AppMaxWidth from "components/AppMaxWidth/AppMaxWidth"
import PublicBreadcrumps from "components/Breadcrumps/PublicBreadcrumps"
import Button from "components/Button"
import DiplomeList from "components/Diplomes/DiplomeList"
import Input from "components/Input"
import Select from "components/Select"
import React from "react"
import { HiSearch } from "react-icons/hi"

const DiplomePage = () => {
    return <div>
        <div className="bg-blue">
            <PublicBreadcrumps />
        </div>
        <AppMaxWidth>
            <h1 className="text-5xl font-bold">Trouver un diplôme</h1>
            <p className="mt-3">
                Un programme de formation accrédité est avant tout soumis à un
                processus d'évaluation et d'examen qui permet de garantir que ledit
                programme répond aux deux éléments de référence en termes de critères
                de qualité définis par l'ANAQ-SUP, à savoir les normes et les standards.
            </p>
            <p className="mt-5">
                <strong>*Bon à savoir</strong> : La durée de validité d'un programme (ou diplôme) de formation est de <strong>5 ans.</strong>
            </p>
            <div className="my-10">
                <form>
                    <div className="flex flex-wrap gap-5 items-end mt-5">
                        <Input
                            label={"Nom de l'établissement"}
                            placeholder={"Rechercher"}
                            extraClasse={"bg-transparent border-blue"}
                            inputContainerClass={"flex-1 min-w-fit"}
                        />
                        <Select
                            label={"Type d'établissement"}
                            extraClasse={"bg-transparent border-blue"}
                            containerClasse={"flex-1 min-w-fit"}
                        >
                            <option>Type d'établissement</option>
                        </Select>
                        <Select
                            label={"Lieu"}
                            extraClasse={"bg-transparent border-blue"}
                            containerClasse={"flex-1 min-w-fit"}
                        >
                            <option>Lieu</option>
                        </Select>
                        <Button
                            icon={{
                                name: HiSearch,
                                size: 20,
                                color: "#FFF"
                            }}
                            title={"Rechercher"}
                            className="bg-blue text-white h-11 px-5 min-w-12"
                        />
                    </div>
                </form>
            </div>
            <p className="mt-10 text-xl font-medium mb-5">Des diplômes accréditées qui pourront vous intéresser </p>
            <DiplomeList isImage={true} className="flex-col" />
        </AppMaxWidth>
    </div>
}

export default DiplomePage