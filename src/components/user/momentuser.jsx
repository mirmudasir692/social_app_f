import { useEffect, useMemo, useState } from "react";
import { baseUrl } from "../../conf/conf";
import { useSelector } from "react-redux";
import { user_id } from "../../features/auth/authSlice";
import { FollowUser } from "../../api/user/follow";

const MomentUser = ({ user, follow_status }) => {
  const userId = parseInt(useSelector(user_id));
  const [localIsFollowed, setLocalIsFollowed] = useState(false);

  useEffect(() => {
    setLocalIsFollowed(follow_status);
  }, [follow_status]);

  const FollowUpUser = async (e) => {
    e.preventDefault();
    try {
      const response = await FollowUser(user && user.id);
      if (response === 200) {
        setLocalIsFollowed((preValue) => !preValue);
      }
    } catch (error) {}
  };
  const followLabel = useMemo(() => {
    return localIsFollowed ? "following" : "follow";
  }, [localIsFollowed]);

  return (
    <div class="px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 max-lg:max-h-18 max-lg:flex max-sm:max-w-full max-sm:h-12 max-sm:flex max-sm:flex-row">
      <img
        class="block mx-auto h-10 rounded-full sm:mx-0 sm:shrink-0"
        src={user && `${baseUrl}${user.profile_pic}`}
        alt="Woman's Face"
      />
      <div class="text-center space-y-2 sm:text-left flex flex-col max-sm:flex-row">
        <div class="space-y-0.5">
          <p class="text-lg text-black font-semibold">
            {user && user.username}
          </p>
        </div>
        {user && userId !== user.id && (
          <button
            type="button"
            onClick={FollowUpUser}
            class="px-4 py-1 text-sm text-blue-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-blue-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 max-sm:font-extralight max-sm:px-1"
          >
            {followLabel}
          </button>
        )}
      </div>
    </div>
  );
};
export default MomentUser;
