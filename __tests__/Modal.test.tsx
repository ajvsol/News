import { render, screen } from "@testing-library/react";
import { it, expect, describe } from "@jest/globals";
import {
  exampleData,
  StateContextProvider,
} from "../context/StateContextProvider";
import Modal from "../components/Modal";

describe("Modal is working correctly", () => {
  const searchResults = exampleData;

  it(`Modal renders on the homepage`, () => {
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
        <Modal />
      </StateContextProvider>
    );
    const actual = screen.getByTestId("Modal");
    expect(actual).toBeInTheDocument();
  });
});
