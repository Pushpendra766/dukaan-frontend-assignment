import React from 'react'

const SideItems = ({ iconName, text, }) => {
    return (
        <li className="hover:cursor-pointer hover:bg-[#ffffff0d] flex items-center gap-3 px-4 py-2 rounded-md mb-1 text-[14px]   ">
            <a href="/" className="menu-item__icon">
                <iconify-icon icon={`${iconName}`} width="20" height="20" style={{ color: "white" }}></iconify-icon>
            </a>
            <div className="">{text}</div>
        </li>
    )
}

export default SideItems