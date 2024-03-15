"use client";
import React, { FC, useState } from "react";
import { FruitProps } from "@/types/fruitsType";

const SearchBar: FC<FruitProps> = ({ data }) => {
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
      setSearchResult("Success: Fruit found.");
    } else {
      setSearchResult("Error: Fruit not found.");
    }

    if (searchTerm.length === 0) {
      setSearchResult(null);
    }
  };
  const inputBaseClasses =
    "flex-auto rounded border border-solid border-neutral-700 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal outline-none  placeholder:text-neutral-500";

  let borderClass;
  if (searchResult === "Error: Fruit not found.") {
    borderClass = "border-red-500 text-red-300";
  } else if (searchResult === "Success: Fruit found.") {
    borderClass = "border-green-500 text-green-300";
  } else {
    borderClass = "border-neutral-700";
  }
  const finalClassName = `${inputBaseClasses} ${borderClass}`;

  return (
    <div className="flex">
      <input
        type="search"
        className={finalClassName}
        placeholder="Search"
        aria-label="Search"
        id="exampleFormControlInput2"
        aria-describedby="button-addon2"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button onClick={handleButtonClick}>
        <span
          className="flex items-center whitespace-nowrap px-3 py-[0.25rem] text-surface dark:border-neutral-400 dark:text-white [&>svg]:h-5 [&>svg]:w-5"
          id="button-addon2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </span>
      </button>
      {searchResult && (
        <div>
          {searchResult === "Error: Fruit not found." && (
            <span className="text-red-500 text-sm mt-1">{searchResult}</span>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
