import React from "react";
import TableHead from "./table/TableHead";
import TableBody from "./table/TableBody";
import TableWrap from "./table/TableWrap";

const ListTable = () => {
  return (
    <TableWrap>
      <TableHead />
      <TableBody />
    </TableWrap>
  );
};

export default ListTable;
