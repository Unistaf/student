/* eslint-disable max-len */
import React from "react"

import HeaderItem from "./HeaderItem"
import BlackLogo from "components/Logo/BlackLogo"
import { DIPLOME_PATH, ECOLES_PATH } from "routes/navigation/navigationPaths"
import Button from "components/Button"
import { MdOutlineSchool } from "react-icons/md"

const Header = () => {
    return (
        <header className="bg-white sticky top-0 z-10 shadow-md">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="md:flex md:items-center md:gap-12">
                        <BlackLogo />
                    </div>

                    <div className="hidden md:block">
                        <nav aria-label="Global">
                            <ul className="flex items-center gap-6 text-sm">
                                <HeaderItem to={""}>Acceuil</HeaderItem>
                                <HeaderItem to={ECOLES_PATH}>Ecoles</HeaderItem>
                                <HeaderItem to={DIPLOME_PATH}>Diplômes</HeaderItem>
                            </ul>
                        </nav>
                    </div>

                    <div className="flex items-center gap-4">
                        <Button
                            icon={{
                                name: MdOutlineSchool,
                                color: "rgba(17, 17, 167)",
                                size: 25
                            }}
                            className="bg-white text-center font-semibold text-blue flex-auto h-11 shadow-xl px-9"
                            title={"Trouver une formation"}
                        />
                        <div className="sm:flex sm:gap-4">
                            <a
                                className="rounded-full font-semibold bg-teal-600 px-5 py-2.5 text-sm bg-blue text-white shadow"
                                href="/"
                            >
                                Nous contacter
                            </a>
                        </div>

                        <div className="block md:hidden">
                            <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header