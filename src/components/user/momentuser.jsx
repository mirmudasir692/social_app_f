import { useState } from "react";
import { baseUrl } from "../../conf/conf";

const MomentUser = ({ user }) => {
  console.log("user", user);
  return (
    <div class="px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 max-lg:max-h-28 max-lg:flex">
      <img
        class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
        src={user && `${baseUrl}/${user.profile_pic}`}
        alt="Woman's Face"
      />
      <div class="text-center space-y-2 sm:text-left">
        <div class="space-y-0.5">
          <p class="text-lg text-black font-semibold">
            {user && user.username}
          </p>
        </div>
        <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
          Message
        </button>
      </div>
    </div>
  );
};
export default MomentUser;
