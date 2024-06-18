import Input from "components/Input"
import React from "react"

const CursusRow = () => {
  return <div className="flex gap-4">
    <Input label="Etablissement" placeholder="Ajouter" inputContainerClass="flex-1" />
    <Input label="Année" placeholder="Ajouter" inputContainerClass="flex-1" />
    <Input label="Ville/Pays" placeholder="Ajouter" inputContainerClass="flex-1" />
    <Input label="Diplôme obtenu" placeholder="Ajouter" inputContainerClass="flex-1" />
  </div>
}

const CursusScolaire = () => {
  return (
    <div>
      <CursusRow />
      <p className="italic mt-3">Ajouter une colonne</p>
    </div>
  )
}

export default CursusScolaire