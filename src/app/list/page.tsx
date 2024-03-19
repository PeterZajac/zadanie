import Heading from "@/components/PageHeading";
import ListTable from "@/components/ListTable";
import React from "react";

const fetchFruits = async () => {
  const res = await fetch("https://www.fruityvice.com/api/fruit/all");
  return res.json();
};

const ListPage = async () => {
  const fruits = await fetchFruits();

  return (
    <>
      <Heading firstText="ALL" secondText="FRUIT LIST" />
      <ListTable data={fruits} />
    </>
  );
};

export default ListPage;
