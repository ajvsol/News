// Next.js being used because it's performance is great thanks to server-side rendering, and it makes page routing simple

import SearchArea from "@/components/SearchArea";
import ResultsArea from "@/components/ResultsArea";

export default function Home() {
  return (
    <>
      <SearchArea />
      <ResultsArea />
    </>
  );
}
