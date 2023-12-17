import AppMaxWidth from "components/AppMaxWidth/AppMaxWidth"
import PublicBreadcrumps from "components/Breadcrumps/PublicBreadcrumps"
import Button from "components/Button"
import Input from "components/Input"
import Select from "components/Select"
import React from "react"
import { HiSearch } from "react-icons/hi"

const DiplomePage = () => {
    return <div>
        <PublicBreadcrumps />
        <AppMaxWidth>
            <h1 className="text-4xl font-bold">Liste des diplômes</h1>
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
                        className="bg-blue text-white w-50"
                    />
                </form>
            </div>
        </AppMaxWidth>
    </div>
}

export default DiplomePage