/* eslint-disable max-len */
import React from "react"
import unistafBlack from "assets/logos/unistaf-black-logo.png"
import { MdOutlineSchool } from "react-icons/md";
import BadgeIcon from "components/Badge/BadgeIcon";
import { HiLocationMarker } from "react-icons/hi";
import Button from "components/Button";

const DiplomeSpec = ({ label, desc }) => {
    return <p className="d-flex text-sm">
        <span className="text-tercary">{label} : </span> <span className="font-bold">{desc}</span>
    </p>
}

const DiplomeCardItem = ({ isImage }) => {
    return (
        <div className="flex flex-col flex-1 min-w-[320px] gap-5 shadow-xl items-cente bg-white rounded-lg md:flex-row hover:bg-gray-100 px-5">
            {
                isImage && <img
                    className="object-contain w-full rounded-t-lg h-96 md:h-auto md:w-32 md:rounded-none md:rounded-s-lg"
                    src={unistafBlack}
                    alt="Unistaf"
                />
            }
            <div className="flex flex-col flex-1 justify-between p-4 leading-normal">
                <div className="flex items-center gap-3">
                    <h5
                        className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                        Licence informatique et gestion
                    </h5>
                    {/* {
                        isImage && <span className="text-tercary font-semibold"> - UNISTAF</span>
                    } */}
                </div>
                <div className="flex flex-col gap-2 py-3 md:flex-row md:gap-10">
                    <DiplomeSpec label={"Domaine"} desc={"Sciences politiques"} />
                    <DiplomeSpec label={"Formation"} desc={"Privée"} />
                    <DiplomeSpec label={"Accréditation"} desc={"Anaqsup"} />
                </div>
                <div className="flex flex-wrap gap-4 justify-between items-center">
                    <div className="flex gap-5">
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
                    <Button className={"border border-blueSecondary text-blue h-9 text-sm"} title={"Candidater"} />
                </div>
            </div>
        </div>
    )
}

export default DiplomeCardItem