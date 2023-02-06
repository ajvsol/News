"use client";

import { Card, Button } from "flowbite-react";
import { useStateContext } from "@/context/StateContextProvider";

export default function ResultsArea() {
  const { searchResults } = useStateContext();
  const articles = searchResults.articles || [];

  return (
    <div id="results-area" className="space-y-1 max-w-2xl">
      {articles.map((element: any, index: number) => {
        return (
          <Card
            key={index}
            data-testid={`card-${index}`}
            imgSrc={`${element.image}`}
            className="bg-slate-500"
            //onClick={() => {
            //  handleCard(index);
            //  setCardIndex(index);
            //  selectedCardCheck(index);
            //}}

            //    className={`hover:cursor-pointer
            //		${selectedCardCheck(index)}

            //${cssDarkMode} ${cssLightMode}
            //${selectedCardCheck(index)}
            //`}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {element.title}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {element.description}
            </p>
            <Button
              //onClick={() => {
              //  moreInfo(index);
              //}}
              data-testid={`cardbutton-${index}`}
            >
              Click Me
              <svg
                className="ml-2 -mr-1 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          </Card>
        );
      })}
    </div>
  );
}
