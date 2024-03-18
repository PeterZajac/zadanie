import Image from "next/image";
import React from "react";

const LemonPicture = () => {
  return (
    <Image
      className="custom-margin"
      src={"/images/lemon.png"}
      alt="lemon"
      width={200}
      height={200}
    />
  );
};

export default LemonPicture;
