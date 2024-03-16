import React from "react";

const Table = () => {
  return (
    <div className="overflow-x-auto shadow-md sm:rounded-lg w-[800px] mt-10">
      <table className="w-full text-sm text-left text-gray-400">
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
        <tbody>
          <tr className="bg-transparent">
            <th
              scope="row"
              className="px-6 py-4 font-medium whitespace-nowrap text-white text-center"
            >
              Niečo iné
            </th>
            <td className="px-6 py-4">TOMATO</td>
            <td className="px-6 py-4">SOLANUM</td>
            <td className="px-6 py-4">SOLANALES</td>
            <td className="px-6 py-4">
              <a
                href="#"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit
              </a>
            </td>
          </tr>
          <tr className="bg-[#1c1529]">
            <th
              scope="row"
              className="px-6 py-4 font-medium whitespace-nowrap text-white text-center"
            >
              ---
            </th>
            <td className="px-6 py-4">---</td>
            <td className="px-6 py-4">---</td>
            <td className="px-6 py-4">---</td>
            <td className="px-6 py-4">
              <a
                href="#"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
