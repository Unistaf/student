import SpliTemplateScreen from "layouts"
import NavbarComponent from "layouts/navbar/NavbarComponent"
import SidebarComponent from "layouts/sidebar/SidebarComponent"
import React from "react"
import { Outlet } from "react-router-dom"

/*
|--------------------------------------------------------------------------
| Dashboard avec un sidebar
|--------------------------------------------------------------------------
|
| Ce layout contient le sidebar ainsi que le navbar de l'application
| Il est appeler dans routes/navigation/privte.js en tant que children de RequireAuth
|
*/
const SplitShell = () => {
    return (
        <SpliTemplateScreen>
            <NavbarComponent />
            <SidebarComponent
                bgColor={"#fff"}
                activeLinkColor={"#fff"}
                activeLinkBgColor="rgba(17, 17, 165, 1)"
                linkColor="black"
                colorOnHover={"black"}
            />
            <div className="py-5">
                <Outlet />
            </div>
        </SpliTemplateScreen>
    )
}

export default SplitShell