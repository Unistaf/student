import React from "react"
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

import Button from "components/Button"
import RadioInput from "components/Form/RadioInput"
import Input from "components/Input"

const ConnexionForm = () => {
  return (
    <div>
      <div className="mb-9 flex items-center gap-9">
        <button className="border px-6 py-3 border-gray rounded-md bg-[#F2F2F2] font-medium flex items-center gap-2 flex-1">
          <FcGoogle size={25} />
          Continuer avec Google
        </button>
        <button className="border px-6 py-3 border-gray rounded-md bg-[#F2F2F2] font-medium flex items-center gap-2 flex-1">
          <FaFacebookF size={25} />
          Continuer avec Facebook
        </button>
      </div>
      <div className="border-t border-gray relative translate-[-50%, -50%] mb-4">
        <span className="bg-white w-fit shadow-sm rounded-full p-2 absolute z-10 left-[50%] right-[50%] top-[-20px] font-semibold">Ou</span>
      </div>
      <label className="font-semibold text-blue">Genre</label>
      <div className="flex gap-4">
        <RadioInput label="Masculin" />
        <RadioInput label="Féminin" />
      </div>
      <div className="flex flex-wrap gap-4">
        <div className="flex-1">
          <Input label="Prénom" placeholder="Prénom" />
        </div>
        <div className="flex-1">
          <Input label="Nom" placeholder="Nom" />
        </div>
      </div>
      <div className="flex flex-wrap gap-4 mt-4">
        <div className="flex-1">
          <Input label="Email" placeholder="Email" />
        </div>
        <div className="flex-1">
          <Input label="Mot de passe" placeholder="Mot de passe" />
        </div>
      </div>
      <div className="mt-4">
        <RadioInput label="Condition générale d'utilisation" />
      </div>
      {/* <div className="flex justify-end"> */}
      <Button title="Suivant" className="bg-blue text-white px-6 py-2 w-full mt-6" />
      {/* </div> */}
    </div>
  )
}

export default ConnexionForm