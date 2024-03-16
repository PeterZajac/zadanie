import React from "react";
import SearchBar from "./SearchBar";
import { FruitProps } from "@/types/fruitsType";
import LemonPicture from "./LemonPicture";

const MainScreen = ({ data }: FruitProps) => {
  return (
    <>
      <LemonPicture />
      <h1 className="text-4xl font-bold ">SEARCH</h1>
      <p className="mb-6">FRUIT DATABSE</p>
      <SearchBar data={data} />
    </>
  );
};

export default MainScreen;
