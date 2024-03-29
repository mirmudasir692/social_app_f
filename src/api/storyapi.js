import AxiosInstance from "../assets/axios";
import { baseUrl } from "../conf/conf";

const fetch_lander_stories = async () => {
  try {
    const url = `${baseUrl}/story/lodger/`;
    const response = await AxiosInstance.get(url);
    if (response.status === 200) {
      return response.data;
    } else {
      return [];
    }
  } catch (error) {
    console.log("error while getting stories", error);
    return [];
  }
};

const fetch_stories = async (lodger_id, page_num) => {
  const url = `${baseUrl}/story/?lodger_id=${lodger_id}&page_num=${page_num}`;
  try {
    const response = await AxiosInstance.get(url);
    return response;
  } catch (error) {
    console.log("error", error);
    return [];
  }
};

const create_story = async (caption, selectedFile) => {
  const url = `${baseUrl}/story/`;
  try {
    const formData = new FormData();
    formData.append("caption", caption);
    formData.append("file", selectedFile);

    const response = await AxiosInstance.post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response;
  } catch (error) {
    console.log("while uploading", error);
    throw error;
  }
};

export { fetch_lander_stories, fetch_stories, create_story };
