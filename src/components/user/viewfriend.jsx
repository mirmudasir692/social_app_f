import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { get_friend_profile } from "../../api/user/userapi";

const ViewFriend = () => {
  let { user_id } = useParams();
  user_id = parseInt(user_id);
  console.log("user_id", typeof user_id);
  useEffect(() => {
    const fetch_user_profile = async () => {
      try {
        const response = await get_friend_profile(user_id);
        console.log("response", response);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetch_user_profile();
  }, []);
  return <div>this is friends component</div>;
};
export default ViewFriend;
