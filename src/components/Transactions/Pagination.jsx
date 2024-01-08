import React from 'react';

function Pagination() {
    return (
        <div className="flex my-4 items-center justify-center">
            <a href="#" className="px-4 py-1 mx-1 text-gray-500 capitalize bg-white rounded-md border border-gray-300 ">
                <div className="flex items-center -mx-1">
                    <iconify-icon icon="ooui:next-rtl" width="15" height="15"></iconify-icon>


                    <span className="mx-1">
                        previous
                    </span>
                </div>
            </a>

            {[1, 2, 3, 4, 5].map((page) => (
                <a
                    href="#"
                    className="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform  rounded-md sm:inline   hover:bg-blue-500 -500 hover:text-white -200"
                    key={page}
                >
                    {page}
                </a>
            ))}

            <a href="#" className="border border-gray-300  px-4 py-1 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md   hover:bg-blue-500 -500 hover:text-white -200">
                <div className="flex items-center -mx-1">
                    <span className="mx-1">
                        Next
                    </span>
                    <iconify-icon icon="ooui:next-ltr" width="15" height="15"></iconify-icon>

                </div>
            </a>
        </div>
    );
}

export default Pagination;
