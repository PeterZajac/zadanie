"use client";
import { TFruit } from "@/types/fruitsType";
import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";

export const AddToFavorite = ({ fruit }: { fruit: TFruit }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  //TODO like button have to change color when is in favorites
  const handleAddToFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    const isInLocalStorage = favorites.find(
      (favorite: TFruit) => favorite.id === fruit.id
    );
    if (isInLocalStorage) return;
    const newFavorites = [...favorites, fruit];
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  return (
    <button
      onClick={handleAddToFavorite}
      className=" text-white py-2 px-4 rounded-md flex items-center gap-2 pt-5"
    >
      <FaRegHeart /> <span>Add to favorites</span>
    </button>
  );
};
