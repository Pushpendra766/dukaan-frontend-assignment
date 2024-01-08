import React from "react";
import Credit from "./Credit";
import SideItems from "./SideItems";
import Logo from "./Logo";
import { sideItems } from "../../utils/sidebarItems";

const SideNavbar = () => {
  const selected = "Payments";
  return (
    <div className="flex flex-col h-full">
      <Logo />

      <ul className="p-2 list-none flex-1">
        {sideItems.map((item) => {
          return (
            <SideItems
              iconName={item.name}
              text={item.text}
              selected={selected}
            />
          );
        })}
      </ul>

      <Credit />
    </div>
  );
};

export default SideNavbar;
