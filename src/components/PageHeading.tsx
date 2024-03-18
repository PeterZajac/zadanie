import { HeadingProps } from "@/types";
import React from "react";

const Heading: React.FC<HeadingProps> = ({ firstText, secondText }) => {
  return (
    <>
      <h1>{firstText}</h1>
      <h1 className="text-4xl font-bold">{secondText}</h1>
    </>
  );
};

export default Heading;
