import React from "react";
import TableHead from "./allFruitsTable/TableHead";
import TableBody from "./allFruitsTable/TableBody";
import TableWrap from "./allFruitsTable/TableWrap";

const ListTable = () => {
  return (
    <TableWrap>
      <TableHead />
      <TableBody />
    </TableWrap>
  );
};

export default ListTable;
