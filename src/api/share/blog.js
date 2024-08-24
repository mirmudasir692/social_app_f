import AxiosInstance from "../../assets/axios";
import { baseUrl } from "../../conf/conf";

const handle_sharing = async ({ blog_id, selectedGroups, moment_id }) => {
  const url = `${baseUrl}/share/`;
  const data = {
    blog_id: blog_id,
    group_name_list: selectedGroups,
    moment_id: moment_id,
  };
  try {
    console.log("data", data);
    const response = await AxiosInstance.post(url, data);
    return response.status;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};
export { handle_sharing };
