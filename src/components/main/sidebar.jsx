import { useSelector } from "react-redux";
import { profile_pic, username } from "../../features/auth/authSlice";
import { baseUrl } from "../../conf/conf";
import { useState } from "react";
import Menu from "../media/Menu";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const my_profile_pic = useSelector(profile_pic);
  const my_username = useSelector(username);
  console.log("my profile", my_profile_pic);

  return (
    <div className="">
      <button
        onClick={() => setShowSideBar((prevalue) => !prevalue)}
        className={`px-4 py-2 text-2xl rounded-full border-2 border-gray-800 ${showSideBar} relative left-56`}
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
            {my_username}
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
          <div
            role="button"
            tabindex="0"
            class="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none text-black"
          >
            <div class="grid place-items-center mr-4 w-8 h-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                class="h-5 w-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            Settings
          </div>
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
