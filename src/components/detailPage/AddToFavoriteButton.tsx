"use client";
import { TFruit } from "@/types";
import React, { useState, useEffect } from "react";
import { FaRegHeart } from "react-icons/fa";
import { useMemo } from "react";

const AddToFavoriteButon = ({ fruit }: { fruit: TFruit }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    const isInLocalStorage = favorites.some(
      (favorite: TFruit) => favorite.id === fruit.id
    );
    setIsFavorite(isInLocalStorage);
  }, [fruit.id]);

  const buttonClass = useMemo(() => {
    return `py-2 px-4 rounded-md flex items-center gap-2 text-transparent stroke-current ${
      isFavorite
        ? "hover:text-[grey] text-violet-600"
        : "hover:text-violet-600 text-white"
    }`;
  }, [isFavorite]);

  const handleToggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    const isInLocalStorage = favorites.some(
      (favorite: TFruit) => favorite.id === fruit.id
    );
    const dataToSave = isInLocalStorage
      ? favorites.filter((favorite: TFruit) => favorite.id !== fruit.id)
      : [...favorites, fruit];
    localStorage.setItem("favorites", JSON.stringify(dataToSave));
    setIsFavorite(!isInLocalStorage);
  };

  return (
    <button onClick={handleToggleFavorite} className={buttonClass}>
      <FaRegHeart />
      <span>{isFavorite ? "Remove from favorites" : "Add to favorites"}</span>
    </button>
  );
};

export default AddToFavoriteButon;
