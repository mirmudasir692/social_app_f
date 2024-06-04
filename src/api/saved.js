import AxiosInstance from "../assets/axios";
import { baseUrl } from "../conf/conf";

const get_saved_blogs = async () => {
  const url = `${baseUrl}/feature/blog/`;
  try {
    const response = await AxiosInstance.get(url);
    console.log(response);
    if (response.status === 200) {
      return response.data;
    } else {
      return [];
    }
  } catch (error) {
    throw error;
  }
};

const get_saved_moments = async () => {
  const url = `${baseUrl}/feature/basket/`;
  try {
    const response = await AxiosInstance.get(url);
    if (response.status === 200) {
      return response.data;
    } else {
      return [];
    }
  } catch (error) {
    throw error;
  }
};

export { get_saved_blogs, get_saved_moments };
