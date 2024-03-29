import AxiosInstance from "../../assets/axios";
import { baseUrl } from "../../conf/conf";

const FollowUser = async (followed_user_id) => {
  const url = `${baseUrl}/accounts/follow/`;
  try {
    const data = {
      followed_user_id: followed_user_id,
    };
    const response = await AxiosInstance.post(url, data);
    return response.status;
  } catch (err) {
    console.log("something goes wrong while following", err);
  }
};
export { FollowUser };
