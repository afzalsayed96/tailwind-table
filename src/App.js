import React from "react";
import Accordion from "./Accordion";
import FixedTable, { TableRow, TableAccordionRow } from "./FixedTable";
import props from "./data";

function App() {
  return (
    <>
      <div
        className="w-full divide-y divide-gray-200 overflow-auto shadow rounded-lg"
        style={{ maxHeight: 480 }}
      >
        <TableRow
          className="sticky top-0 bg-white z-20 text-gray-500 uppercase tracking-wider text-xs leading-4 font-medium text-center"
          values={Object.keys(props.consolidated_holdings[0])}
        />
        {props.consolidated_holdings.map((row, index) => (
          <TableAccordionRow
            className="text-sm leading-5 font-medium text-gray-900"
            values={Object.values(row)}
            key={index}
          >
            <div
              className="shadow rounded-lg border-gray-200 divide-y divide-gray-200 w-full"
              // style={{ maxHeight: 600, overflow: auto }} // optional
            >
              <div className="flex w-full divide-x divide-gray-200">
                <Accordion summary="Account Information">
                  <p className="px-6 py-3 text-xs">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum id hendrerit massa, sit amet tempus lectus. Nulla
                    consectetur lacus quis risus vulputate sagittis quis et
                    ligula. Phasellus pretium ex ac lorem rutrum mattis. Quisque
                    finibus lorem non iaculis malesuada. Pellentesque congue
                    ligula at justo ullamcorper, sollicitudin volutpat lorem
                    auctor. Integer id pellentesque turpis, at bibendum enim.
                    Vestibulum rhoncus purus at sodales venenatis. Cras nec
                    risus dolor. Sed ex eros, semper vitae dictum quis, auctor
                    quis dolor. Morbi varius at orci vitae gravida. Vivamus
                    velit purus, accumsan a erat ac, auctor faucibus eros.
                  </p>
                </Accordion>
                <Accordion summary="Fees">
                  <p className="px-6 py-3 text-xs">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum id hendrerit massa, sit amet tempus lectus. Nulla
                    consectetur lacus quis risus vulputate sagittis quis et
                    ligula. Phasellus pretium ex ac lorem rutrum mattis. Quisque
                    finibus lorem non iaculis malesuada. Pellentesque congue
                    ligula at justo ullamcorper, sollicitudin volutpat lorem
                    auctor. Integer id pellentesque turpis, at bibendum enim.
                    Vestibulum rhoncus purus at sodales venenatis. Cras nec
                    risus dolor. Sed ex eros, semper vitae dictum quis, auctor
                    quis dolor. Morbi varius at orci vitae gravida. Vivamus
                    velit purus, accumsan a erat ac, auctor faucibus eros.
                  </p>
                </Accordion>
              </div>
              <Accordion summary="Consolidated Holdings">
                <div className="px-6 py-3">
                  <FixedTable />
                </div>
              </Accordion>
              <Accordion summary="Net Asset Value">
                <div className="px-6 py-6 flex">
                  <div className="w-8/12 pr-6">
                    <div className="w-full h-32 border-gray-400 border-2" />
                  </div>
                  <div className="w-4/12">
                    <div className="w-full h-64 border-gray-400 border-2" />
                  </div>
                </div>
              </Accordion>
            </div>
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
    </>
  );
}

export default App;
