import { useEffect, useState } from "react";
import { baseUrl } from "../../conf/conf";
import ChatBox from "./messagechats";
import { GetChatList, GetGroups } from "../../api/chat/friendschat";

const Messenger = () => {
  const [friends, setFriends] = useState([]);
  const [group_id, setGroup_id] = useState(0);
  const [receiver, setReceiver] = useState(null);

  function formatTimeDifference(timestamp) {
    const messageDate = new Date(timestamp); // Convert timestamp string to Date object
    const now = new Date();
    const timeDifference = now - messageDate;

    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (years > 0) {
      return years + " year" + (years > 1 ? "s" : "") + " ago";
    } else if (months > 0) {
      return months + " month" + (months > 1 ? "s" : "") + " ago";
    } else if (days > 0) {
      return days + " day" + (days > 1 ? "s" : "") + " ago";
    } else if (hours > 0) {
      return hours + " hour" + (hours > 1 ? "s" : "") + " ago";
    } else if (minutes > 0) {
      return minutes + " minute" + (minutes > 1 ? "s" : "") + " ago";
    } else {
      return "just now";
    }
  }

  useEffect(() => {
    const get_chat_list = async () => {
      try {
        const response = await GetChatList();
        setFriends(response);
        const res = await GetGroups();
        console.log("res", res);
      } catch (error) {
        console.log("error", error);
      }
    };
    get_chat_list();
  }, []);
  return (
    <div class="flex flex-row antialiased text-gray-800 w-96 h-1/2 fixed right-16 bottom-12 border-2 shadow-2xl overflow-y-scroll rounded-lg">
      {group_id === 0 ? (
        <div class="flex flex-row w-96 flex-shrink-0 bg-gray-100 p-4">
          <div class="flex flex-col w-full h-full pl-4 pr-4 py-4 -mr-4">
            <div class="flex flex-row items-center">
              <div class="flex flex-row items-center">
                <div class="text-xl font-semibold">Messages</div>
                <div class="flex items-center justify-center ml-2 text-xs h-5 w-5 text-white bg-red-500 rounded-full font-medium">
                  5
                </div>
              </div>
              <div class="ml-auto">
                <button class="flex items-center justify-center h-7 w-7 bg-gray-200 text-gray-500 rounded-full">
                  <svg
                    class="w-4 h-4 stroke-current"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div class="mt-5"></div>
            <div class="mt-2">
              <div class="flex flex-col -mx-4">
                {friends.map((friend) => (
                  <div
                    role="button"
                    key={friend.id}
                    onClick={(e) => {
                      e.preventDefault();
                      setGroup_id(friend.name);
                      setReceiver(friend.receiver);
                    }}
                    class="relative flex flex-row items-center p-4"
                  >
                    <div class="absolute text-xs text-gray-500 right-0 top-0 mr-4 mt-3">
                      {formatTimeDifference(friend.last_message && friend.last_message.timestamp)}
                    </div>
                    <img
                      src={`${baseUrl}${friend.receiver.profile_pic}`}
                      class="flex items-center justify-center h-10 w-10 rounded-full bg-pink-500 text-pink-300 font-bold flex-shrink-0"
                    />
                    <div class="flex flex-col flex-grow ml-3">
                      <div class="text-sm font-medium">
                        {friend.receiver.username}
                      </div>
                      <div class="text-xs truncate w-40">
                        {
                          friend.last_message && friend.last_message.message &&
                          friend.last_message.message.length > 30 // Check if message length is greater than 30
                            ? friend.last_message.message.substring(0, 20) +
                              "..." // If yes, truncate and add ellipsis
                            : friend.last_message && friend.last_message.message // If not, display the full message
                        }
                      </div>
                    </div>
                    <div class="flex-shrink-0 ml-2 self-end mb-1">
                      <span class="flex items-center justify-center h-5 w-5 bg-red-500 text-white text-xs rounded-full">
                        5
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div class="h-full overflow-hidden relative pt-2">
              <div class="absolute bottom-0 right-0 mr-2">
                <button class="flex items-center justify-center shadow-sm h-10 w-10 bg-red-500 text-white rounded-full">
                  <svg
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <ChatBox group_id={group_id} receiver={receiver} />
      )}
    </div>
  );
};
export default Messenger;
