"use client";
import { TFruit } from "@/types/fruitsType";
import Link from "next/link";
import React from "react";
import { FaHeart } from "react-icons/fa";

const Table = () => {
  const data: TFruit[] =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("favorites") || "[]")
      : [];

  const removeFromFavorites = (id: number) => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    const newFavorites = favorites.filter(
      (favorite: TFruit) => favorite.id !== id
    );
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
    if (typeof window !== "undefined") {
    } else {
      console.log("localStorage nieje k dispozicii");
    }
  };

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
          {data.map((fruit) => (
            <tr key={fruit.id} className="bg-transparent">
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap text-white text-center"
              >
                {fruit.id}
              </th>
              <td className="px-6 py-4">{fruit.name}</td>
              <td className="px-6 py-4">{fruit.genus}</td>
              <td className="px-6 py-4">{fruit.order}</td>
              <td className="px-6 py-4 flex items-center gap-2">
                <FaHeart onClick={() => removeFromFavorites(fruit.id)} />
                <Link
                  href={`/detail/${fruit.id}`}
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
