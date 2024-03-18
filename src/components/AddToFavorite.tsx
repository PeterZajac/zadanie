"use client";
import { TFruit } from "@/types/fruitsType";
import React, { useEffect, useMemo, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export const AddToFavorite = ({ fruit }: { fruit: TFruit }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
  //TODO odstranovanie z favorite

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    const isInLocalStorage = favorites.find(
      (favorite: TFruit) => favorite.id === fruit.id
    );
    setIsFavorite(!!isInLocalStorage);
  }, [fruit.id]);

  const handleAddToFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    const isInLocalStorage = favorites.find(
      (favorite: TFruit) => favorite.id === fruit.id
    );
    if (isInLocalStorage) return;
    const newFavorites = [...favorites, fruit];
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
    setIsFavorite(true);
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
