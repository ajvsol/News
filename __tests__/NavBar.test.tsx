import { render, screen } from "@testing-library/react";
import { it, expect, describe } from "@jest/globals";
import {
  useStateContext,
  exampleData,
  StateContextProvider,
} from "../context/StateContextProvider";
import NavBar from "../components/NavBar";

describe("NavBar is working correctly", () => {
  //const { searchResults } = useStateContext();

  const searchResults = exampleData;

  it(`NavBar renders on the homepage`, () => {
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
        <NavBar />
      </StateContextProvider>
    );
    const actual = screen.getByTestId("NavBar");
    expect(actual).toBeInTheDocument();
  });
});
