"use client";
/**
 * Makes the stored state accessible to all pages and components.
 */
import { createContext, useContext, useState } from "react";

//const searchResultsInitial: Root[] | [] = [];
const searchResultsInitial: any = [];

export const StateContext = createContext([] as any);

// Context provider
export function StateContextProvider({ children }: any) {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  return (
    <StateContext.Provider
      value={{
        search,
        setSearch,
        searchResults,
        setSearchResults,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}

// Custom hook
export function useStateContext() {
  return useContext(StateContext);
}
