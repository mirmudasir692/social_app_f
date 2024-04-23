import { useEffect, useState } from "react";
import { GetChatList } from "../../api/chat/friendschat";
import { baseUrl } from "../../conf/conf";
import ChatBox from "./chatbox";
import NoteDrawer from "../notes/notedrawer";

const Messenger = () => {
  const [friends, setFriends] = useState([]);
  const [group_id, setGroup_id] = useState(0);
  const [receiver, setReceiver] = useState(null)

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
        console.log("response", response[0].last_message.timestamp);
        setFriends(response);
      } catch (error) {
        console.log("error", error);
      }
    };
    get_chat_list();
  }, []);
  return (
    <div class="h-screen w-full flex antialiased text-gray-200 bg-gray-900 overflow-hidden">
      <div class="flex-1 flex flex-col">
        <main class="flex-grow flex flex-row min-h-0">
          <section class="flex flex-col flex-none overflow-auto w-24 hover:w-64 group lg:max-w-sm md:w-2/5 transition-all duration-300 ease-in-out">
            <div class="header p-4 flex flex-row justify-between items-center flex-none">
              <div class="w-16 h-16 relative flex flex-shrink-0">
                <img
                  class="rounded-full w-full h-full object-cover"
                  alt="ravisankarchinnam"
                  src="https://avatars3.githubusercontent.com/u/22351907?s=60"
                />
              </div>
              <p class="text-md font-bold hidden md:block group-hover:block">
                Messenger
              </p>
              <a
                href="#"
                class="block rounded-full hover:bg-gray-700 bg-gray-800 w-10 h-10 p-2 hidden md:block group-hover:block"
              >
                <svg viewBox="0 0 24 24" class="w-full h-full fill-current">
                  <path d="M6.3 12.3l10-10a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1 0 1.4l-10 10a1 1 0 0 1-.7.3H7a1 1 0 0 1-1-1v-4a1 1 0 0 1 .3-.7zM8 16h2.59l9-9L17 4.41l-9 9V16zm10-2a1 1 0 0 1 2 0v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h6a1 1 0 0 1 0 2H4v14h14v-6z" />
                </svg>
              </a>
            </div>
            <div class="search-box p-4 flex-none">
              <form onsubmit="">
                <div class="relative">
                  <label>
                    <input
                      class="rounded-full py-2 pr-6 pl-10 w-full border border-gray-800 focus:border-gray-700 bg-gray-800 focus:bg-gray-900 focus:outline-none text-gray-200 focus:shadow-md transition duration-300 ease-in"
                      type="text"
                      value=""
                      placeholder="Search Messenger"
                    />
                    <span class="absolute top-0 left-0 mt-2 ml-3 inline-block">
                      <svg viewBox="0 0 24 24" class="w-6 h-6">
                        <path
                          fill="#bbb"
                          d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
                        />
                      </svg>
                    </span>
                  </label>
                </div>
              </form>
            </div>
          
          <NoteDrawer/>
            <button>
              <div class="contacts p-2 flex-1 overflow-y-scroll">
                {friends.map((friend) => (
                  <div
                  role="button"
                    key={friend.id}
                    onClick={(e) => {
                      e.preventDefault();
                      setGroup_id(friend.name);
                      setReceiver(friend.receiver)
                    }}
                  >
                    <div class="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg relative">
                      <div class="w-16 h-16 relative flex flex-shrink-0">
                        <img
                          class="shadow-md rounded-full w-full h-full object-cover"
                          src={`${baseUrl}${friend.receiver.profile_pic}`}
                          alt=""
                        />
                      </div>
                      <div class="flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block">
                        <p className="flex">{friend.receiver.username}</p>
                        <div class="flex items-center text-sm text-gray-600">
                          <div class="min-w-0">
                            <p className="truncate">
                              {
                                friend.last_message.message &&
                                friend.last_message.message.length > 30 // Check if message length is greater than 30
                                  ? friend.last_message.message.substring(
                                      0,
                                      20
                                    ) + "..." // If yes, truncate and add ellipsis
                                  : friend.last_message.message // If not, display the full message
                              }
                            </p>
                          </div>
                          <p class="ml-2 whitespace-no-wrap">
                            {formatTimeDifference(
                              friend.last_message.timestamp
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </button>
          </section>
          {group_id !== 0 && <ChatBox group_id={group_id} receiver={receiver && receiver}/>}
        </main>
      </div>
    </div>
  );
};
export default Messenger;
