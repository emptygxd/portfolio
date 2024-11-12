import {
  clockImg,
  coffeeImg,
  digitalAgencyImg,
  hikingImg,
  moviesImg,
  nftImg,
  ticTacImg,
  timerImg,
  todoImg,
  weatherImg,
} from "assets";

export type Project = {
  title: string;
  technologies: string[];
  imageUrl: string;
  link: string;
};

export const LAYOUT_PROJECTS = [
  {
    title: "digital agency",
    technologies: ["HTML", "CSS"],
    imageUrl: digitalAgencyImg,
    link: "https://emptygxd.github.io/index-freebie-agency/",
  },
  {
    title: "nft marketplace",
    technologies: ["HTML", "CSS"],
    imageUrl: nftImg,
    link: "https://emptygxd.github.io/nfc-site/",
  },
  {
    title: "hiking guide",
    technologies: ["HTML", "CSS"],
    imageUrl: hikingImg,
    link: "https://emptygxd.github.io/hiking-site/",
  },
  {
    title: "coffee shop",
    technologies: ["HTML", "CSS"],
    imageUrl: coffeeImg,
    link: "https://emptygxd.github.io/coffee-site/",
  },
];

export const REACT_PROJECTS = [
  {
    title: "timer",
    technologies: ["HTML", "CSS", "JavaScript"],
    imageUrl: timerImg,
    link: "https://emptygxd.github.io/timer/",
  },
  {
    title: "clock",
    technologies: ["HTML", "CSS", "JavaScript"],
    imageUrl: clockImg,
    link: "https://emptygxd.github.io/screen-saver-clock/",
  },
  {
    title: "tic tac toe",
    technologies: ["HTML", "CSS", "JavaScript"],
    imageUrl: ticTacImg,
    link: "https://emptygxd.github.io/tic-tac-toe/",
  },
  {
    title: "weather app",
    technologies: ["HTML", "CSS", "JavaScript"],
    imageUrl: weatherImg,
    link: "https://emptygxd.github.io/weather-app/",
  },
  {
    title: "todo",
    technologies: ["HTML", "CSS", "TypeScript"],
    imageUrl: todoImg,
    link: "https://emptygxd.github.io/ts-todo/",
  },
  {
    title: "movie library",
    technologies: ["React", "SCSS", "TypeScript", "Redux"],
    imageUrl: moviesImg,
    link: "https://emptygxd.github.io/theTrueMovie/",
  },
];
