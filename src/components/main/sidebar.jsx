import { useDispatch, useSelector } from "react-redux";
import {
  logout_user,
  profile_pic,
  username,
} from "../../features/auth/authSlice";
import { baseUrl } from "../../conf/conf";
import { useState } from "react";
import Menu from "../media/Menu";
import { Link, useNavigate } from "react-router-dom";

const SideBar = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const my_profile_pic = useSelector(profile_pic);
  const my_username = useSelector(username);
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const handle_sign_out = () => {
    dispatch(logout_user());
    navigator("/login");
  };
  console.log("my profile", my_profile_pic);

  return (
    <div className="">
      <button
        onClick={() => setShowSideBar((prevalue) => !prevalue)}
        className={`px-4 py-2 text-2xl rounded-full border-2 border-gray-800 absolute left-1 top-22 z-50`}
      >
        <i class="fa-solid fa-bars"></i>
      </button>
      <div
        class={`flex flex-col bg-clip-border text-gray-700 h-full w-full max-w-[20rem] p-4 z-50 fixed top-10 mt-12 ${
          !showSideBar && "hidden"
        }`}
      >
        <div class="mb-2 p-4"></div>
        <nav class="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-gray-700">
          <div
            role="button"
            tabindex="0"
            class="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900  outline-none text-black"
          >
            <div class="grid place-items-center mr-4">
              <span>
                <img
                  src={`${baseUrl}${my_profile_pic}`}
                  alt=""
                  srcset=""
                  className="w-8 h-8 rounded-3xl"
                />
              </span>
            </div>
            <Link to="/myaccount">{my_username}</Link>
          </div>
          <div
            role="button"
            tabindex="0"
            class="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none text-black"
          >
            <div class="grid place-items-center mr-4 w-8 h-8">
              <i class="fas fa-upload"></i>
            </div>
            <Menu />
          </div>

          <div
            role="button"
            tabindex="0"
            class="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none text-black"
          >
            <div class="grid place-items-center mr-4 w-8 h-8">
              <span className="text-xl">
                <i class="fa-regular fa-floppy-disk"></i>
              </span>
            </div>
            <Link to="/saved">Saved</Link>
          </div>
          <button
            tabindex="0"
            class="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none text-black"
            onClick={() => handle_sign_out()}
          >
            <div class="grid place-items-center mr-4 w-8 h-8">
              <span className="text-xl">
                <i class="fa-solid fa-right-from-bracket"></i>
              </span>
            </div>
            Logout
          </button>
          <div
            role="button"
            tabindex="0"
            class="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none text-black"
          ></div>
        </nav>
      </div>
    </div>
  );
};

export default SideBar;
