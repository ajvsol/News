import { render, screen } from "@testing-library/react";
import { it, expect, describe } from "@jest/globals";
import Example2 from "../examples/Example2";
import {
  StateContextProvider,
  exampleData,
} from "../context/StateContextProvider";

describe("Example is working correctly", () => {
  const searchResults = exampleData;

  it(`Example renders on the homepage`, () => {
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
        <Example2 />
      </StateContextProvider>
    );
    const actual = screen.getByTestId("Example2");
    expect(actual).toBeInTheDocument();
  });
});
