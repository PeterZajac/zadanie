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
      setSearchResult("Success");
    } else {
      setSearchResult("Error: Fruit not found.");
    }

    if (searchTerm.length === 0) {
      setSearchResult(null);
    }
  };

  return (
    <div className="relative flex">
      <input
        type="search"
        className="relative m-0 block flex-auto rounded border border-solid border-neutral-700 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:text-white dark:placeholder:text-neutral-200 dark:autofill:shadow-autofill dark:focus:border-primary"
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

      {searchResult && <div className="search-result">{searchResult}</div>}
    </div>
  );
};

export default SearchBar;

// <div className="flex flex-row justify-center items-center ">
//   <div className="pt-2 text-gray-600">
//     <input
//       className="bg-[#0f0b17] h-10 px-1 rounded-lg text-sm focus:outline-none relative"
//       type="search"
//       name="search"
//       placeholder="Search"
//     />
//     <button type="submit">
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//         className="h-5 w-5 text-white"
//       >
//         <path d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
//       </svg>
//     </button>
//   </div>
// </div>
