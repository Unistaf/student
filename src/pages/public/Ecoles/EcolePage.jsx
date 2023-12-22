import AppMaxWidth from "components/AppMaxWidth/AppMaxWidth"
import PublicBreadcrumps from "components/Breadcrumps/PublicBreadcrumps"
import Button from "components/Button"
import EcoleCardItem from "components/Ecoles/EcoleCardItem"
import Input from "components/Input"
import Select from "components/Select"
import React from "react"
import GridList from "react-flexible-list"
import { HiSearch } from "react-icons/hi"

const EcolePage = () => {
    return (
        <div>
            <PublicBreadcrumps />
            <AppMaxWidth>
                <h1 className="text-4xl font-bold">Liste des établissements</h1>
                <div>
                    <form className="grid grid-cols-4 gap-5 items-end mt-5">
                        <Input
                            label={"Nom de l'établissement"}
                            placeholder={"Rechercher"}
                            extraClasse={"bg-transparent border-blue"}
                        />
                        <Select
                            label={"Type d'établissement"}
                            extraClasse={"bg-transparent border-blue"}
                        >
                            <option>Type d'établissement</option>
                        </Select>
                        <Select
                            label={"Lieu"}
                            extraClasse={"bg-transparent border-blue"}
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
                            className="bg-blue text-white h-11 px-5"
                        />
                    </form>
                </div>
                <div className="mt-10">
                    <GridList
                        resourceData={[1, 2, 3, 4, 5, 6, 7]}
                        resourceItem={(item) => <EcoleCardItem />}
                        cardWidth={400}
                    />
                </div>
            </AppMaxWidth>
        </div>
    )
}

export default EcolePage