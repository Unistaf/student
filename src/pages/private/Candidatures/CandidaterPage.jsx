import React from "react"
import { FaUser } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import { TiDocumentText } from "react-icons/ti";

import AnimateOnRender from "components/AnimateRender/AnimateOnRender"
import CandidaterSteps from "components/Candidatures/Multistep/CandidaterSteps"
import DiplomeCardItem from "components/Diplomes/DiplomeCardItem"
import { twMerge } from "tailwind-merge";

const Step = ({ icon, label, className }) => {
  return <div className={twMerge(["flex flex-col"], className)}>
    <div className="w-10 h-10 rounded-full bg-blue flex justify-center items-center">
      {icon}
    </div>
    <p className="font-semibold mt-1 text-center">{label}</p>
  </div>;
}

const CandidaterPage = () => {
  return (
    <AnimateOnRender>
      <div className="flex gap-6">
        <div className="pe-12">
          <h3 className="font-semibold text-2xl">Bienvenu Isaac,</h3>
          <p className="font-medium">Compléter inscription pour valider</p>
        </div>
        <DiplomeCardItem />
      </div>
      <div className="mt-14">
        <div className="border-t-2 border-gray w-full"></div>
        <div className="flex justify-between mt-[-20px]">
          <Step
            className=""
            icon={<FaUser color="white" size={20} />}
            label="Informations personnelles"
          />
          <Step
            className="items-center"
            icon={<MdOutlineWork color="white" size={20} />}
            label="Cursus Scolaire"
          />
          <Step
            className="items-end"
            icon={<TiDocumentText color="white" size={23} />}
            label="Document à fournir"
          />
        </div>
      </div>
      <CandidaterSteps />
    </AnimateOnRender>
  )
}

export default CandidaterPage