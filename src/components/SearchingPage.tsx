"use client";
import { TFruit } from "@/types";
import Link from "next/link";
import React, { FC, useMemo, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const SearchingPage: FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState<string | null>(null);
  const [currentFruit, setCurrentFruit] = useState<TFruit | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchResult(null);
    setSearchTerm(event.target.value);
  };

  const handleSearchFruit = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(`/api/get-fruit?fruit=${searchTerm}`);

      const searchFruit: TFruit = await response.json();
      if (searchFruit.error) {
        setSearchResult("Error: Fruit not found.");
        setCurrentFruit(null);
        return;
      }
      setSearchResult("Success");
      setCurrentFruit(searchFruit);
    } catch (error) {
      alert("Error: " + error);
    } finally {
      setIsLoading(false);
    }

    if (searchTerm.length === 0) {
      setSearchResult(null);
    }
  };
  const inputBaseClasses =
    "flex-auto rounded border border-solid border-neutral-700 bg-transparent pl-3 outline-none  placeholder:text-neutral-500";

  const borderClass = useMemo(() => {
    if (searchResult === "Error: Fruit not found.") {
      return "border-red-500 text-red-200";
    }
    if (!!searchResult) {
      return "custom-border text-green-300";
    }
    return "border-neutral-700";
  }, [searchResult]);

  const finalClassName = `${inputBaseClasses} ${borderClass}`;

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearchFruit();
    }
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="flex">
          {!isLoading ? (
            <>
              <input
                type="text"
                className={finalClassName}
                placeholder="Search"
                value={searchTerm}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
              />
              <button onClick={handleSearchFruit}>
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
            </>
          ) : (
            <div>Loading...</div>
          )}
        </div>
        {searchResult === "Error: Fruit not found." && (
          <div className="mt-1">
            <span className="text-red-500 text-sm">{searchResult}</span>
          </div>
        )}
      </div>
      {currentFruit && (
        <>
          <div className="mt-5 bg-[#110d17] rounded w-46 h-46 pl-4 pr-6 py-5 custom-margin">
            <p className="">{currentFruit.name}</p>
            <p>
              <span className="font-bold ">Family: </span>
              {currentFruit.family}
            </p>
            <p>
              <span className="font-bold">Order: </span>
              {currentFruit.order}
            </p>
            <p>
              <span className="font-bold">Genus: </span>
              {currentFruit.genus}
            </p>
          </div>
          <Link
            className="mt-5 custom-margin flex items-center gap-2"
            href={`/detail/${currentFruit.name}`}
          >
            <FaArrowRight />
            Open detail
          </Link>
        </>
      )}
    </>
  );
};

export default SearchingPage;
