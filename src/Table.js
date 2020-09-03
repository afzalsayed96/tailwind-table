import React from "react";
import data from "./data";
let props = data;

const Table = () => {
  return (
    <div className="min-w-full shadow overflow-hidden sm:rounded-lg border-gray-200">
      <div
        className="grid grid-cols-1 overflow-auto bg-white relative"
        style={{ height: 500 }}
      >
        <table className="min-w-full divide-y divide-gray-200 col-start-1 col-span-1 row-span-1 row-start-1">
          <thead>
            <tr>
              <th className="sticky top-0 bg-white px-6 py-3 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider invisible">
                {Object.keys(props.consolidated_holdings[0])[0]}
              </th>
              <th className="sticky top-0 bg-white px-6 py-3 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider md:invisible">
                {Object.keys(props.consolidated_holdings[0])[1]}
              </th>
              <th className="sticky top-0 bg-white px-6 py-3 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider lg:invisible">
                {Object.keys(props.consolidated_holdings[0])[2]}
              </th>
              {Object.keys(props.consolidated_holdings[0])
                .slice(3, -1)
                .map((column, index) => (
                  <th
                    className="sticky top-0 bg-white px-6 py-3 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                    key={index}
                  >
                    {column}
                  </th>
                ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {props.consolidated_holdings.map((row, index) => (
              <tr key={index}>
                <td className="whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 px-6 py-3 invisible">
                  {row[Object.keys(props.consolidated_holdings[0])[0]]}
                </td>
                <td
                  className={
                    "whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 px-6 py-3 md:invisible" +
                    (typeof row[
                      Object.keys(props.consolidated_holdings[0])[1]
                    ] === "number"
                      ? row[Object.keys(props.consolidated_holdings[0])[1]] < 0
                        ? " text-red-500 text-right"
                        : " text-right"
                      : "")
                  }
                >
                  {row[Object.keys(props.consolidated_holdings[0])[1]]}
                </td>
                <td
                  className={
                    "whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 px-6 py-3 lg:invisible" +
                    (typeof row[
                      Object.keys(props.consolidated_holdings[0])[1]
                    ] === "number"
                      ? row[Object.keys(props.consolidated_holdings[0])[1]] < 0
                        ? " text-red-500 text-right"
                        : " text-right"
                      : "")
                  }
                >
                  {row[Object.keys(props.consolidated_holdings[0])[2]]}
                </td>
                {Object.keys(props.consolidated_holdings[0])
                  .slice(3, -1)
                  .map((column, cellIndex) => (
                    <td
                      className={
                        "whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 px-6 py-3" +
                        (typeof row[column] === "number"
                          ? row[column] < 0
                            ? " text-red-500 text-right"
                            : " text-right"
                          : "")
                      }
                      key={cellIndex}
                    >
                      {row[column]}
                    </td>
                  ))}
              </tr>
            ))}
          </tbody>
        </table>
        <table className="min-w-full divide-y divide-gray-200 sticky left-0 col-start-1 col-span-1 row-span-1 row-start-1">
          <thead>
            <tr>
              <th className="sticky top-0 bg-white z-10 px-6 py-3 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider bg-white sticky left-0">
                {Object.keys(props.consolidated_holdings[0])[0]}
              </th>
              <th className="sticky top-0 bg-white px-6 py-3 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider invisible md:visible md:bg-white">
                {Object.keys(props.consolidated_holdings[0])[1]}
              </th>
              <th className="sticky top-0 bg-white px-6 py-3 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider invisible lg:visible lg:bg-white">
                {Object.keys(props.consolidated_holdings[0])[2]}
              </th>
              {Object.keys(props.consolidated_holdings[0])
                .slice(3, -1)
                .map((column, index) => (
                  <th
                    className="sticky top-0 bg-white px-6 py-3 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider invisible"
                    key={index}
                  >
                    {column}
                  </th>
                ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {props.consolidated_holdings.map((row, index) => (
              <tr key={index}>
                <td
                  className={
                    "whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 px-6 py-3 bg-white sticky left-0" +
                    (typeof row[
                      Object.keys(props.consolidated_holdings[0])[0]
                    ] === "number"
                      ? row[Object.keys(props.consolidated_holdings[0])[0]] < 0
                        ? " text-red-500 text-right"
                        : " text-right"
                      : "")
                  }
                >
                  {row[Object.keys(props.consolidated_holdings[0])[0]]}
                </td>
                <td
                  className={
                    "whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 px-6 py-3 invisible md:visible md:bg-white" +
                    (typeof row[
                      Object.keys(props.consolidated_holdings[0])[1]
                    ] === "number"
                      ? row[Object.keys(props.consolidated_holdings[0])[1]] < 0
                        ? " text-red-500 text-right"
                        : " text-right"
                      : "")
                  }
                >
                  {row[Object.keys(props.consolidated_holdings[0])[1]]}
                </td>
                <td
                  className={
                    "whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 px-6 py-3 invisible lg:visible lg:bg-white" +
                    (typeof row[
                      Object.keys(props.consolidated_holdings[0])[2]
                    ] === "number"
                      ? row[Object.keys(props.consolidated_holdings[0])[2]] < 0
                        ? " text-red-500 text-right"
                        : " text-right"
                      : "")
                  }
                >
                  {row[Object.keys(props.consolidated_holdings[0])[2]]}
                </td>
                {Object.keys(props.consolidated_holdings[0])
                  .slice(3, -1)
                  .map((column, cellIndex) => (
                    <td
                      className="whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 px-6 py-3 invisible"
                      key={cellIndex}
                    >
                      {row[column]}
                    </td>
                  ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
