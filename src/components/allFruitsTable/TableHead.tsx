import React from "react";

const TableHead = () => {
  return (
    <thead className="text-xs uppercase bg-transparent text-gray-400">
      <tr>
        <th scope="col" className="px-6 pb-8 text-center">
          ID
        </th>
        <th scope="col" className="px-6 pb-8">
          NAME
        </th>
        <th scope="col" className="px-6 pb-8">
          GENUS
        </th>
        <th scope="col" className="px-6 pb-8">
          ORDER
        </th>
        <th scope="col" className="px-6 pb-8">
          ACTION
        </th>
      </tr>
    </thead>
  );
};

export default TableHead;
