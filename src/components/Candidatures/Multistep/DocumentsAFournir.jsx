import Input from "components/Input"
import React from "react"

const DocumentsAFournir = () => {
  return (
    <div>
      <div className="flex gap-4">
        <Input type="file" label="Extrait de naissance" placeholder="Télécharger" inputContainerClass="flex-1" />
        <Input type="file" label="Relevé de note" placeholder="Télécharger" inputContainerClass="flex-1" />
      </div>
      <div className="flex mt-3">
        <Input type="file" label="Diplomes" placeholder="Télécharger" inputContainerClass="flex-1" />
      </div>
    </div>
  )
}

export default DocumentsAFournir