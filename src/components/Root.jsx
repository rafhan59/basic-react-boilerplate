import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Root = () => {
  return (
    <div className="mx-auto max-w-[80%]">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Root;
