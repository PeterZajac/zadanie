import React from "react";
import SearchBar from "./SearchBar";
import { FruitProps } from "@/types/fruitsType";

const MainScreen = ({ data }: FruitProps) => {
  return (
    <>
      {/* sem pojde obrázok citrónu */}
      <SearchBar data={data} />
    </>
  );
};

export default MainScreen;
