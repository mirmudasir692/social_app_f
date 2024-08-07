import { useSelector } from "react-redux";
import { user_id } from "../../features/auth/authSlice";
import { baseUrl } from "../../conf/conf";
import { useState } from "react";

const Message = ({ message }) => {
  console.log("message", message);
  const sender_id = parseInt(useSelector(user_id));
  console.log("sender_id", typeof sender_id);
  console.log("");
  const [operations, setOperations] = useState(false);

  return (
    <div
      class={`flex items-start w-56 gap-1 ${
        sender_id === message.sender.id ? "ml-auto flex-row-reverse " : ""
      }`}
    >
      {sender_id !== message.sender.id && (
        <img
          class="w-8 h-8 rounded-full"
          src={`${baseUrl}${message.sender.profile_pic}`}
          alt="Jese image"
        />
      )}
      <div class="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl border-2 mt-2 dark:bg-gray-700">
        <div class="flex items-center space-x-2 rtl:space-x-reverse">
          <span
            class={`text-xs font-normal text-gray-500 dark:text-gray-400 ${
              sender_id === message.sender.id ? "" : ""
            }`}
          >
            11:46
          </span>
        </div>
        <p class="text-xs font-normal py-2.5 text-gray-900 dark:text-white">
          {message.message}
        </p>
        {sender_id === message.sender.id && (
          <span class="text-xs font-normal text-gray-500 dark:text-gray-400">
            Delivered
          </span>
        )}
      </div>
      <button
        id="dropdownMenuIconButton"
        data-dropdown-toggle="dropdownDots"
        data-dropdown-placement="bottom-start"
        class="inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 dark:focus:ring-gray-600"
        type="button"
        onClick={() => setOperations((preValue) => !preValue)}
      >
        <svg
          class="w-4 h-4 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 4 15"
        >
          <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
        </svg>
      </button>
      <div
        id="dropdownDots"
        class={`z-10 ${
          operations ? "flex" : "hidden"
        } bg-white divide-y divide-gray-100 rounded-lg shadow w-40 dark:bg-gray-700 dark:divide-gray-600`}
      >
        <ul
          class="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownMenuIconButton"
        >
          <li>
            <a
              href="#"
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Reply
            </a>
          </li>
          <li>
            <a
              href="#"
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Forward
            </a>
          </li>
          <li>
            <a
              href="#"
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Copy
            </a>
          </li>
          <li>
            <a
              href="#"
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Report
            </a>
          </li>
          <li>
            <a
              href="#"
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Delete
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Message;
