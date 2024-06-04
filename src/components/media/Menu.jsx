import { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <div>
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul>
            <li>
              <button
                onClick={() => setDropdownOpen((preValue) => !preValue)}
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                class="flex items-center justify-between w-full text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                <span className="relative bottom-3 right-4 text-white text-xl">
                  <i class="fa-solid fa-circle-plus"></i>
                </span>
              </button>
              {dropdownOpen && (
                <div
                  id="dropdownNavbar"
                  class="z-40 absolute right-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul
                    class="py-2 text-sm text-gray-700 dark:text-gray-400"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <Link
                        to="/add_moment"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Moment
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/add_blog"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Blog
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Menu;
