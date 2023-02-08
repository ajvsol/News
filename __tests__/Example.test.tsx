import { render, screen } from "@testing-library/react";
import { it, expect, describe } from "@jest/globals";
import Example from "../examples/Example";
import { useStateContext, exampleData } from "../context/StateContextProvider";

describe("Example is working correctly", () => {
  //const { searchResults } = useStateContext();

  const searchResults = exampleData;

  it(`Example renders on the homepage`, () => {
    render(<Example />);
    const actual = screen.getByTestId("Example");
    expect(actual).toBeInTheDocument();
  });
});
