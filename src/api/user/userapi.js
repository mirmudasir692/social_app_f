import { baseUrl } from "../../conf/conf";
import axios, { Axios } from "axios";
import { store } from "../../app/store";
import { login_user, logout_user } from "../../features/auth/authSlice";
import AxiosInstance from "../../assets/axios";

const login_user_api = async ({
  data,
  changeErrorQuuery,
  changeLoadingState,
  changeErrorState,
  clear_inputs,
}) => {
  const loginurl = `${baseUrl}/accounts/login/`;
  changeLoadingState(true);
  try {
    const response = await axios.post(loginurl, data);
    if (typeof response.data === "string") {
      changeErrorState(true);
      changeErrorQuuery(response.data);
    } else if (typeof response.data === "object") {
      store.dispatch(login_user(response.data));
      return true;
    }
    changeLoadingState(false);
    clear_inputs();
  } catch (error) {
    changeLoadingState(false);
    changeErrorState(true);
    changeErrorQuuery(error && error.response && error.response.data);
    console.log("error occured", error.response.data);
    clear_inputs();
  }
};

const register_user = async ({
  username,
  name,
  mobile,
  password,
  dob,
  gender,
  email,
  profile_pic,
}) => {
  const url = `${baseUrl}/accounts/register/`;
  const formData = new FormData();
  console.log("dob", dob);

  // Append other form fields
  formData.append("username", username);
  formData.append("name", name);
  formData.append("mobile", mobile);
  formData.append("password", password);
  formData.append("dob", dob);
  formData.append("gender", gender);
  formData.append("email", email);

  try {
    const response = await axios.post(url, formData);
    store.dispatch(login_user(response.data));
    console.log("response", response);
    return response.status;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};

const get_user_profile = async () => {
  const url = `${baseUrl}/accounts/myaccount/`;
  try {
    const response = await AxiosInstance.get(url);
    console.log("profile info received", response.data);
    return response.data;
  } catch (error) {
    console.log("error while getting profile information", error);
  }
};

const get_friend_profile = async (user_id) => {
  const url = `${baseUrl}/accounts/friend_profile/?frnd_id=${user_id}`;
  try {
    const response = await AxiosInstance.get(url);
    return response.status === 200 ? response.data : [];
  } catch (error) {
    throw error;
  }
};

const search_users = async ({ username }) => {
  const url = `${baseUrl}/accounts/search/?param=${username}`;
  try {
    const response = await AxiosInstance.get(url);
    console.log("response", response.data);
    return response.data;
  } catch (err) {
    console.log("err", err);
    return [];
  }
};
const update_user = async ({ username, name, profile_pic, password, bio }) => {
  const formData = new FormData();
  formData.append("username", username);
  formData.append("name", name);

  if (profile_pic instanceof File || profile_pic instanceof Blob) {
    formData.append("picture", profile_pic);
  } else {
    console.error("Profile picture must be a file object.");
    return;
  }

  formData.append("password", password);
  formData.append("bio", bio);

  const url = `${baseUrl}/accounts/myaccount/`;

  try {
    const response = await AxiosInstance.patch(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log("response", response);
    return response;
  } catch (error) {
    console.error("error", error);
    throw error;
  }
};

const get_all_follows = async (followers_) => {
  const url = `${baseUrl}/accounts/my_followers/?followers=${followers_}`;
  try {
    const response = await AxiosInstance.get(url);
    console.log("response", response);
    return response.data;
  } catch (err) {
    console.log("error", err);
    return [];
  }
};

export {
  login_user_api,
  get_user_profile,
  register_user,
  get_friend_profile,
  search_users,
  get_all_follows,
  update_user,
};
