import React from "react";

const Logo = () => {
  return (
    <div className="px-1 sm:px-4 py-4 pb-5 flex justify-between">
      <div className="flex gap-3">
        <div className="">
          <img
            src="/pfp.jpg"
            className="rounded-md h-8 w-8 sm:h-10 sm:w-10"
            alt="user logo"
          />
        </div>
        <div className="flex-col hidden sm:flex">
          <div className="text-[15px] font-medium text-white cursor-pointer">
            Nishyan
          </div>
          <div className="text-sm underline text-[#ccc] hover:text-white cursor-pointer">
            Visit store
          </div>
        </div>
      </div>

      <div className="user__dropdown hidden sm:flex">
        <iconify-icon
          icon="mingcute:down-fill"
          width="25"
          height="25"
          style={{ color: "white" }}
        ></iconify-icon>
      </div>
    </div>
  );
};

export default Logo;
