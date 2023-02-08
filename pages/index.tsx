// Next.js being used mainly because it's performance is great thanks to server-side rendering

import ResultsArea from "../components/ResultsArea";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div data-testid="Home">
      <NavBar />
      <ResultsArea />
    </div>
  );
}
