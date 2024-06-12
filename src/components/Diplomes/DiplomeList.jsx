import React, { useState } from "react"
import DiplomeCardItem from "./DiplomeCardItem"
import { twMerge } from "tailwind-merge"
import FormationDetailsModal from "components/Formation/FormationDetailsModal";

const DiplomeList = ({ className, isImage }) => {
    const [openModal, setOpenModal] = useState(false);
    const closeModal = () => {
        setOpenModal(false);
    }
    return (
        <>
            {openModal && <FormationDetailsModal openModal={openModal} closeModal={closeModal} />}
            <div className={twMerge(["flex gap-5", className])}>
                {
                    [1, 2, 3, 4, 5, 6, 7, 8].map((index) => {
                        return <DiplomeCardItem onClick={() => setOpenModal(true)} isImage={isImage} key={index} />
                    })
                }
            </div>
        </>
    )
}

export default DiplomeList