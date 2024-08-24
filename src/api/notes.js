import AxiosInstance from "../assets/axios";
import { baseUrl } from "../conf/conf";

const get_notes = async () => {
  const url = `${baseUrl}/note/`;
  try {
    const response = await AxiosInstance.get(url);
    return response.data;
  } catch (error) {
    return [];
  }
};

const post_note = async (note) => {
  const url = `${baseUrl}/note/`;
  const formData = new FormData();
  formData.append("text", note);
  try {
    const response = await AxiosInstance.post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};
const get_my_note = async () => {
  const url = `${baseUrl}/note/?my_note=${true}`;
  const response = await AxiosInstance.get(url);
  return response.data;
};

const update_note = async (note) => {
  const url = `${baseUrl}/note/`;
  const formData = new FormData();
  formData.append("text", note);
  try {
    const response = await AxiosInstance.patch(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log("response", response.data)
    return response.data;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};

export { get_notes, post_note, get_my_note, update_note };
