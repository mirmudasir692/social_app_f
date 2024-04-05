import React from "react";
import { baseUrl } from "../../conf/conf";
import { Link } from "react-router-dom";
import { store } from "../../app/store";
import { useSelector } from "react-redux";
import momentIcon from "../../assets/moment_icon.svg";

import {
  is_user_authenticated,
  profile_pic,
} from "../../features/auth/authSlice";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

const Header = () => {
  const loginUrl = `${baseUrl}/accounts/login/`;
  const my_profile = useSelector(profile_pic);
  console.log("profile", my_profile);
  const user_profile = `${baseUrl}/${my_profile}`;
  const is_authenticated = useSelector(is_user_authenticated);
  console.log(profile_pic);
  return (
    <>
      <nav class="flex items-center justify-between flex-wrap bg-blue-950 py-2 border-b">
        <div className="flex align-middle justify-evenly w-4/12 max-sm:w-1/2 mx-auto">
          <Link to="/">
            <span className="p-3 text-white hover:text-gray-400 text-xl max-sm:text-sm">
              <i class="fa-solid fa-house"></i>
            </span>
          </Link>

          <Link to="/moments" href="#responsive-header" class="max-sm:text-sm ">
            <span className="p-3 text-white hover:text-gray-400 text-xl max-sm:text-sm">
              <i class="fa-brands fa-instalod"></i>
            </span>
          </Link>
          <Link to="/blogs" class="text-white hover:text-gray-400 text-xl">
            <span className="p-3 hover:text-gray-400 text-xl max-sm:text-sm">
              <i class="fa-solid fa-blog"></i>
            </span>
          </Link>
          <Link to={`/media`} class="text-white hover:text-gray-400 text-xl">
            <span className="text-white hover:text-gray-400 text-xl max-sm:text-sm">
              <i className="fa-solid fa-square-plus"></i>
            </span>
          </Link>
        </div>
        <div className="z-10 mr-2">
          {is_authenticated ? (
            <Link to="/myaccount" class="">
              <img
                class="w-10 h-10 rounded-full"
                src={user_profile && user_profile}
                alt="Rounded avatar"
              />
            </Link>
          ) : (
            <Link
              to="/login"
              class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >
              login
            </Link>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
