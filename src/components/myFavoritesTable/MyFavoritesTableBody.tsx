"use client";
import { TFruit } from "@/types";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaArrowRight, FaHeart } from "react-icons/fa";

const MyFavoritesBody = () => {
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
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };
  return (
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
  );
};

export default MyFavoritesBody;
