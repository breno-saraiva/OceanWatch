import { RouteObject } from "react-router-dom";
import { Dashboard } from "..";
import { homePage } from "../pages/home/routes/index.routes";
import { recursosPage } from "../pages/recursos/routes/index.routes";

const dashboard: RouteObject[] = [
  {
    path: "/",
    element: <Dashboard />,
    children: [...homePage, ...recursosPage],
  },
];

export { dashboard };
