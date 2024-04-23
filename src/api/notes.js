import AxiosInstance from "../assets/axios";
import { baseUrl } from "../conf/conf";

const get_notes = async () => {
  const url = `${baseUrl}/note/`;
  try {
    const response = await AxiosInstance.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { get_notes };
