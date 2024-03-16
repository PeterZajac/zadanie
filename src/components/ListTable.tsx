import React from "react";
import TableHead from "./allFruitsTable/TableHead";
import TableBody from "./allFruitsTable/TableBody";
import TableWrap from "./allFruitsTable/TableWrap";
import { FruitProps } from "@/types/fruitsType";

const ListTable = ({ data }: FruitProps) => {
  return (
    <TableWrap>
      <TableHead />
      <TableBody data={data} />
    </TableWrap>
  );
};

export default ListTable;
