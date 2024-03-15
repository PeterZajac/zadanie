"use client";
import React from "react";

const SearchBar = ({ fruits }: any) => {
  console.log(fruits);
  return (
    <div className="flex flex-row justify-center items-center ">
      <div className="pt-2 text-gray-600">
        <input
          className="bg-[#0f0b17] h-10 px-1 rounded-lg text-sm focus:outline-none relative"
          type="search"
          name="search"
          placeholder="Search"
        />
        <button type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            className="h-5 w-5 text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
