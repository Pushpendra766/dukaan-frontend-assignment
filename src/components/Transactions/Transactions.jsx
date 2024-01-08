import React from "react";
import { useTable } from "react-table";
import dukanData from "../../utils/transationData.json";
import Pagination from "./Pagination";
const Transaction = () => {
  const data = React.useMemo(() => dukanData, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "Order ID",
        accessor: "order_ID",
      },
      {
        Header: "Order Date",
        accessor: "order_date",
      },
      {
        Header: "Order Amount",
        accessor: "order_amount",
      },
      {
        Header: "Transaction Fees",
        accessor: "transaction_fees",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <section className="px-8">
      <div className="text-[20px] font-medium">Transactions | This Month</div>

      <div className="mb-4 mt-5 bg-white rounded-md py-2 px-[10px] ">
        <div className="flex justify-between items-center">
          <div className="py-[6px] pr-2 pl-3 border border-[#ccc] rounded-sm flex gap-[6px] items-center w-[240px] text-[#71717a]">
            <svg
              width="18"
              height="18"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="svg-search-icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            <input
              type="text"
              className="py-1 text-[14px] outline-none border-none w-full placeholder:text-[#71717a] "
              placeholder="Search by Order ID"
            />
          </div>
          <div className="flex gap-5 ">
            <div className="flex items-center gap-[6px] py-[6px] px-[10px] border border-[#ccc] rounded-sm">
              Sort
              <svg
                height="16px"
                width="16px"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="svg-up-down-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
                />
              </svg>
            </div>
            <button className="flex items-center gap-[6px] py-[6px] px-2 border border-[#ccc] rounded-sm cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-[22px] w-[22px]"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zm-9 13.5a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="mt-[10px] ">
          <table
            className="w-full  text-[14px] border-collapse"
            {...getTableProps()}
          >
            <thead className="bg-[#f7f7f7] text-[#71717a] font-[400] text-left ">
              {headerGroups.map((headerGroup, index) => (
                <tr
                  className="flex justify-between items-center last:border-0 border-b-[2px] border-[#f7f7f7]"
                  key={index}
                  {...headerGroup.getHeaderGroupProps()}
                >
                  {headerGroup.headers.map((column, columnIndex) => (
                    <th
                      className={` py-[14px]  px-3 text-[#4d4d4d] ${
                        columnIndex === 1 ? "ml-14" : ""
                      } ${columnIndex === 2 ? "ml-12" : ""}`}
                      key={columnIndex}
                      {...column.getHeaderProps()}
                    >
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row, index) => {
                prepareRow(row);
                return (
                  <tr
                    className="border-b border-[#f7f7f7] flex justify-between items-center "
                    key={index}
                    {...row.getRowProps()}
                  >
                    {row.cells.map((cell, cellIndex) => (
                      <td
                        className={`last:text-right  last:pr-   py-[14px] px-3  ${
                          cellIndex === 0 ? "text-[#146eb4]" : ""
                        }`}
                        key={cellIndex}
                        {...cell.getCellProps()}
                      >
                        {cell.render("Cell")}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <Pagination />
      </div>
    </section>
  );
};

export default Transaction;
