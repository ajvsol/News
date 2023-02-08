"use client";
/**
 * Makes the stored state accessible to all pages easily.
 */
import { createContext, useContext, useState } from "react";

export const StateContext = createContext([] as any);

// Context provider
export function StateContextProvider({ children }: any) {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState(exampleData);
  const [isOpen, setIsOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  return (
    <StateContext.Provider
      value={{
        search,
        setSearch,
        searchResults,
        setSearchResults,
        isOpen,
        setIsOpen,
        modalIndex,
        setModalIndex,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}

// Custom hook
export function useStateContext() {
  return useContext(StateContext);
}

// Example data for initial state and for automated tests
export const exampleData = {
  totalArticles: 6566,
  articles: [
    {
      title:
        "15,000 runners hit the pavement in Huntington Beach for Surf City USA Marathon",
      description:
        "The event - three separate races - featured some runners striving for the top prize and others simply out to complete the race, set personal bests and have fun.",
      content:
        "15,000 runners hit the pavement in Huntington Beach for Surf City USA Marathon\nThe event - three separate races - featured some runners striving for the top prize and others simply out to complete the race, set personal bests and have fun.\nHUNTINGTON... [736 chars]",
      url: "https://abc7.com/surf-city-marathon-huntington-beach-long-distance-running-community-events/12777143/",
      image:
        "https://cdn.abcotvs.com/dip/images/12777142_020523-kabc-5pm-surf-city-marathon-vid.jpg?w=1600",
      publishedAt: "2023-02-06T17:54:00Z",
      source: {
        name: "KABC-TV",
        url: "https://abc7.com",
      },
    },
    {
      title:
        "Sarah Lacina on Why She 'Doesn't Come Across Well' on TV, Says Her 'Funny Side' Isn't Shown",
      description:
        "'The Challenge: USA' champ and 'Survivor' winner Sarah Lacina acknowledged her boring edits and claimed her 'funny' side isn't shown on TV.",
      content:
        "‘The Challenge’: Sarah Lacina on Why She ‘Doesn’t Come Across Well’ on TV, Says Her ‘Funny Side’ Isn’t Shown\nIowa-based police officer Sarah Lacina is perceived as a boring reality TV character, despite her winning Survivor: Game Changers and The Cha... [3375 chars]",
      url: "https://www.cheatsheet.com/entertainment/the-challenge-sarah-lacina-tv-funny-side.html/",
      image:
        "https://www.cheatsheet.com/wp-content/uploads/2023/02/The-Challenge-Sarah-Lacina.jpg?w=1200",
      publishedAt: "2023-02-05T04:27:22Z",
      source: {
        name: "Showbiz Cheat Sheet",
        url: "https://www.cheatsheet.com",
      },
    },
    {
      title: "How Murf the Surf pulled off a heist at Natural History museum",
      description:
        'The new documentary “Murf the Surf: Jewels, Jesus, and Mayhem in the USA,” premiering February 5, 2023, on MGM+, tells the true story of how surfer dude Jack "Murf the Surf" Murphy became a true-crime celebrity after stealing jewels from New York City\'s Museum of Natural History in 1964.',
      content:
        "According to the “Oceans Eleven” movies, heists of major institutions require a high-tech, fast-talking, carefully orchestrated operation.\nBut when Murf the Surf decided to steal some jewels from New York City’s Museum of Natural History, all it took... [9559 chars]",
      url: "https://nypost.com/2023/02/04/how-murf-the-surf-pulled-off-a-heist-at-natural-history-museum/",
      image:
        "https://nypost.com/wp-content/uploads/sites/2/2023/02/murf-jewelry-heist.jpg?quality=75&strip=all&w=1024",
      publishedAt: "2023-02-04T18:02:52Z",
      source: {
        name: "New York Post",
        url: "https://nypost.com",
      },
    },
    {
      title:
        "“MLS Lifers Are Shaking in Their Boots” - Deadpool Superstar Ryan Reynolds’ Major $1 Million Competition Announcement Excites American Fans",
      description:
        "Ryan Reynolds owned club Wrexham send a major shock as they announced their arrival in the USA later this year for a 1 million USD tournament.",
      content:
        "Published 02/04/2023, 6:30 AM EST\nEver since the Deadpool star Ryan Reynolds acquired the welsh club Wrexham with Rob McElhenney. The club is in the front seat of popularity. This isn’t just about the immensely vast fanbase and easy marketing Hollywo... [2947 chars]",
      url: "https://www.essentiallysports.com/soccer-football-news-mls-lifers-are-shaking-in-their-boots-deadpool-superstar-ryan-reynolds-major-1-million-competition-announcement-excites-american-fans/",
      image:
        "https://image-cdn.essentiallysports.com/wp-content/uploads/GettyImages-1236228019.jpg",
      publishedAt: "2023-02-04T11:30:54Z",
      source: {
        name: "Essentially Sports",
        url: "https://www.essentiallysports.com",
      },
    },
    {
      title:
        "“He Is a Position of Need” - USMNT Legend Divulges on French League Top-Scorer Folarin Balogun’s Chances of Playing for USA",
      description:
        "USMNT Legend Alexi Lalas talked about the chances of the ligue1 top scorer Folarin Balogun playing for the USA in future, in his podcast.",
      content:
        "Published 02/04/2023, 6:00 AM EST\nUSMNT is scrambling to put together a squad that can present good results in upcoming tournaments. About a week ago, CONMEBOL announced that the States will be hosting the 2024 edition of Copa America. Apart from tes... [2662 chars]",
      url: "https://www.essentiallysports.com/soccer-football-news-he-is-a-position-of-need-usmnt-legend-alexi-lalas-divulges-on-french-league-top-scorer-folarin-baloguns-chances-of-playing-for-usa/",
      image:
        "https://image-cdn.essentiallysports.com/wp-content/uploads/imago1023270216h.jpg",
      publishedAt: "2023-02-04T11:00:29Z",
      source: {
        name: "Essentially Sports",
        url: "https://www.essentiallysports.com",
      },
    },
    {
      title:
        "Canon USA Settles with Employees Affected by 2020 Ransomware Attack",
      description:
        "Canon has agreed to settle claims regarding the data breach it suffered in 2020 and will pay affected employees for compromising their data.",
      content:
        "Canon USA has agreed to settle claims regarding the data breach it suffered in August of 2020 and will pay affected employees cash for compromising their personal data.\nCanon USA has agreed to pay employees that were affected by the data breach up to... [2420 chars]",
      url: "https://petapixel.com/2023/02/03/canon-usa-settles-with-employees-affected-by-2020-ransomware-attack/",
      image:
        "https://petapixel.com/assets/uploads/2023/02/Canon-to-Pay-7500-to-Each-Employee-Affected-by-the-2020-Data-Breach.jpg",
      publishedAt: "2023-02-03T20:56:22Z",
      source: {
        name: "PetaPixel",
        url: "https://petapixel.com",
      },
    },
    {
      title:
        "MASSIVE! Deadpool Superstar Ryan Reynolds’ Wrexham Trumps Billion Dollar Teams Real Madrid and PSG in USA",
      description:
        "The FA Cup game between Ryan Reynolds co-owned Wrexham AFC and Sheffield United trumped the games of the European giants on Sunday in the US.",
      content:
        "Published 02/03/2023, 7:30 AM EST\nWrexham AFC, co-owned by Hollywood star Ryan Reynolds, will play the replay of the FA Cup fourth-round game next week. They were so close to a fifth-round birth on Sunday until their opponent Sheffield United scored ... [2704 chars]",
      url: "https://www.essentiallysports.com/soccer-football-news-massive-deadpool-superstar-ryan-reynolds-wrexham-trumps-billion-dollar-teams-real-madrid-and-psg-in-usa/",
      image:
        "https://image-cdn.essentiallysports.com/wp-content/uploads/imago1012790768h.jpg",
      publishedAt: "2023-02-03T12:30:29Z",
      source: {
        name: "Essentially Sports",
        url: "https://www.essentiallysports.com",
      },
    },
    {
      title: "Denver Coliseum to Host USA Curling National Championships",
      description:
        "Colorado has hosted the USA Curling National Championships before, but this is the City of Denver's first time on the sheets.",
      content:
        "click to enlarge Who knew? Curling stones are made of granite. Catie Cheshire\nclick to enlarge Devices like this create the ice texture for curling. Catie Cheshire\nThe Denver Coliseum has traded cow patties and lassos for hog lines and ice to host th... [8708 chars]",
      url: "https://www.westword.com/news/denver-coliseum-hosts-olympic-curlers-at-usa-curling-national-championships-16082042",
      image:
        "https://media1.westword.com/den/imager/u/slideshow/16082053/denver-curling-club.jpg",
      publishedAt: "2023-02-03T11:00:00Z",
      source: {
        name: "Westword",
        url: "https://www.westword.com",
      },
    },
    {
      title:
        "“F*ckin Perfect” Daniel Ricciardo Takes Credit for Wooing USA as Americans Gush Over Their New Sweetheart",
      description:
        "Daniel Ricciardo floors fans on social media after taking credit for wooing the USA toward F1 as everyone reacts to shower love on the Aussie.",
      content:
        "Published 02/03/2023, 4:50 AM EST\n“DANIELLLL RICCIARDOOOO!” – Fans would certainly be shouting the name of the Honey Badger after his latest appearance on The Late Show. Daniel Ricciardo is going to be in New York City for the RB19 launch on February... [3428 chars]",
      url: "https://www.essentiallysports.com/f1-news-fckin-perfect-daniel-ricciardo-takes-credit-for-wooing-usa-as-americans-gush-over-their-new-sweetheart/",
      image:
        "https://image-cdn.essentiallysports.com/wp-content/uploads/GettyImages-1419865391.jpg",
      publishedAt: "2023-02-03T09:50:44Z",
      source: {
        name: "Essentially Sports",
        url: "https://www.essentiallysports.com",
      },
    },
    {
      title:
        "Beazer Homes stock slides after fiscal Q1 earnings, revenue disappoint",
      description:
        "Beazer Homes USA (BZH) stock dropped 7.6% in Thursday after-hours trading after the homebuilder's fiscal Q1 profit and sales each dived from a year before as high mortgage rates weighed...",
      content:
        "Beazer Homes USA (NYSE:BZH) stock dropped 7.6% in Thursday after-hours trading after the homebuilder's fiscal Q1 profit and sales each dived from a year before as high mortgage rates weighed on new home sales.\n\"Toward the end of the quarter, as mortg... [937 chars]",
      url: "https://seekingalpha.com/news/3931652-beazer-homes-stock-slides-after-fiscal-q1-earnings-revenue-disappoint",
      image:
        "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/463245087/image_463245087.jpg?io=getty-c-w750",
      publishedAt: "2023-02-02T23:06:23Z",
      source: {
        name: "Seeking Alpha",
        url: "https://seekingalpha.com",
      },
    },
  ],
};
