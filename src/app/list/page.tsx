import ListTable from "@/components/ListTable";
import React from "react";

const ListPage = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-40 ">
      <h1>ALL</h1>
      <h1 className="text-4xl font-bold ">FRUIT LIST</h1>
      <ListTable />
    </div>
  );
};

export default ListPage;
