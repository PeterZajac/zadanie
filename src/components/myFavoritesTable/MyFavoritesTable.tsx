import React from "react";
import MyFavoritesHead from "./MyFavoritesTableHead";
import MyFavoritesBody from "./MyFavoritesTableBody";
import MyFavoritesTableWrap from "./MyFavoritesTableWrap";

const Table = () => {
  return (
    <MyFavoritesTableWrap>
      <MyFavoritesHead />
      <MyFavoritesBody />
    </MyFavoritesTableWrap>
  );
};

export default Table;
