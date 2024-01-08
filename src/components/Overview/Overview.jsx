import React from 'react'
import Card from './Card'

const Overview = () => {
    return (
        <div className="p-8">
            <div className="flex items-center justify-between">
                <div className="text-[20px] font-medium  ">Overview</div>
                <div className="flex items-center gap-[6px] py-[6px] px-[10px] border border-[#ccc] bg-white rounded-[4px] text-[#3f3f46]   ">
                    <span>Last month</span>
                    <svg height="16px" width="16px" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="stroke-2   ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
            </div>


            <div className="mt-7 flex justify-between gap-6 ">
                <Card title="Online Orders" amount="231" />
                <Card title="Amount Processed" amount="₹23,92,312.19" />
            </div>
        </div>
    )
}

export default Overview