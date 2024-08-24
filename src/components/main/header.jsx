import React, { useState } from "react";
import { baseUrl, fronturl } from "../../conf/conf";
import { Link, useNavigate } from "react-router-dom";
import { store } from "../../app/store";
import { useDispatch, useSelector } from "react-redux";
import momentIcon from "../../assets/moment_icon.svg";

import {
  is_user_authenticated,
  logout_user,
  profile_pic,
  username,
} from "../../features/auth/authSlice";
import Menu from "../media/Menu";
import Search from "../search/search";

const Header = () => {
  const loginUrl = `${baseUrl}/accounts/login/`;
  const my_profile = useSelector(profile_pic);
  console.log("profile", my_profile);
  const user_profile = `${baseUrl}${my_profile}`;
  const is_authenticated = useSelector(is_user_authenticated);
  console.log(profile_pic);
  const [showuserps, setShowUserOps] = useState(true);
  const dispatch = useDispatch();

  const my_username = useSelector(username);
  const navigator = useNavigate();

  const handle_sign_out = () => {
    dispatch(logout_user());
    setShowUserOps(false);
    navigator("/login");
  };
  console.log(`${fronturl}../../assets/Gold Luxury Initial Logo.png`);

  return (
    <>
      <nav class="flex items-center justify-between flex-wrap py-2 border-b shadow-lg fixed w-full bg-white z-50">
        <div className="flex">
          <Link to="/">
            <img
              src={`${fronturl}/src/assets/Gold Luxury Initial Logo.png`}
              alt=""
              srcset=""
              className="p-3 text-white hover:text-gray-400 text-xl max-sm:text-sm w-14 h-14 rounded-full z-50"
            />
          </Link>

          <Search />
        </div>

        {is_authenticated && (
          <div className="flex align-middle justify-evenly w-4/12 max-sm:w-1/2 mr-48">
            <Link to="/">
              <span className="p-3 text-gray-600 text-xl max-sm:text-sm hover:bg-slate-200 px-8 rounded-lg">
                <i class="fa-solid fa-house"></i>
              </span>
            </Link>

            <Link
              to="/moments"
              href="#responsive-header"
              class="max-sm:text-sm "
            >
              <span className="p-3 text-gray-600 hover:bg-slate-200 px-8 rounded-lg text-xl max-sm:text-sm">
                <i class="fa-brands fa-instalod"></i>
              </span>
            </Link>

            <Link to="/blogs">
              <span className="p-3 text-gray-600 text-xl max-sm:text-sm hover:bg-slate-200 px-8 rounded-lg">
                <i class="fa-solid fa-blog"></i>
              </span>
            </Link>
            <Link to="/notes">
              <span className="p-3 text-gray-600 text-xl max-sm:text-sm hover:bg-slate-200 px-8 rounded-lg">
                <i class="fa-solid fa-note-sticky"></i>
              </span>
            </Link>
          </div>
        )}

        <div className="flex gap-3">
          <div className="z-10 mr-2">
            {is_authenticated ? (
              <button
                class=""
                onClick={() => setShowUserOps((preValue) => !preValue)}
              >
                <img
                  class="w-10 h-10 rounded-full"
                  src={user_profile && user_profile}
                  alt="Rounded avatar"
                />
              </button>
            ) : (
              <Link
                to="/login"
                class={`inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0`}
              >
                login
              </Link>
            )}

            {showuserps && (
              <div
                class="z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 absolute right-1 w-48"
                id="user-dropdown"
              >
                <ul class="py-2" aria-labelledby="user-menu-button">
                  <li>
                    <button
                      onClick={() => handle_sign_out()}
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white w-full"
                    >
                      Sign out
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
      <div></div>
    </>
  );
};

export default Header;
