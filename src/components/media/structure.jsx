import { Outlet } from "react-router-dom";
import MediaList from "./medialist";

const Structure = () => {
  return (
    <div className="flex max-md:flex-col">
      <MediaList />
      <Outlet />
    </div>
  );
};

export default Structure;
