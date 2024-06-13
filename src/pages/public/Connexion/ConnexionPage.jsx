import ConnexionForm from "components/Connexion/ConnexionForm"
import React from "react"

const ConnexionPage = () => {
  return (
    <div className="max-w-2xl m-auto shadow-sm h-[100vh] flex justify-center items-center">
      <div className="px-4 flex-1">
        <ConnexionForm />
      </div>
    </div>
  )
}

export default ConnexionPage