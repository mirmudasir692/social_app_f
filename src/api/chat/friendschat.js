import AxiosInstance from "../../assets/axios";
import { baseUrl } from "../../conf/conf";

const GetChatList = async () => {
  const url = `${baseUrl}/chat/chatbox/`;
  try {
    const response = await AxiosInstance.get(url);
    return response.status === 200 && response.data;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};

const GetUserChat = async (group_id) => {
  const encodedGroupId = encodeURIComponent(group_id);
  const url = `${baseUrl}/chat/message/?group_id=${encodedGroupId}`;

  console.log("group_id", group_id);
  // const url = `${baseUrl}/chat/message/?group_id=${group_id}`;
  try {
    const response = await AxiosInstance.get(url);
    return response.data;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};
const GetGroups = async () => {
  try {
    const url = `${baseUrl}/chat/list_groups`;
    const response = await AxiosInstance.get(url);
    return response.status === 200 ? response.data : [];
  } catch (error) {
    console.log("error", error);
    return [];
  }
};

export { GetChatList, GetUserChat, GetGroups };
