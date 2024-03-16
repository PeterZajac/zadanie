import ListTable from "@/components/ListTable";
import Table from "@/components/myFavoritesTable/Table";
import React from "react";

const Favorites = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-40 ">
      <h1>MY</h1>
      <h1 className="text-4xl font-bold ">FAVORITES</h1>
      <Table />
    </div>
  );
};

export default Favorites;
