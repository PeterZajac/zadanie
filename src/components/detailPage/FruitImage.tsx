import React from "react";
import Image from "next/image";

const FruitImage = ({ imageUrl }: { imageUrl: string }) => {
  return (
    imageUrl && (
      <Image
        src={imageUrl}
        className="h-52 w-52 object-cover rounded-full shadow-lg mb-5"
        height={200}
        width={200}
        priority={true}
        alt="Fruit image"
      />
    )
  );
};

export default FruitImage;
