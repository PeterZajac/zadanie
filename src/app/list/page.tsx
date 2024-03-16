import ListTable from "@/components/ListTable";
import React from "react";

const fetchFruits = async () => {
  const res = await fetch("https://www.fruityvice.com/api/fruit/all");
  return res.json();
};

const ListPage = async () => {
  const fruits = await fetchFruits();

  return (
    <div className="flex flex-col justify-center items-center mt-20 ">
      <h1>ALL</h1>
      <h1 className="text-4xl font-bold ">FRUIT LIST</h1>
      <ListTable data={fruits} />
    </div>
  );
};

export default ListPage;
