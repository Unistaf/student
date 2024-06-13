import React from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import { MdOutlineSchool } from "react-icons/md"
import { HiLocationMarker } from "react-icons/hi"
import { CiPhone, CiMail, CiGlobe } from "react-icons/ci";

import Modal from "layouts/modal/ModalComponent"
import blackLogo from "assets/logos/unistaf-black-logo.png"
import { DiplomeSpec } from "components/Diplomes/DiplomeCardItem"
import BadgeIcon from "components/Badge/BadgeIcon"
import Button from "components/Button"
import { LOGIN_PATH } from "routes/navigation/navigationPaths"

const FormationTitle = styled.h3`
  font-size: 25px;
  font-weight: 600;
  margin-top: 10px;
`
const DescriptionTitle = styled.h4`
  font-size: 25px;
  font-weight: 600;
  margin-top: 10px;
`
const DescriptionText = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 23.3px;
`

const Logo = () => {
  return (
    <Link className="block text-teal-600" href="/">
      <img src={blackLogo} alt="Unistaf" className="w-32" />
    </Link>
  )
}

const FormationDetailsModal = ({ openModal, closeModal }) => {
  const navigate = useNavigate();
  return (
    <Modal title={"Détails sur la formation"} opened={openModal} onClosed={closeModal}>
      <div className="flex items-center gap-10">
        <Logo />
        <FormationTitle>Licence Achat</FormationTitle>
      </div>
      <div className="mt-4">
        <div className="flex gap-10 mb-3">
          <DiplomeSpec label={"Domaine"} desc={"Commerce et Management"} />
          <DiplomeSpec label={"Formation"} desc={"Privée"} />
        </div>
        <DiplomeSpec label={"Accréditation"} desc={"Anaqsup"} />
      </div>
      <div className="flex gap-2 mt-5">
        <BadgeIcon
          className={"bg-blueRgba text-blue text-xs"}
          icon={{
            name: MdOutlineSchool,
            size: 15
          }}
          label={"Licence"}
        />
        <BadgeIcon
          className={"bg-blueRgba text-blue text-xs"}
          icon={{
            name: HiLocationMarker,
            size: 15,
            color: "red"
          }}
          label={"Dakar"}
        />
      </div>
      <div className="border-t border-gray mt-3">
        <DescriptionTitle>Description</DescriptionTitle>
        <DescriptionText>
          Lorem ipsum dolor sit amet consectetur. Viverra pharetra commodo
          facilisis ptesque odio varius ut suscipit dui. Nisl volutpat duis
          eget adipiscing. Maecenas orci quam aenean tellus integer. Fermentum
          cursus etiam ipsum hac elementum laoreet volutpat elit. Duis et potenti
          malesuada imperdiet proin lectus ipsum enim. Sed sed sit velit in duis et malesuada scelerisque. Fermentum luctus mauris risus tincidunt volutpat.
        </DescriptionText>
      </div>
      <div className="mt-3">
        <div className="flex gap-2 mb-2">
          <CiPhone size={25} />
          <span>77 000 00 00</span>
        </div>
        <div className="flex gap-2 mb-2">
          <CiMail size={25} />
          <span>unistaf@gmail.com</span>
        </div>
        <div className="flex gap-2 mb-2">
          <CiGlobe size={25} />
          <span>Site web</span>
        </div>
      </div>
      <div className="flex justify-center items-center gap-3 mt-4">
        <Button onClick={() => navigate("/" + LOGIN_PATH)} title={"Candidater"} className="bg-blue text-white px-4 py-2 flex-1" />
        <Button title={"Voir l’etablissement"} className="flex-1 border px-4 py-2" />
        {/* <div className="flex-1">
        </div>
        <div className="flex-1">
        </div> */}
      </div>
    </Modal>
  )
}

export default FormationDetailsModal