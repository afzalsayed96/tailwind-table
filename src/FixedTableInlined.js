import React from "react";
import props from "./data";

function FixedTable() {
  return (
    <div
      className="w-full divide-y divide-gray-200 overflow-auto shadow rounded-lg"
      style={{ maxHeight: 480 }}
    >
      {/* Header */}
      <div
        className={
          "sticky top-0 bg-white z-20 text-gray-500 uppercase tracking-wider text-xs leading-4 font-medium block whitespace-no-wrap"
        }
        style={{ width: "min-content" }}
      >
        <div
          className={
            "inline-block w-40 px-6 py-3 truncate sticky left-0 border-r md:border-r-0 bg-white z-10 " +
            (typeof Object.keys(props.consolidated_holdings[0])[0] === "number"
              ? Object.keys(props.consolidated_holdings[0])[0] < 0
                ? " text-red-500 tabular-nums"
                : " tabular-nums"
              : "")
          }
          title={Object.keys(props.consolidated_holdings[0])[0]}
          /* Adjust for the arrow in accordion */
          style={{ width: "11rem", left: "-1rem", paddingLeft: "2.5rem" }}
        >
          <span
            className="inline-block w-full"
            style={{
              textOverflow: "fade",
              WebkitMaskImage:
                "-webkit-linear-gradient(left, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0) 100%)"
            }}
          >
            {typeof Object.keys(props.consolidated_holdings[0])[0] === "number"
              ? Object.keys(props.consolidated_holdings[0])[0].toFixed(2)
              : Object.keys(props.consolidated_holdings[0])[0]}
          </span>
        </div>
        <div
          className={
            "inline-block w-40 px-6 py-3 truncate md:sticky md:border-r lg:border-r-0 bg-white md:z-10 " +
            (typeof Object.keys(props.consolidated_holdings[0])[1] === "number"
              ? Object.keys(props.consolidated_holdings[0])[1] < 0
                ? " text-red-500 tabular-nums"
                : " tabular-nums"
              : "")
          }
          style={{ left: 160 }}
          title={Object.keys(props.consolidated_holdings[0])[1]}
        >
          <span
            className="inline-block w-full"
            style={{
              textOverflow: "fade",
              WebkitMaskImage:
                "-webkit-linear-gradient(left, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0) 100%)"
            }}
          >
            {typeof Object.keys(props.consolidated_holdings[0])[1] === "number"
              ? Object.keys(props.consolidated_holdings[0])[1].toFixed(2)
              : Object.keys(props.consolidated_holdings[0])[1]}
          </span>
        </div>
        <div
          className={
            "inline-block w-40 px-6 py-3 truncate lg:sticky lg:border-r border-r-0 bg-white lg:z-10 " +
            (typeof Object.keys(props.consolidated_holdings[0])[2] === "number"
              ? Object.keys(props.consolidated_holdings[0])[2] < 0
                ? " text-red-500 tabular-nums"
                : " tabular-nums"
              : "")
          }
          style={{ left: 320 }}
          title={Object.keys(props.consolidated_holdings[0])[2]}
        >
          <span
            className="inline-block w-full"
            style={{
              textOverflow: "fade",
              WebkitMaskImage:
                "-webkit-linear-gradient(left, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0) 100%)"
            }}
          >
            {typeof Object.keys(props.consolidated_holdings[0])[2] === "number"
              ? Object.keys(props.consolidated_holdings[0])[2].toFixed(2)
              : Object.keys(props.consolidated_holdings[0])[2]}
          </span>
        </div>
        {Object.keys(props.consolidated_holdings[0])
          .slice(3)
          .map((value, index) => (
            <div
              key={index}
              className={
                "inline-block w-40 px-6 py-3 truncate " +
                (typeof value === "number"
                  ? value < 0
                    ? " text-red-500 tabular-nums"
                    : " tabular-nums"
                  : "")
              }
              title={value}
            >
              <span
                className="inline-block w-full"
                style={{
                  textOverflow: "fade",
                  WebkitMaskImage:
                    "-webkit-linear-gradient(left, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0) 100%)"
                }}
              >
                {typeof value === "number" ? value.toFixed(2) : value}
              </span>
            </div>
          ))}
      </div>
      {props.consolidated_holdings.map((row, index) => (
        <div
          className={
            "block whitespace-no-wrap text-sm leading-5 font-medium text-gray-900"
          }
          style={{ width: "min-content" }}
        >
          <div
            className={
              "inline-block w-40 px-6 py-3 truncate sticky left-0 border-r md:border-r-0 bg-white z-10 " +
              (typeof Object.values(row)[0] === "number"
                ? Object.values(row)[0] < 0
                  ? " text-red-500 tabular-nums"
                  : " tabular-nums"
                : "")
            }
            /* Adjust for the arrow in accordion */
            style={{ width: "11rem", left: "-1rem", paddingLeft: "2.5rem" }}
            title={Object.values(row)[0]}
          >
            <span
              className="inline-block w-full"
              style={{
                textOverflow: "fade",
                WebkitMaskImage:
                  "-webkit-linear-gradient(left, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0) 100%)"
              }}
            >
              {typeof Object.values(row)[0] === "number"
                ? Object.values(row)[0].toFixed(2)
                : Object.values(row)[0]}
            </span>
          </div>
          <div
            className={
              "inline-block w-40 px-6 py-3 truncate md:sticky md:border-r lg:border-r-0 bg-white md:z-10 " +
              (typeof Object.values(row)[1] === "number"
                ? Object.values(row)[1] < 0
                  ? " text-red-500 tabular-nums"
                  : " tabular-nums"
                : "")
            }
            style={{ left: 160 }}
            title={Object.values(row)[1]}
          >
            <span
              className="inline-block w-full"
              style={{
                textOverflow: "fade",
                WebkitMaskImage:
                  "-webkit-linear-gradient(left, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0) 100%)"
              }}
            >
              {typeof Object.values(row)[1] === "number"
                ? Object.values(row)[1].toFixed(2)
                : Object.values(row)[1]}
            </span>
          </div>
          <div
            className={
              "inline-block w-40 px-6 py-3 truncate lg:sticky lg:border-r border-r-0 bg-white lg:z-10 " +
              (typeof Object.values(row)[2] === "number"
                ? Object.values(row)[2] < 0
                  ? " text-red-500 tabular-nums"
                  : " tabular-nums"
                : "")
            }
            style={{ left: 320 }}
            title={Object.values(row)[2]}
          >
            <span
              className="inline-block w-full"
              style={{
                textOverflow: "fade",
                WebkitMaskImage:
                  "-webkit-linear-gradient(left, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0) 100%)"
              }}
            >
              {typeof Object.values(row)[2] === "number"
                ? Object.values(row)[2].toFixed(2)
                : Object.values(row)[2]}
            </span>
          </div>
          {Object.values(row)
            .slice(3)
            .map((value, index) => (
              <div
                key={index}
                className={
                  "inline-block w-40 px-6 py-3 truncate " +
                  (typeof value === "number"
                    ? value < 0
                      ? " text-red-500 tabular-nums"
                      : " tabular-nums"
                    : "")
                }
                title={value}
              >
                <span
                  className="inline-block w-full"
                  style={{
                    textOverflow: "fade",
                    WebkitMaskImage:
                      "-webkit-linear-gradient(left, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0) 100%)"
                  }}
                >
                  {typeof value === "number" ? value.toFixed(2) : value}
                </span>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}

export default FixedTable;
