import { AddToFavorite } from "@/components/AddToFavorite";
import { TFruit } from "@/types/index";
import Image from "next/image";
import React, { FC } from "react";

type DetailPageProps = {
  params: {
    id: string;
  };
};

const fetchFruit: (id: string) => Promise<TFruit | null> = async (id) => {
  const res = await fetch(`https://www.fruityvice.com/api/fruit/${id}`);
  const data: TFruit = await res.json();
  if (data.error) {
    return null;
  }
  const image = await fetch(
    `https://api.pexels.com/v1/search?query=${data.name}`,
    {
      headers: {
        Authorization: process.env.IMAGE_API_TOKEN as string,
      },
    }
  );
  const imageData = await image.json();

  const imageUrl = imageData.photos?.[0].src.original;
  return { ...data, image: imageUrl };
};

const DetailPage: FC<DetailPageProps> = async ({ params: { id } }) => {
  const fruit = await fetchFruit(id);

  if (!fruit) {
    return <h1>404: Not found</h1>;
  }

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <h4>{fruit.name}</h4>
      <h1 className="text-[40px] mb-5">DETAIL </h1>
      {fruit.image && (
        <Image
          src={fruit.image}
          className="h-52 w-52 object-cover rounded-full shadow-lg mb-5"
          height={200}
          width={200}
          alt="Tomato image"
        />
      )}

      <div className="flex flex-col rounded-lg p-4  mt-7 w-[350px] items-center bg-[#0f0b17]">
        <h3 className="pb-5">NUTRITIONS</h3>
        <span className="text-sm">
          Sacharidy: {fruit.nutritions.carbohydrates} g
        </span>
        <hr className="my-2 " />
        <span className="text-sm">
          Kalórie: {fruit.nutritions.calories} kcal
        </span>
        <hr className="my-2 " />
        <span className="text-sm">Tuky: {fruit.nutritions.fat} g</span>
        <hr className="my-2 " />
        <span className="text-sm">Cukor: {fruit.nutritions.sugar} g</span>
        <hr className="my-2 " />
        <span className="text-sm">
          Bielkoviny: {fruit.nutritions.protein} g
        </span>
      </div>
      <AddToFavorite fruit={fruit} />
    </div>
  );
};

export default DetailPage;
