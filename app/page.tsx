// Next.js being used because it's performance is great thanks to server-side rendering, and it makes page routing simple

import Image from "next/image";
import SearchArea from "@/components/SearchArea";

export default function Home() {
  const apikey = process.env.NEXT_PUBLIC_GNEWS;

  let url =
    "https://gnews.io/api/v4/search?q=example&apikey=" +
    apikey +
    "&lang=en&country=us&max=10";

  //fetch(url)
  //  .then(function (response) {
  //    return response.json();
  //  })
  //  .then(function (data) {
  //    articles = data.articles;

  //    for (i = 0; i < articles.length; i++) {
  //      // articles[i].title
  //      console.log("Title: " + articles[i]["title"]);
  //      // articles[i].description
  //      console.log("Description: " + articles[i]["description"]);
  //      // You can replace {property} below with any of the article properties returned by the API.
  //      // articles[i].{property}
  //      // console.log(articles[i]['{property}']);

  //      // Delete this line to display all the articles returned by the request. Currently only the first article is displayed.
  //      break;
  //    }
  //  });

  return (
    <>
      <SearchArea />
    </>
  );
}
