import { useStateContext } from "../context/StateContextProvider";

export default function Example2() {
  const { searchResults } = useStateContext();

  return (
    <div data-testid="Example2">
      <p>{searchResults.articles[0].title}</p>
    </div>
  );
}
