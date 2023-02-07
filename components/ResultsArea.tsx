"use client";

import { Card, Button } from "flowbite-react";
import { useStateContext } from "@/context/StateContextProvider";
import MyModal from "./Modal";

export default function ResultsArea() {
  const { searchResults, setIsOpen, setModalIndex } = useStateContext();
  const articles = searchResults.articles || [];

  function openModal(index: number): void {
    setIsOpen(true);
    setModalIndex(index);
    console.log(searchResults);
    console.log(`index:`, index);
  }

  return (
    <div
      id="results-area"
      className="space-y-2 max-w-4xl p-2 flex-col place-self-center justify-self-center	justify-items-center content-center items-center self-center "
    >
      {articles.map((element: any, index: number) => {
        return (
          <Card
            key={index}
            data-testid={`card-${index}`}
            imgSrc={`${element.image}`}
            className="max-w-md border-gray-500 dark:border-gray-400 dark:bg-gray-700
						"
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {element.title}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-300">
              {element.description}
            </p>
            <Button
              onClick={() => {
                openModal(index);
              }}
              data-testid={`cardbutton-${index}`}
              className="m-1 text-gray-800 dark:text-gray-100 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 hover:dark:bg-gray-800"
            >
              Show More
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
            <MyModal />
          </Card>
        );
      })}
    </div>
  );
}
