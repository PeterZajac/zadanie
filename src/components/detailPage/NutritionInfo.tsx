import { NutritionInfoProps } from "@/types";
import React from "react";

const NutritionInfo: React.FC<NutritionInfoProps> = ({ nutritions }) => {
  return (
    <div className="flex flex-col rounded-lg p-4 mt-7 w-[350px] items-center bg-[#0f0b17]">
      <h3 className="pb-5">NUTRITIONS</h3>
      {Object.entries(nutritions).map(([key, value]) => (
        <div key={key} className="flex justify-between items-center py-2">
          <span className="text-sm">
            {key.charAt(0).toUpperCase() + key.slice(1)}:
          </span>
          <span className="text-sm pl-2">
            {value} {key === "calories" ? "kcal" : "g"}
          </span>
        </div>
      ))}
    </div>
  );
};

export default NutritionInfo;
