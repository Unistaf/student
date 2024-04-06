import Button from "components/Button"
import React, { createContext, useContext, useEffect, useMemo, useState } from "react"

const TrouverMaFormationeContexte = createContext()

const TrouverMaFormationeContexteProvider = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [progressBar, setProgressBar] = useState(0)
  const [userFormationChoice, setUserFormationChoice] = useState({
    selectedDomaine: { label: "" },
    selectedFiliere: { label: "" },
    selectedDiplome: { label: "" },
    selectedLieuFormation: { label: "" },
  })
  const [labels, setLabels] = useState([])

  const previousStep = () => {
    const copyLabels = [...labels]
    if (copyLabels.length > 1) {
      copyLabels.pop()
    }
    setLabels(copyLabels)
    setCurrentIndex((prev) => prev - 1)
  }

  const nextStep = () => {
    setCurrentIndex((prev) => prev + 1)
  }

  const setDomaineChoice = (domaine) => {
    const copyLabels = [...labels]
    if (copyLabels.length === 1) {
      setLabels((prev) => [domaine])
    } else {
      setLabels((prev) => [...prev, domaine])
    }
    setUserFormationChoice((prevState) => ({
      ...prevState,
      selectedDomaine: domaine
    }))
  }

  const setFiliereChoice = (filiere) => {
    setLabels((prev) => [...prev, filiere])
    setUserFormationChoice((prevState) => ({
      ...prevState,
      selectedFiliere: filiere
    }))
  }

  const setDiplomeChoice = (diplome) => {
    setLabels((prev) => [...prev, diplome])
    setUserFormationChoice((prevState) => ({
      ...prevState,
      selectedDiplome: diplome
    }))
  }
  const setLieuFormationChoice = (lieu) => {
    setLabels((prev) => [...prev, lieu])
    setUserFormationChoice((prevState) => ({
      ...prevState,
      selectedLieuFormation: lieu
    }))
  }

  const contextValue = useMemo(() => {
    return {
      userFormationChoice,
      previousStep,
      nextStep,
      setDomaineChoice,
      setFiliereChoice,
      setDiplomeChoice,
      setLieuFormationChoice
    }
  }, [])

  useEffect(() => {
    setProgressBar((currentIndex / (children.length - 1)) * 100)
    console.log({ labels });
  }, [currentIndex])

  return (
    <TrouverMaFormationeContexte.Provider value={contextValue}>
      {
        !!currentIndex && <Button
          onClick={previousStep}
          className="shadow-sm rounded-lg text-sm border mb-3 p-2"
          title={"Précédent"}
        />
      }
      <div className="h-[4px] w-full bg-gray mb-6 rounded-md">
        <div
          style={{ width: progressBar + "%", transition: "all 300ms" }}
          className="h-[4px] bg-blue mb-4 rounded-md"
        >
        </div>
      </div>
      <div className="mb-5">
        {
          labels.map(({ label }, index) => (label !== "" && index > 0) ?
            <span key={index}> - {label}</span> :
            <span key={index}>{label}</span>)
        }
      </div>

      {children[currentIndex]}
    </TrouverMaFormationeContexte.Provider>
  )
}

export default TrouverMaFormationeContexteProvider

export const useTrouverMaFormationeContexte = () => {
  const ctx = useContext(TrouverMaFormationeContexte)
  return ctx
}