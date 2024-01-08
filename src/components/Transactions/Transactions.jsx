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
    <section className="px-1 sm:px-8">
      <div className="text-lg sm:text-[20px] font-medium">
        Transactions | This Month
      </div>

      <div className="mb-4 mt-5 bg-white rounded-md py-2 px-[10px] ">
        <div className="flex justify-between items-center">
          <div className="px-2 py-1 mr-2 border border-[#ccc] rounded-sm flex gap-1.5 items-center w-[240px] text-[#71717a]">
            <iconify-icon
              icon="ri:search-line"
              width="18"
              height="18"
            ></iconify-icon>
            <input
              type="text"
              className="py-1 text-[14px] outline-none border-none w-full placeholder:text-[#71717a] "
              placeholder="Search by Order ID"
            />
          </div>
          <div className="flex gap-2">
            <div className="flex items-center gap-[6px] py-1 px-2 border border-[#ccc] rounded-sm">
              <span className="hidden sm:flex">Sort</span>
              <iconify-icon
                icon="basil:sort-outline"
                width="21"
                height="21"
              ></iconify-icon>
            </div>
            <button className="flex items-center gap-[6px] py-[6px] px-2 border border-[#ccc] rounded-sm cursor-pointer">
              <iconify-icon
                icon="material-symbols:download"
                width="21"
                height="21"
              ></iconify-icon>
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
                      className={`py-[14px] px-1 sm:px-3 text-[#4d4d4d] ${
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
                        className={`last:text-right  last:pr-   py-[14px] px-1 sm:px-3  ${
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
