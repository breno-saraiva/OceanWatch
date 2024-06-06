import { RouteObject } from "react-router-dom";
import { Home } from "../page";

const homePage: RouteObject[] = [
  {
    path: "/home",
    element: <Home />,
  },
];

export { homePage };
