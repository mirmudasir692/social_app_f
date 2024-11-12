import { baseUrl } from "../../conf/conf";

const User = ({ user }) => {
  return (
    <li class="pt-3 pb-0 sm:pt-4 w-1/2 mx-auto bg-slate-200 rounded-lg">
      <div class="flex items-center ">
        <div class="flex-shrink-0">
          <img
            class="w-8 h-8 rounded-full"
            src={`${baseUrl}/${user.profile_pic}`}
            alt="Thomas image"
          />
        </div>
        <div class="flex-1 min-w-0 ms-4">
          <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
            {user.username}
          </p>
          <p class="text-sm text-gray-500 truncate dark:text-gray-400">
            {user.email}
          </p>
        </div>
      </div>
    </li>
  );
};

export default User;
