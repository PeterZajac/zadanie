"use client";
import { TFruit } from "@/types/fruitsType";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaRegHeart, FaHeart, FaArrowRight } from "react-icons/fa";

const Table = () => {
  const [favorites, setFavorites] = useState<TFruit[]>([]);

  useEffect(() => {
    const storedFavoritesString = localStorage.getItem("favorites");
    if (storedFavoritesString) {
      const storedFavorites: TFruit[] = JSON.parse(storedFavoritesString);
      setFavorites(storedFavorites);
    }
  }, []);

  const removeFromFavorites = (id: number) => {
    const newFavorites = favorites.filter((favorite) => favorite.id !== id);
    setFavorites(newFavorites);
    localStorage.setItem("favorites", JSON.stringify(newFavorites)); // Asynchronous
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
          {favorites.map((fruit, index) => (
            <tr
              key={fruit.id}
              className={index % 2 === 0 ? "bg-transparent" : "bg-[#1c1529]"}
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap text-white text-center"
              >
                {fruit.id}
              </th>
              <td className="px-6 py-4">{fruit.name}</td>
              <td className="px-6 py-4">{fruit.genus}</td>
              <td className="px-6 py-4">{fruit.order}</td>
              <td className="px-6 py-4 flex items-center gap-3">
                <FaHeart
                  className={`text-violet-600 hover:stroke-[40px] hover:text-transparent hover:stroke-white	text-base  hover:cursor-pointer`}
                  onClick={() => removeFromFavorites(fruit.id)}
                />
                <Link
                  href={`/detail/${fruit.id}`}
                  className="font-medium  hover:underline "
                >
                  <FaArrowRight />
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
