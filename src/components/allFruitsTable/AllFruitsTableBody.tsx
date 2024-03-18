"use client";
import { FruitProps, TFruit } from "@/types/index";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaArrowRight, FaHeart } from "react-icons/fa";
import PaginationButtons from "../PaginationButtons";

const TableBody = ({ data }: FruitProps) => {
  const PAGE_SIZE = 8;
  const [favorites, setFavorites] = useState<TFruit[]>([]);
  const [page, setPage] = useState(1);
  const [displayedData, setDisplayedData] = useState(data.slice(0, PAGE_SIZE));
  const totalPages = Math.floor(data.length / PAGE_SIZE);

  useEffect(() => {
    const storedFavoritesString = localStorage.getItem("favorites");
    if (storedFavoritesString) {
      const storedFavorites: TFruit[] = JSON.parse(storedFavoritesString);
      setFavorites(storedFavorites);
    }
  }, []);

  const addToFavorites = (id: number) => {
    const fruitToAdd = data.find((fruit) => fruit.id === id);
    if (fruitToAdd) {
      const newFavorites = [...favorites, fruitToAdd];
      setFavorites(newFavorites);
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
    }
  };

  const removeFromFavorites = (id: number) => {
    const newFavorites = favorites.filter((favorite) => favorite.id !== id);
    setFavorites(newFavorites);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  const isFavorite = (id: number) => {
    return favorites.some((fruit) => fruit.id === id);
  };

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
    <>
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
            <td className="px-6 py-4 flex items-center gap-3">
              <button>
                <FaHeart
                  className={`text-transparent stroke-[40px] hover:text-violet-600 hover:stroke-none stroke-white	text-base  hover:cursor-pointer ${
                    isFavorite(fruit.id) ? "text-violet-600 stroke-inherit" : ""
                  }`}
                  onClick={() =>
                    isFavorite(fruit.id)
                      ? removeFromFavorites(fruit.id)
                      : addToFavorites(fruit.id)
                  }
                />
              </button>
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
      <PaginationButtons
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
        page={page}
        totalPages={totalPages}
      />
    </>
  );
};

export default TableBody;
