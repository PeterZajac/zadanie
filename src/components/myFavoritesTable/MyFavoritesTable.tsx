import React from "react";
import MyFavoritesHead from "./MyFavoritesHead";
import MyFavoritesBody from "./MyFavoritesBody";
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
