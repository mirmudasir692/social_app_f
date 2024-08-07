import { useEffect, useState } from "react";
import { baseUrl } from "../../conf/conf";
import { FollowUser } from "../../api/user/follow";

const User = ({ user }) => {
  console.log("user", user.is_followed);
  const [is_follow, setIs_follow] = useState(false);
  const handle_follow_user = async () => {
    try {
      const result = await FollowUser(user.id);
      if (result === 200) {
        setIs_follow((prevalue) => !prevalue);
      }
    } catch (err) {
      setIs_follow(false);
      console.log("error", err);
    }
  };
  useEffect(() => {
    setIs_follow(user.is_followed);
  }, [user]);
  return (
    <li class="pt-3 pb-0 sm:pt-4">
      <div class="flex items-center ">
        <div class="flex-shrink-0">
          <img
            class="w-8 h-8 rounded-full"
            src={`${baseUrl}/media/${user.profile_pic}`}
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
        <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
          {is_follow ? (
            <button
              onClick={handle_follow_user}
              className="font-bold text-sm bg-gray-200 hover:bg-gray-300 py-1.5 px-3 rounded-md"
            >
              following
            </button>
          ) : (
            <button
              onClick={handle_follow_user}
              className="font-bold text-sm bg-gray-200 hover:bg-gray-300 py-1.5 px-3 rounded-md"
            >
              follow
            </button>
          )}
        </div>
      </div>
    </li>
  );
};

export default User;
