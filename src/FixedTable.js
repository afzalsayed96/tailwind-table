import React from "react";
import props from "./data";

function TableCell({ className = "", style, children = "" }) {
  return (
    <div
      className={
        "inline-block w-40 px-6 py-3 truncate " +
        className +
        (typeof children === "number"
          ? children < 0
            ? " text-red-500 tabular-nums"
            : " tabular-nums"
          : "")
      }
      style={style}
      title={children}
    >
      <span
        className="inline-block w-full"
        style={{
          textOverflow: "fade",
          WebkitMaskImage:
            "-webkit-linear-gradient(left, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0) 100%)"
        }}
      >
        {typeof children === "number" ? children.toFixed(2) : children}
      </span>
    </div>
  );
}

function TableRow({ className = "", values = [] }) {
  return (
    <div
      className={"block whitespace-no-wrap " + className}
      style={{ width: "min-content" }}
    >
      <TableCell
        className="sticky left-0 border-r md:border-r-0 bg-white z-10"
        /* Adjust for the arrow in accordion */
        style={{ width: "11rem", left: "-1rem", paddingLeft: "2.5rem" }}
      >
        {values[0]}
      </TableCell>
      <TableCell
        className="md:sticky md:border-r lg:border-r-0 bg-white md:z-10"
        style={{ left: 160 }}
      >
        {values[1]}
      </TableCell>
      <TableCell
        className="lg:sticky lg:border-r border-r-0 bg-white lg:z-10"
        title={values[2]}
        style={{ left: 320 }}
      >
        {values[2]}
      </TableCell>
      {values.slice(3).map((value, index) => (
        <TableCell key={index}>{value}</TableCell>
      ))}
    </div>
  );
}

function TableAccordionRow({ className = "", values = [], children }) {
  return (
    <details
      className={
        "block divide-y divide-gray-200 whitespace-no-wrap " + className
      }
      style={{ width: "min-content" }}
    >
      <summary className="flex whitespace-no-wrap items-center outline-none cursor-pointer">
        <div className="flex whitespace-no-wrap items-center outline-none cursor-pointer">
          <TableCell className="sticky left-0 border-r md:border-r-0 bg-white z-10">
            {values[0]}
          </TableCell>
          <TableCell
            className="md:sticky md:border-r lg:border-r-0 bg-white md:z-10"
            style={{ left: 160 }}
          >
            {values[1]}
          </TableCell>
          <TableCell
            className="lg:sticky lg:border-r border-r-0 bg-white lg:z-10"
            style={{ left: 320 }}
          >
            {values[2]}
          </TableCell>
          {values.slice(3).map((value, index) => (
            <TableCell key={index}>{value}</TableCell>
          ))}
        </div>
      </summary>
      {children}
    </details>
  );
}

function FixedTable() {
  return (
    <div
      className="w-full divide-y divide-gray-200 overflow-auto shadow rounded-lg"
      style={{ maxHeight: 480 }}
    >
      <TableRow
        className="sticky top-0 bg-white z-20 text-gray-500 uppercase tracking-wider text-xs leading-4 font-medium "
        values={Object.keys(props.consolidated_holdings[0])}
      />
      {props.consolidated_holdings.map((row, index) => (
        <TableAccordionRow
          className="text-sm leading-5 font-medium text-gray-900"
          values={Object.values(row)}
          key={index}
        >
          <TableRow
            className="text-sm leading-5 font-medium text-gray-900"
            values={Object.values(row)}
            key={index}
          />
        </TableAccordionRow>
      ))}
      {props.consolidated_holdings.map((row, index) => (
        <TableRow
          className="text-sm leading-5 font-medium text-gray-900"
          values={Object.values(row)}
          key={index}
        />
      ))}
    </div>
  );
}

export default FixedTable;

export { TableRow, TableAccordionRow };
