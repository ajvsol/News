import { render, screen } from "@testing-library/react";
import { it, expect, describe } from "@jest/globals";
import {
  useStateContext,
  exampleData,
  StateContextProvider,
} from "../context/StateContextProvider";
import ResultsArea from "../components/ResultsArea";

describe("ResultsArea is working correctly", () => {
  //const { searchResults } = useStateContext();

  const searchResults = exampleData;

  it(`ResultsArea renders on the homepage`, () => {
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
        <ResultsArea />
      </StateContextProvider>
    );
    const actual = screen.getByTestId("ResultsArea");
    expect(actual).toBeInTheDocument();
  });
});
