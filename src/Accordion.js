import React from "react";

function Accordion(props) {
  return (
    <details className="w-full shadow divide-y divide-gray-200">
      <summary className="sticky top-0 z-20 bg-white px-6 py-3 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider outline-none cursor-pointer">
        {props.summary}
      </summary>
      {props.children}
    </details>
  );
}

export default Accordion;
