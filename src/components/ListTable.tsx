import React from "react";
import TableHead from "./allFruitsTable/AllFruitsTableHead";
import TableBody from "./allFruitsTable/AllFruitsTableBody";
import TableWrap from "./allFruitsTable/AllFruitsTableWrap";
import { FruitProps } from "@/types/index";

const ListTable = ({ data }: FruitProps) => {
  return (
    <TableWrap>
      <TableHead />
      <TableBody data={data} />
    </TableWrap>
  );
};

export default ListTable;
