import { createBrowserRouter } from "react-router-dom";
import { dashboard } from "../modules/Dashboard/routes/index.routes";

const router = createBrowserRouter([...dashboard]);

export { router };