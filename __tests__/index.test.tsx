import { render, screen } from "@testing-library/react";
import { it, expect, describe } from "@jest/globals";
import "@testing-library/jest-dom";
import Home from "../pages/index";
//import {
//  useStateContext,
//  StateContext,
//  StateContextProvider,
//} from "../context/StateContextProvider";

describe("Home is working correctly", () => {
  //const { searchResults, setIsOpen, setModalIndex } = useStateContext();

  it(`Home renders on the homepage`, () => {
    render(<Home />);
    const actual = screen.getByTestId("Home");
    expect(actual).toBeInTheDocument();
  });
});
