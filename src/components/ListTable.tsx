import React from "react";
import TableHead from "./AllFruitsTable/AllFruitsTableHead";
import TableBody from "./AllFruitsTable/AllFruitsTableBody";
import TableWrap from "./AllFruitsTable/AllFruitsTableWrap";
import { FruitProps } from "@/types";

const ListTable = ({ data }: FruitProps) => {
  return (
    <TableWrap>
      <TableHead />
      <TableBody data={data} />
    </TableWrap>
  );
};

export default ListTable;
