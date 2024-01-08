import React from "react";

const SideItems = ({ iconName, text, selected }) => {
  return (
    <li
      className={`${
        text === selected && "bg-[#ffffff0d] font-semibold text-white"
      } hover:cursor-pointer hover:bg-[#ffffff0d] flex items-center gap-3 px-1 sm:px-4 py-2 rounded-md text-sm`}
    >
      <a href="/" className="menu-item__icon">
        <span className="text-white">
          <iconify-icon
            icon={`${iconName}`}
            width="20"
            height="20"
          ></iconify-icon>
        </span>
      </a>
      <div className="hidden sm:flex">{text}</div>
    </li>
  );
};

export default SideItems;
