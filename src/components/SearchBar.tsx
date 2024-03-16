"use client";
import React, { FC, useState } from "react";
import { FruitProps } from "@/types/fruitsType";

const SearchBar: FC<FruitProps> = ({ data }) => {
  console.log(data);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState<string | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleButtonClick = () => {
    const searchFruit = data?.find(
      (fruit) => fruit.name.toLowerCase() === searchTerm.toLowerCase()
    );

    if (searchFruit) {
      setSearchResult("Success");
    } else {
      setSearchResult("Error: Fruit not found.");
    }

    if (searchTerm.length === 0) {
      setSearchResult(null);
    }
  };
  const inputBaseClasses =
    "flex-auto rounded border border-solid border-neutral-700 bg-transparent pl-3 outline-none  placeholder:text-neutral-500";

  let borderClass;
  if (searchResult === "Error: Fruit not found.") {
    borderClass = "border-red-400 text-red-300";
  } else if (searchResult === "Success") {
    borderClass = "border-green-400 text-green-300";
  } else {
    borderClass = "border-neutral-700";
  }
  const finalClassName = `${inputBaseClasses} ${borderClass}`;

  return (
    <div className="flex flex-col">
      <div className="flex">
        <input
          type="text"
          className={finalClassName}
          placeholder="Search"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button onClick={handleButtonClick}>
          <span
            className="flex items-center pl-3 text-surface [&>svg]:h-5 [&>svg]:w-5"
            id="button-addon2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </span>
        </button>
      </div>
      {searchResult && (
        <div className="mt-1">
          {searchResult === "Error: Fruit not found." && (
            <span className="text-red-500 text-sm">{searchResult}</span>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
