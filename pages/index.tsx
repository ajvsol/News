// Next.js being used because it's performance is great thanks to server-side rendering, and it makes page routing simple

import ResultsArea from "@/components/ResultsArea";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <ResultsArea />
    </>
  );
}
