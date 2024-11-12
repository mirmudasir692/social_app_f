import { useEffect, useState } from "react";
import User from "./user_window";
import { get_all_follows } from "../../api/user/userapi";

const FollowingList = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const get_following = async () => {
      const response = await get_all_follows(false);
      setUsers(response);
    };
    get_following();
  }, []);
  return (
    <div>
      {users.length > 0 ? (
        users.map((user) => <User user={user} />)
      ) : (
        <p className="ml-auto flex justify-center text-2xl font-normal">
          Your following list is empty
        </p>
      )}
    </div>
  );
};
export default FollowingList;
