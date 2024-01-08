import React from "react";

const Credit = () => {
  return (
    <div className="p-2 mx-2 mt-auto mb-5 flex gap-3 bg-[#ffffff0d] rounded-md text-sm justify-center">
      <div className="grid place-content-center">
        <iconify-icon
          icon="mingcute:wallet-line"
          width="25"
          height="25"
        ></iconify-icon>
      </div>
      <div className="flex-col hidden sm:flex">
        <span>Available credits</span>
        <span className="text-[15px] font-medium text-white">222.10</span>
      </div>
    </div>
  );
};

export default Credit;
