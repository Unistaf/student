import DiplomeCardItem from "components/Diplomes/DiplomeCardItem"
import React from "react"

// const Step = ({ icon, label }) => {
//   return <div>
//     <div className="w-10 h-10 rounded-full bg-blue">{icon}</div>
//     <p>{label}</p>
//   </div>;
// }

const CandidaterPage = () => {
  return (
    <div>
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
          <div>
            <div className="w-10 h-10 rounded-full bg-blue"></div>
            <p className="font-semibold mt-1 text-center">Informations personnelles</p>
          </div>
          <div>
            <div className="w-10 h-10 rounded-full bg-blue"></div>
            <p className="font-semibold mt-1 text-center">Cursus Scolaire</p>
          </div>
          <div className="flex flex-col items-end">
            <div className="w-10 h-10 rounded-full bg-blue"></div>
            <p className="font-semibold mt-1 text-center">Document à fournir</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CandidaterPage