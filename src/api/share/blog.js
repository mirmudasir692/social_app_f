import AxiosInstance from "../../assets/axios";
import { baseUrl } from "../../conf/conf";

const share_blog = async ({ blog_id, selectedGroups }) => {
  const url = `${baseUrl}/share/blog/`;
  const data = {
    blog_id: blog_id,
    group_name_list: selectedGroups,
  };
  try {
    console.log("data", data)
    const response = await AxiosInstance.post(url, data);
    return response.status;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};
export { share_blog };
