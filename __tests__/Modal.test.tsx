import { render, screen, fireEvent } from "@testing-library/react";
import { it, expect, describe } from "@jest/globals";
import {
  exampleData,
  StateContextProvider,
  useStateContext,
} from "../context/StateContextProvider";
import Modal from "../components/Modal";

describe("Modal", () => {
  const searchResults = exampleData;

  it(`renders on the homepage`, () => {
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

  //it(`renders the correct text on the modal`, () => {
  //  render(
  //    <StateContextProvider
  //      value={{
  //        searchResults,
  //        setSearchResults: jest.fn(),
  //        isOpen: true,
  //        setIsOpen: jest.fn(),
  //        modalIndex: 0,
  //        setModalIndex: jest.fn(),
  //      }}
  //    >
  //      <Modal />
  //    </StateContextProvider>
  //  );
  //  expect(
  //    screen.getByText(searchResults.articles[0].title)
  //  ).toBeInTheDocument();
  //  expect(
  //    screen.getByText(searchResults.articles[0].content)
  //  ).toBeInTheDocument();
  //});

  //it(`closes the modal by clicking the close button`, () => {
  //  render(
  //    <StateContextProvider
  //      value={{
  //        searchResults,
  //        setSearchResults: jest.fn(),
  //        isOpen: true,
  //        setIsOpen: jest.fn(),
  //        modalIndex: 0,
  //        setModalIndex: jest.fn(),
  //      }}
  //    >
  //      <Modal />
  //    </StateContextProvider>
  //  );
  //  const closeModalButton = screen.getByText("Read Article");
  //  fireEvent.click(closeModalButton);
  //  expect(useStateContext().setIsOpen).toHaveBeenCalledWith(false);
  //});
});
