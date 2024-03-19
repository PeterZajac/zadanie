import React from "react";
import { TableWrapProps } from "@/types";

const TableWrap: React.FC<TableWrapProps> = ({ children }) => {
  return (
    <div className="overflow-x-auto shadow-md sm:rounded-lg w-[800px] mt-10">
      <table className="w-full text-sm text-left text-gray-400">
        {children}
      </table>
    </div>
  );
};

export default TableWrap;
