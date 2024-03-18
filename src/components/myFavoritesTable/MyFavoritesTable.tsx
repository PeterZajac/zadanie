import React from "react";
import MyFavoritesHead from "./MyFavoritesHead";
import MyFavoritesBody from "./MyFavoritesBody";

const Table = () => {
  return (
    <div className="overflow-x-auto shadow-md sm:rounded-lg w-[800px] mt-10">
      <table className="w-full text-sm text-left text-gray-400">
        <MyFavoritesHead />
        <MyFavoritesBody />
      </table>
    </div>
  );
};

export default Table;
