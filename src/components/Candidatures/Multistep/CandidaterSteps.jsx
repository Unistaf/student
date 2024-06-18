import React, { useState } from "react"
import InformationsPersonnelles from "./InformationsPersonnelles";
import CursusScolaire from "./CursusScolaire";
import DocumentsAFournir from "./DocumentsAFournir";
import Button from "components/Button";

const CandidaterSteps = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const previewStep = () => {
    setCurrentIndex(currentIndex - 1)
  }
  const nextStep = () => {
    setCurrentIndex(currentIndex + 1)
  }
  const steps = [<InformationsPersonnelles key={0} />, <CursusScolaire key={1} />, <DocumentsAFournir key={2} />]

  return (
    <div>
      <div className="my-9 min-h-[400px]">
        {steps[currentIndex]}
      </div>
      <div className="flex gap-5 sticky bottom-2 bg-white p-4 rounded-md">
        <Button disabled={!currentIndex} title={"Précèdent"} onClick={previewStep} className="px-6 py-2 border border-blue bg-white" />
        <Button disabled={currentIndex === steps.length - 1} title={"Suivant"} onClick={nextStep} className="px-6 py-2 bg-blue text-white" />
      </div>
    </div>
  )
}

export default CandidaterSteps