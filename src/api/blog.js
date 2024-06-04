import AxiosInstance from "../assets/axios";
import { baseUrl } from "../conf/conf";

const get_blogs = async (page_num) => {
  const url = `${baseUrl}/blog/?page_num=${page_num}`;
  try {
    const response = await AxiosInstance.get(url);
    return response.data;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};

const post_blog = async (title, content) => {
  const url = `${baseUrl}/blog/`;
  try {
    const data = {
      title: title,
      content: content,
    };
    const response = await AxiosInstance.post(url, data);
    return response;
  } catch (error) {
    throw error;
  }
};

const like_blog = async (blog_id) => {
  const url = `${baseUrl}/blog/like/?blog_id=${blog_id}`;
  try {
    const response = await AxiosInstance.get(url);
    return response;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};

const post_comment = async (content, blog_id) => {
  const url = `${baseUrl}/blog/comment/`;
  const data = {
    content: content,
    blog_id: blog_id,
  };
  try {
    const response = await AxiosInstance.post(url, data);
    return response;
  } catch (error) {
    throw error;
  }
};
const save_blog = async (blog_id) => {
  const url = `${baseUrl}/feature/blog/`;
  const data = {
    blog_id: blog_id,
  };
  try {
    const response = await AxiosInstance.post(url, data);
    return response.status;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};

const get_comments = async (blog_id, page_num) => {
  const url = `${baseUrl}/blog/comment/?blog_id=${
    blog_id && blog_id
  }&page_num=${page_num && page_num}`;
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

export {
  get_blogs,
  post_blog,
  like_blog,
  post_comment,
  get_comments,
  save_blog,
};
