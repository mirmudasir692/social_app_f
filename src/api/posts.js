import AxiosInstance from "../assets/axios";
import { baseUrl } from "../conf/conf";

const upload_post = async ({ caption, image }) => {
  const url = `${baseUrl}/post/`;
  const formData = new FormData();
  formData.append("caption", caption);
  formData.append("image", image);
  const data = {
    caption: caption,
    image: image,
  };
  try {
    const response = await AxiosInstance.post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log("response", response);
    return response.status
  } catch (err) {
    console.log("error", err);
    throw err;
  }
};

const get_posts = async ({ page }) => {
  try {
    const url = `${baseUrl}/post/?page_num=${page}`;
    console.log("page num in posts.js", page);
    const response = await AxiosInstance.get(url);
    console.log("response", response);
    return response.status === 200 ? response.data : [];
  } catch (err) {
    throw err;
  }
};

const like_post = async ({ post_id }) => {
  try {
    const url = `${baseUrl}/post/like/`;
    const data = {
      post_id: post_id,
    };
    const response = await AxiosInstance.post(url, data);
    console.log("response", response.data.data);
    return response;
  } catch (err) {
    throw err;
  }
};

export { get_posts, like_post, upload_post };
