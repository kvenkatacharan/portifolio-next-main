import { info } from "./info";
export const navLinks = [
  {
    name: "Home",
    path: "/",
    active: "home",
  },
  {
    name: "About Me",
    path: "/about",
    active: "about",
  },
  {
    name: info.initials,
    type: "initials",
    path: "/",
    active: "home",
  },
  {
    name: "Portfolio",
    path: "/portfolio",
    active: "portfolio",
  },
];
