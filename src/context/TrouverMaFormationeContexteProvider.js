import React, { createContext, useContext, useEffect, useMemo, useState } from "react"

const TrouverMaFormationeContexte = createContext()

const TrouverMaFormationeContexteProvider = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [progressBar, setProgressBar] = useState(0)
  const previousStep = () => {
    setCurrentIndex((prev) => prev + 1)
  }
  const nextStep = () => {
    setCurrentIndex((prev) => prev + 1)
    setProgressBar((currentIndex / children.length) * 100)
  }
  const contextValue = useMemo(() => {
    return {
      previousStep,
      nextStep
    }
  }, [])

  useEffect(() => {
    setProgressBar((currentIndex / children.length) * 100)
  }, [currentIndex])

  console.log({ progressBar, currentIndex });
  return (
    <TrouverMaFormationeContexte.Provider value={contextValue}>
      <div className="h-[4px] w-full bg-gray mb-6 rounded-md">
        <div style={{ width: progressBar + "%", transition: "all 300ms" }} className="h-[4px] bg-blue mb-4 rounded-md"></div>
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