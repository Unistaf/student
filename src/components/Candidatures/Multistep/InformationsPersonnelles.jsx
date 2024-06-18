import Input from "components/Input"
import React from "react"

const InformationsPersonnelles = () => {
  return (
    <div>
      <div className="flex gap-4 mb-4">
        <Input label="Nom" placeholder="Yangala" inputContainerClass="flex-1" />
        <Input label="Prénom" placeholder="Isaac" inputContainerClass="flex-1" />
      </div>
      <div className="flex gap-4 mb-4">
        <Input label="Genre" placeholder="Mr" inputContainerClass="flex-1" />
        <Input label="Nationalité" placeholder="Ajouter votre nationalité" inputContainerClass="flex-1" />
      </div>
      <div className="flex gap-4 mb-4">
        <Input label="Lieu de naissance" placeholder="Kozoum" inputContainerClass="flex-1" />
        <Input type="date" label="Date de naissance" placeholder="03/01/1984" inputContainerClass="flex-1" />
      </div>
      <div className="flex gap-4 mb-4">
        <Input label="Ville" placeholder="Dakar" inputContainerClass="flex-1" />
        <Input type="text" label="Résidence" placeholder="Fass" inputContainerClass="flex-1" />
      </div>
      <div className="flex gap-4 mb-4">
        <Input type="phone" label="Numéro de téléphone" placeholder="789900098" inputContainerClass="flex-1" />
        <Input type="mail" label="Email" placeholder="isaac@gmail.com" inputContainerClass="flex-1" />
      </div>
    </div>
  )
}

export default InformationsPersonnelles