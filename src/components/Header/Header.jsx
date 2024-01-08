import React from "react";

const Header = () => {
  return (
    <>
      <div className="py-4 px-8  border-b border-[#ccc] flex justify-between bg-white   ">
        <div className="flex items-center gap-3">
          <div className="text-[20px] font-medium ">Payouts</div>
          <div className="mt-1 flex gap-[6px] text-[12px] cursor:pointer text-[#71717a] items-center justify-center ">
            <div className="">
              <iconify-icon
                icon="ph:question"
                width="22"
                height="22"
              ></iconify-icon>
            </div>
            <div className="hidden md:flex">How it works?</div>
          </div>
        </div>
        <div className="hidden sm:flex">
          <div className="flex items-center gap-2 py-1.5 px-2 md:px-4 rounded-lg bg-[#f7f7f7] text-[#71717a]">
            <div className="">
              <iconify-icon
                icon="ri:search-line"
                width="22"
                height="22"
              ></iconify-icon>
            </div>
            <input
              className="placeholder:text-[#71717a] outline-none border-none bg-transparent"
              type="text"
              placeholder="Search features, tutorial, etc."
            />
          </div>
        </div>

        <div className="flex gap-[10px] ">
          <div className="flex items-center justify-center bg-[#dfdddd] h-10 w-10 rounded-full cursor-pointer text-[#3f3f46] ">
            <iconify-icon
              icon="icon-park-solid:announcement"
              width="22"
              height="22"
              flip="vertical"
            ></iconify-icon>{" "}
          </div>
          <div className="flex items-center justify-center bg-[#dfdddd] h-10 w-10 rounded-full cursor-pointer text-[#3f3f46] ">
            <iconify-icon
              icon="icon-park-solid:down-one"
              width="22"
              height="22"
            ></iconify-icon>
          </div>
        </div>
      </div>
      <div className="sm:hidden bg-white py-1 px-3">
        <div className="flex items-center gap-2 py-1.5 px-2 md:px-4 rounded-lg bg-[#f7f7f7] text-[#71717a]">
          <div className="">
            <iconify-icon
              icon="ri:search-line"
              width="22"
              height="22"
            ></iconify-icon>
          </div>
          <input
            className="placeholder:text-[#71717a] outline-none border-none bg-transparent"
            type="text"
            placeholder="Search features, tutorial, etc."
          />
        </div>
      </div>
    </>
  );
};

export default Header;
