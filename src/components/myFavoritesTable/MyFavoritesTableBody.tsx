"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaArrowRight, FaHeart } from "react-icons/fa";
import { TFruit } from "@/types";
import PaginationButtons from "../PaginationButtons";
import { PAGE_SIZE } from "@/constants";

const MyFavoritesBody = () => {
  const [favorites, setFavorites] = useState<TFruit[]>([]);
  const [page, setPage] = useState(1);

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

  const totalPages = Math.ceil(favorites.length / PAGE_SIZE);
  const displayedFavorites = favorites.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE
  );

  const handleNextPage = () => {
    setPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    setPage((prev) => prev - 1);
  };

  return (
    <>
      <tbody>
        {displayedFavorites.map((fruit, index) => (
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
      {favorites.length > PAGE_SIZE && (
        <PaginationButtons
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
          page={page}
          totalPages={totalPages}
        />
      )}
    </>
  );
};

export default MyFavoritesBody;
