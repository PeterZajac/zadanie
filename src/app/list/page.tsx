import Heading from "@/components/PageHeading";
import PageWrapper from "@/components/Global/PageWrapper";
import ListTable from "@/components/ListTable";
import React from "react";

const fetchFruits = async () => {
  const res = await fetch("https://www.fruityvice.com/api/fruit/all");
  return res.json();
};

const ListPage = async () => {
  const fruits = await fetchFruits();

  return (
    <PageWrapper>
      <Heading firstText="ALL" secondText="FRUIT LIST" />
      <ListTable data={fruits} />
    </PageWrapper>
  );
};

export default ListPage;
