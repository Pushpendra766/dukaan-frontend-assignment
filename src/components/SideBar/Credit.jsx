import React from 'react'

const Credit = () => {
    return (
        <div className="mt-auto mb-5 mx-4 px-4 py-[6px] flex gap-3 bg-[#ffffff0d] rounded-md text-sm ">
            <div className="grid place-content-center">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"
                    className="mr12">
                    <rect width="36" height="36" rx="4" fill="white" fillOpacity="0.1"></rect>
                    <path fillRule="evenodd" clipRule="evenodd"
                        d="M8.99995 9.79751C8.42319 9.79751 7.79995 10.3555 7.79995 11.2475V24.7475C7.79995 25.6395 8.42319 26.1975 8.99995 26.1975H27C27.5767 26.1975 28.2 25.6395 28.2 24.7475V21.8475H23C20.8737 21.8475 19.15 20.1238 19.15 17.9975C19.15 15.8712 20.8737 14.1475 23 14.1475H28.2V11.2475C28.2 10.3555 27.5767 9.79751 27 9.79751H8.99995ZM29.7999 14.1475V11.2475C29.7999 9.65423 28.6323 8.19751 27 8.19751H8.99995C7.36758 8.19751 6.19995 9.65423 6.19995 11.2475V24.7475C6.19995 26.3408 7.36758 27.7975 8.99995 27.7975H27C28.6323 27.7975 29.7999 26.3408 29.7999 24.7475V21.8475H29.85V14.1475H29.7999ZM22 17.9475C22 17.4781 22.3806 17.0975 22.85 17.0975H24.15C24.6194 17.0975 25 17.4781 25 17.9475C25 18.417 24.6194 18.7975 24.15 18.7975H22.85C22.3806 18.7975 22 18.417 22 17.9475ZM20.85 17.9975C20.85 16.8101 21.8126 15.8475 23 15.8475H28.15V20.1475H23C21.8126 20.1475 20.85 19.1849 20.85 17.9975Z"
                        fill="white"></path>
                </svg>
            </div>
            <div className="flex flex-col ">
                <span>Available credits</span>
                <span className="text-[15px] font-medium text-white">222.10</span>
            </div>
        </div>
    )
}

export default Credit