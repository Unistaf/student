import React, { cloneElement } from "react";

import SidebarItem from "../../components/SidebarItem";
import ResourceDataMap from "../../components/ResourceDataMap";
import { links } from "routes/navigation/sidebarLinks";
import avatar from "assets/imgs/avatar.png"

const SidebarComponent = ({ bgColor, activeLinkColor, activeLinkBgColor, colorOnHover, linkColor }) => {
  const ClonedSidebarItem = ({ linkItem }) => cloneElement(<SidebarItem linkItem={linkItem} />, {
    activeLinkColor,
    activeLinkBgColor,
    colorOnHover,
    linkColor
  })
  return (
    <div
      style={{
        backgroundColor: bgColor ? bgColor : "#fff",
        height: "100%",
        padding: "25px 10px",
        borderRight: "1px solid rgba(0,0,0,0.1)"
      }}
    >
      <div className="flex flex-col items-center gap-2 mb-6">
        {/* <div style={{ width: 100, height: 100, borderRadius: "100%", backgroundColor: "gray" }}></div> */}
        <img className="w-24 h-24 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src={avatar} alt="Bordered avatar" />
        <p className="font-semibold">Isaac Yangala</p>
      </div>
      <ResourceDataMap
        resourceData={links}
        resourceItem={ClonedSidebarItem}
        resourceName="linkItem"
      />
    </div>
  );
};

export default SidebarComponent;
