"use client";

const key = process.env.NEXT_PUBLIC_GNEWS;

import { useStateContext } from "@/context/StateContextProvider";
import React from "react";

export default function SearchArea() {
  const { search, setSearch, setSearchResults } = useStateContext();

  /**
   * Store current search area input in state
   */
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  /**
   * Call API on button click
   */
  async function handleClick() {
    await getAPIData();
  }

  /**
   * Call API on keyboard enter button press
   */
  async function handleEnter(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.keyCode == 13) {
      await getAPIData();
    }
  }

  /**
   * Fetch API data if there is text in search state.
   */
  async function getAPIData() {
    try {
      if (search.length !== 0) {
        const res = await fetch(
          `https://gnews.io/api/v4/search?q=${search}&apikey=${key}&lang=en&country=us&max=10`,
          {
            method: "GET",
            headers: {
              accept: "Access-Control-Allow-Origin",
            },
          }
        );
        const data = await res.json();
        console.log("DATA:", data);
        setSearchResults(data);
      }
    } catch (e) {
      alert("getAPIData() error");
    }
  }

  return (
    <div className="flex min-w-[95%]  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
      <div className="flex w-full relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <input
          onChange={handleChange}
          onKeyDown={handleEnter}
          type="text"
          id="simple-search"
          className="flex flex-1 self-stretch items-stretch text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full pl-10 p-2.5  
        bg-gray-50 border border-gray-300 text-gray-900 
        dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-200 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search via keyword"
          data-testid="simple-search"
          required
        />
      </div>
      <button
        onClick={handleClick}
        type="submit"
        data-testid="SearchBarButton"
        className="p-2.5 ml-2 text-sm font-medium 
      text-white bg-[#FF6720] rounded-lg border border-yellow-700 hover:bg-[#9c0d38] focus:ring-4 focus:outline-none focus:ring-yellow-300 
      dark:bg-[#FF6720] dark:hover:bg-yellow-600 dark:focus:ring-yellow-800"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
        <span className="sr-only">Search</span>
      </button>
    </div>
  );
}
