import { FruitProps } from "@/types/fruitsType";
import React from "react";

const TableBody = async ({ data }: FruitProps) => {
  return (
    <tbody>
      {data?.map((fruit, index) => (
        <tr
          key={fruit.id}
          className={index % 2 === 0 ? "bg-transparent" : "bg-[#1c1529]"}
        >
          <th
            scope="row"
            className="px-6 py-4 font-medium whitespace-nowrap text-white text-center"
          >
            {fruit.name}
          </th>
          <td className="px-6 py-4">{fruit.family}</td>
          <td className="px-6 py-4">{fruit.order}</td>
          <td className="px-6 py-4">{fruit.genus}</td>
          <td className="px-6 py-4">
            <a href="#" className="font-medium text-blue-600 hover:underline">
              Edit
            </a>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
