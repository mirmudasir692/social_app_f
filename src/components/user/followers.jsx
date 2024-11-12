import { useEffect, useState } from "react";
import User from "./user_window";
import { get_all_follows } from "../../api/user/userapi";

const FollowersContainer = () => {
  const [followers, setFollowers] = useState([]);
  useEffect(() => {
    const get_followers = async () => {
      const response = await get_all_follows(true);
      console.log("response", response);
      setFollowers(response);
    };
    get_followers();
  }, []);
  return (
    <div className="h-auto">
      {followers.length > 0 ? (
        followers.map((user) => <User user={user} />)
      ) : (
        <p className="ml-auto flex justify-center text-2xl font-normal">
          Your follower list is empty
        </p>
      )}
    </div>
  );
};
export default FollowersContainer;
