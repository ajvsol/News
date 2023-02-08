import { render, screen } from "@testing-library/react";
import { it, expect, describe } from "@jest/globals";
import {
  exampleData,
  StateContextProvider,
} from "../context/StateContextProvider";
import SearchArea from "../components/SearchArea";

describe("SearchArea is working correctly", () => {
  const searchResults = exampleData;

  it(`SearchArea renders on the homepage`, () => {
    render(
      <StateContextProvider
        value={{
          searchResults,
          setSearchResults: jest.fn(),
          isOpen: true,
          setIsOpen: jest.fn(),
          modalIndex: 0,
          setModalIndex: jest.fn(),
        }}
      >
        <SearchArea />
      </StateContextProvider>
    );
    const actual = screen.getByTestId("SearchArea");
    expect(actual).toBeInTheDocument();
  });
});
