import Image from "next/image";
import React from "react";

const DetailPage = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <h4>TOMATO</h4>
      <h1 className="text-[40px] mb-10">DETAIL </h1>
      <Image
        src="https://picsum.photos/400"
        className="w-50 h-50 object-cover rounded-full shadow-lg mb-5"
        height={200}
        width={200}
        alt="Tomato image"
      />

      <div className="flex flex-col rounded-lg p-4  mt-7 w-[350px] items-center bg-[#0f0b17]">
        <h3 className="pb-5">NUTRITIONS</h3>
        <span className="text-sm">Sacharidy: 3,9 g</span>
        <hr className="my-2 " />
        <span className="text-sm">Kalórie: 74 kcal</span>
        <hr className="my-2 " />
        <span className="text-sm">Tuky: 0,2 g</span>
        <hr className="my-2 " />
        <span className="text-sm">Cukor: 2,6 g</span>
        <hr className="my-2 " />
        <span className="text-sm">Bielkoviny: 0,9 g</span>
      </div>
      <button className=" text-white py-2 px-4 rounded-md">
        Add to favorites
      </button>
    </div>
  );
};

export default DetailPage;
