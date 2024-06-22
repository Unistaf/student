import React from "react";
import { MdOutlineSchool } from "react-icons/md";

import Button from "components/Button";
import HeaderItem from "components/Header/HeaderItem";
import BlackLogo from "components/Logo/BlackLogo";
import { DIPLOME_PATH, ECOLES_PATH, TROUVER_FORMATION_PATH } from "routes/navigation/navigationPaths";
// import avatar from "assets/imgs/avatar.png"

function NavbarComponent({ bgColor, navbarContainerStyles }) {
  return (
    <header className="bg-white sticky top-0 z-10 shadow-md">
      <div className="mx-auto max-w-screen-xl">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <BlackLogo />
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                {/* <HeaderItem to={""}>Acceuil</HeaderItem> */}
                <HeaderItem to={ECOLES_PATH}>Ecoles</HeaderItem>
                <HeaderItem to={DIPLOME_PATH}>Diplômes</HeaderItem>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Button
              onClick={() => navigate(TROUVER_FORMATION_PATH)}
              icon={{
                name: MdOutlineSchool,
                color: "rgba(17, 17, 167)",
                size: 25
              }}
              className="bg-white text-center font-semibold text-blue flex-auto h-11 shadow-xl px-9"
              title={"Trouver une formation"}
            />
            {/* <div className="sm:flex sm:gap-4">
              <a
                className="rounded-full font-semibold bg-teal-600 px-5 py-2.5 text-sm bg-blue text-white shadow"
                href="/"
              >
                Nous contacter
              </a>
            </div> */}

            {/* <div className="block">
              <img className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src={avatar} alt="Bordered avatar" />
            </div> */}
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavbarComponent;
