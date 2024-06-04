import AxiosInstance from "../assets/axios";
import { baseUrl } from "../conf/conf";

const GetMoments = async (page) => {
  try {
    const response = await AxiosInstance.get(
      `${baseUrl}/moments/watch/?page=${page}`
    );
    return response.data;
  } catch (error) {
    console.log("error occured while getting moment", error);
  }
};
const post_moment = async ({
  caption,
  description,
  tags,
  video,
  archive,
  cover_pic,
}) => {
  const url = `${baseUrl}/moments/watch/`;
  const formData = new FormData();
  formData.append("caption", caption);
  formData.append("description", description);
  formData.append("tags", tags);
  formData.append("video", video);
  formData.append("cover_pic", cover_pic);

  try {
    const response = await AxiosInstance.post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data", // Important to set proper Content-Type for file uploads
      },
    });
    console.log("response", response);
    return response;
  } catch (err) {
    console.log("err", err);
    throw err;
  }
};

const Leap = async (moment_id) => {
  try {
    const data = {
      moment_id: moment_id,
    };
    const response = await AxiosInstance.post(`${baseUrl}/moments/leaf/`, data);
    return response.status;
  } catch (error) {
    console.log("error occurred while leaping", error);
  }
};

const GetFruits = async (moment_id, page) => {
  try {
    const response = await AxiosInstance.get(
      `${baseUrl}/moments/fruit/?moment_id=${moment_id}&page=${page}`
    );
    return response.data;
  } catch (error) {
    console.log("fruits", error);
    return [];
  }
};

const PostFruit = async (moment_id, content) => {
  try {
    const data = {
      moment_id: moment_id,
      content: content,
    };
    const response = await AxiosInstance.post(
      `${baseUrl}/moments/fruit/`,
      data
    );
    return response;
  } catch (error) {
    return;
  }
};

const DeleteFruit = async (fruit_id) => {
  try {
    const response = await AxiosInstance.delete(
      `${baseUrl}/moments/fruit/?fid=${fruit_id}`
    );
    return response.status;
  } catch (error) {
    return;
  }
};

const AddToBasket = async (moment_id) => {
  try {
    const data = {
      moment_id: moment_id,
    };
    const response = await AxiosInstance.post(
      `${baseUrl}/feature/basket/`,
      data
    );
    return response.status;
  } catch (error) {
    return;
  }
};

export {
  GetMoments,
  Leap,
  GetFruits,
  PostFruit,
  DeleteFruit,
  AddToBasket,
  post_moment,
};
