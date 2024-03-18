"use client";
import { FruitProps } from "@/types/fruitsType";
import React, { useEffect, useState } from "react";

const TableBody = ({ data }: FruitProps) => {
  const PAGE_SIZE = 8;

  const [page, setPage] = useState(1);
  const [displayedData, setDisplayedData] = useState(data.slice(0, PAGE_SIZE));
  const [totalPages, setTotalPages] = useState(
    Math.floor(data.length / PAGE_SIZE)
  );

  const handleNextPage = () => {
    setPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    setPage((prev) => prev - 1);
  };

  useEffect(() => {
    const start = (page - 1) * PAGE_SIZE;
    const end = start + PAGE_SIZE;
    setDisplayedData(data.slice(start, end));
  }, [page, data]);

  return (
    <tbody>
      {displayedData?.map((fruit, index) => (
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
            <a
              href={`/detail/${fruit.id}`}
              className="font-medium text-blue-600 hover:underline"
            >
              Edit
            </a>
          </td>
        </tr>
      ))}
      <button
        onClick={handlePrevPage}
        disabled={page === 1}
        className="bg-transparent text-white px-4 py-2"
      >
        Prev
      </button>
      <button
        onClick={handleNextPage}
        disabled={page === totalPages}
        className="bg-transparent text-white px-4 py-2"
      >
        Next
      </button>
      {page} of {totalPages}
    </tbody>
  );
};

export default TableBody;
