import { render, screen } from "@testing-library/react";
import { it, expect, describe } from "@jest/globals";
import "@testing-library/jest-dom";
import Home from "../pages/index";
import {
  exampleData,
  StateContextProvider,
} from "../context/StateContextProvider";

describe("Home is working correctly", () => {
  const searchResults = exampleData;

  /**
   * Test to confirm that the component actually renders on the page
   */
  it(`Home renders on the homepage`, () => {
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
        <Home />
      </StateContextProvider>
    );
    const actual = screen.getByTestId("Home");
    expect(actual).toBeInTheDocument();
  });
});
