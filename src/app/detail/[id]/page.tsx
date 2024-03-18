import AddToFavoriteButon from "@/components/detailPage/AddToFavoriteButton";
import PageWrapper from "@/components/Global/PageWrapper";
import DetailHeader from "@/components/detailPage/DetailHeader";
import FruitImage from "@/components/detailPage/FruitImage";
import NutritionInfo from "@/components/detailPage/NutritionInfo";
import { DetailPageProps, TFruit } from "@/types";
import Image from "next/image";
import React, { FC } from "react";

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
    <PageWrapper>
      <DetailHeader fruitName={fruit.name} />
      <FruitImage imageUrl={fruit.image || ""} />
      <NutritionInfo nutritions={fruit.nutritions} />
      <AddToFavoriteButon fruit={fruit} />
    </PageWrapper>
  );
};

export default DetailPage;
