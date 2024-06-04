import { Link } from "react-router-dom";

const Saved = () => {
  return (
    <div class="z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 mx-auto w-1/3 h-44">
      <ul
        class="py-2 text-sm text-gray-700 dark:text-gray-400"
        aria-labelledby="dropdownLargeButton"
      >
        <li>
          <Link
            to="/saved_moments"
            class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white font-extrabold"
          >
            Momments
          </Link>
        </li>
        <li>
          <Link
            to="/saved_blogs"
            class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white font-extrabold"
          >
            Blogs
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Saved;
