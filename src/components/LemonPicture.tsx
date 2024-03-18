import Image from "next/image";
import React from "react";

const LemonPicture = () => {
  return (
    <Image
      className="custom-margin mb-10 mt-10"
      src={"/images/lemon.png"}
      alt="lemon"
      width={240}
      height={240}
    />
  );
};

export default LemonPicture;
