import React from "react";

function Pagination() {
  const currentPage = 10;
  const pages = Array.from({ length: 18 }, (_, index) => index + 1);
  return (
    <div className="flex my-4 items-center justify-center">
      <a
        href="#"
        className="px-1 sm:px-4 py-1 bg-white rounded-md border border-gray-300"
      >
        <div className="flex items-center">
          <iconify-icon
            icon="ooui:next-rtl"
            width="15"
            height="15"
          ></iconify-icon>

          <span className="mx-1">Prev</span>
        </div>
      </a>
      {pages.length > 7 && (
        <>
          <a
            href="#"
            className="px-2 py-2 mx-1 text-gray-700 transition-colors duration-300 transform  rounded-md sm:inline   hover:bg-blue-500 -500 hover:text-white"
          >
            1
          </a>
          <a>...</a>
        </>
      )}

      {pages.slice(currentPage - 2, currentPage + 1).map((page) => (
        <a
          href="#"
          className={`px-1.5 py-1 mx-1 text-gray-700 transition-colors duration-300 transform rounded-md sm:inline hover:bg-blue-500 -500 hover:text-white ${
            page === currentPage && "bg-blue-500 text-white"
          }`}
          key={page}
        >
          {page}
        </a>
      ))}
      {pages.length > 7 && (
        <>
          <a>...</a>
          <a
            href="#"
            className="px-2 py-2 mx-1 text-gray-700 transition-colors duration-300 transform  rounded-md sm:inline   hover:bg-blue-500 -500 hover:text-white"
          >
            {pages.length}
          </a>
        </>
      )}
      <a
        href="#"
        className={
          "border border-gray-300 px-1 sm:px-4 py-1 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md hover:bg-blue-500 hover:text-white"
        }
      >
        <div className="flex items-center">
          <span className="mx-1">Next</span>
          <iconify-icon
            icon="ooui:next-ltr"
            width="15"
            height="15"
          ></iconify-icon>
        </div>
      </a>
    </div>
  );
}

export default Pagination;
