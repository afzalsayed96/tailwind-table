import React from "react";
import Accordion from "./Accordion";
import Table from "./Table";

function App() {
  return (
    <div
      className="shadow rounded-lg border-gray-200 overflow-auto divide-y divide-gray-200 w-full"
      style={{ maxHeight: 600 }}
    >
      <div className="flex w-full divide-x divide-gray-200">
        <Accordion summary="Account Information">
          <p className="px-6 py-3 text-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            id hendrerit massa, sit amet tempus lectus. Nulla consectetur lacus
            quis risus vulputate sagittis quis et ligula. Phasellus pretium ex
            ac lorem rutrum mattis. Quisque finibus lorem non iaculis malesuada.
            Pellentesque congue ligula at justo ullamcorper, sollicitudin
            volutpat lorem auctor. Integer id pellentesque turpis, at bibendum
            enim. Vestibulum rhoncus purus at sodales venenatis. Cras nec risus
            dolor. Sed ex eros, semper vitae dictum quis, auctor quis dolor.
            Morbi varius at orci vitae gravida. Vivamus velit purus, accumsan a
            erat ac, auctor faucibus eros.
          </p>
        </Accordion>
        <Accordion summary="Fees">
          <p className="px-6 py-3 text-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            id hendrerit massa, sit amet tempus lectus. Nulla consectetur lacus
            quis risus vulputate sagittis quis et ligula. Phasellus pretium ex
            ac lorem rutrum mattis. Quisque finibus lorem non iaculis malesuada.
            Pellentesque congue ligula at justo ullamcorper, sollicitudin
            volutpat lorem auctor. Integer id pellentesque turpis, at bibendum
            enim. Vestibulum rhoncus purus at sodales venenatis. Cras nec risus
            dolor. Sed ex eros, semper vitae dictum quis, auctor quis dolor.
            Morbi varius at orci vitae gravida. Vivamus velit purus, accumsan a
            erat ac, auctor faucibus eros.
          </p>
        </Accordion>
      </div>
      <Accordion summary="Consolidated Holdings">
        <div className="px-6 py-3">
          <p className="text-sm pb-4">Summary of Consolidated Holdings below</p>
          <Table />
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
  );
}

export default App;
