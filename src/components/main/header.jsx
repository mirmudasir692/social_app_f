import React, { useState } from "react";
import { baseUrl } from "../../conf/conf";
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

const Header = () => {
  const loginUrl = `${baseUrl}/accounts/login/`;
  const my_profile = useSelector(profile_pic);
  console.log("profile", my_profile);
  const user_profile = `${baseUrl}${my_profile}`;
  const is_authenticated = useSelector(is_user_authenticated);
  console.log(profile_pic);
  const [showuserps, setShowUserOps] = useState(false);
  const dispatch = useDispatch();

  const my_username = useSelector(username);
  const navigator = useNavigate();

  const handle_sign_out = () => {
    dispatch(logout_user());
    setShowUserOps(false);
    navigator("/login");
  };

  return (
    <>
      <nav class="flex items-center justify-between flex-wrap bg-blue-950 py-2 border-b">
        {is_authenticated && (
          <div className="flex align-middle justify-evenly w-4/12 max-sm:w-1/2 mx-auto">
            <Link to="/">
              <span className="p-3 text-white hover:text-gray-400 text-xl max-sm:text-sm">
                <i class="fa-solid fa-house"></i>
              </span>
            </Link>

            <Link
              to="/moments"
              href="#responsive-header"
              class="max-sm:text-sm "
            >
              <span className="p-3 text-white hover:text-gray-400 text-xl max-sm:text-sm">
                <i class="fa-brands fa-instalod"></i>
              </span>
            </Link>
            <Link to="/blogs" class="text-white hover:text-gray-400 text-xl">
              <span className="p-3 hover:text-gray-400 text-xl max-sm:text-sm">
                <i class="fa-solid fa-blog"></i>
              </span>
            </Link>
          </div>
        )}

        {is_authenticated && <Menu />}

        <div className="flex gap-3">
          {is_authenticated && (
            <Link to="/chatbox" className="text-white text-4xl">
              <i class="fa-brands fa-facebook-messenger"></i>
            </Link>
          )}
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
                class="z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 absolute right-1"
                id="user-dropdown"
              >
                <div class="px-4 py-3">
                  <Link
                    to="/myaccount"
                    class="block text-sm text-gray-900 dark:text-white"
                  >
                    {my_username}
                  </Link>
                </div>
                <ul class="py-2" aria-labelledby="user-menu-button">
                  <li>
                    <Link
                      to="/saved"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Saved
                    </Link>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Earnings
                    </a>
                  </li>
                  <li>
                    <button
                      onClick={() => handle_sign_out()}
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
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
