import React from "react";

const DetailHeader = ({ fruitName }: { fruitName: string }) => {
  return (
    <>
      <h4>{fruitName}</h4>
      <h1 className="text-[40px] mb-5">DETAIL</h1>
    </>
  );
};

export default DetailHeader;
