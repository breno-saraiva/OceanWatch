import { Outlet } from "react-router-dom";
import { Footer } from "../components/footer";
import { NavBar } from "../components/navbar";

export const Dashboard = () => {
  return (
    <div className="h-screen flex flex-col justify-between">
      <div>
        <NavBar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
