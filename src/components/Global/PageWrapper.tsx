import { PageWrapperProps } from "@/types";
import React from "react";

const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <div className="flex flex-col justify-center items-center mt-20 ">
      {children}
    </div>
  );
};

export default PageWrapper;
