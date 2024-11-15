import { useEffect, useRef, useState } from "react";
import { baseUrl, socketUrl } from "../../conf/conf";
import Message from "./message";
import { GetUserChat } from "../../api/chat/friendschat";
import { useSelector } from "react-redux";
import { user_id } from "../../features/auth/authSlice";

const ChatBox = ({ group_id, receiver }) => {
  const [chats, setChats] = useState([]);
  const [image, setImage] = useState(null);

  const [message, setMessage] = useState("");
  const chatEndRef = useRef(null);
  console.log(`socket url`, socketUrl);

  useEffect(() => {}, []);

  console.log("receiver", receiver);
  const sender_id = parseInt(useSelector(user_id));
  console.log("sender_id", sender_id);

  chats.map((chat) => {
    console.log("chat", chat.sender.id);
  });
  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && isImage(selectedFile)) {
      setImage(URL.createObjectURL(selectedFile));
    } else {
      alert("Please select a valid image file.");
    }
  };

  useEffect(() => {
    const get_user_chat = async () => {
      try {
        const response = await GetUserChat(group_id && group_id);
        console.log("response messages", response);
        setChats(response);
      } catch (error) {
        console.log("error", error);
      }
    };
    get_user_chat();
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behaviour: "smooth" });
  }, [chats]);
  return (
    <div class="flex flex-col h-full w-full bg-white px-4 py-6">
      <div class="flex flex-row items-center py-4 px-6 rounded-2xl shadow">
        <img
          class="flex items-center justify-center h-10 w-10 rounded-full bg-pink-500 text-pink-100"
          src={`${baseUrl}${receiver && receiver.profile_pic}`}
        />

        <div class="flex flex-col ml-3">
          <div class="font-semibold text-sm">
            {receiver && receiver.username}
          </div>
          <div class="text-xs text-gray-500">Active</div>
        </div>
        <div class="ml-auto">
          <ul class="flex flex-row items-center space-x-2">
            <li>
              <a
                href="#"
                class="flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-400 h-10 w-10 rounded-full"
              >
                <span>
                  <svg
                    class="w-5 h-5"
                    fill="currentColor"
                    stroke="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-400 h-10 w-10 rounded-full"
              >
                <span>
                  <svg
                    class="w-5 h-5"
                    fill="currentColor"
                    stroke="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    ></path>
                  </svg>
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-400 h-10 w-10 rounded-full"
              >
                <span>
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                    ></path>
                  </svg>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="h-full overflow-hidden py-4">
        <div class="h-full overflow-y-auto">
          <div class="flex flex-col">
            {chats.map((chat) => (
              <Message message={chat} />
            ))}
            <div class="col-start-6 col-end-13 p-3 rounded-lg"></div>
          </div>
        </div>
      </div>
      <div class="flex flex-row items-center">
        <div class="flex flex-row items-center w-full border rounded-3xl h-12 px-2">
          <button class="flex items-center justify-center h-10 w-10 text-gray-400 ml-1">
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
              ></path>
            </svg>
          </button>
          <div class="w-full">
            <input
              type="text"
              class="border border-transparent w-full focus:outline-none text-sm h-10 flex items-center"
              placeholder="Type your message...."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div class="flex flex-row">
            <input
              type="file"
              accept="image/*"
              class="flex items-center justify-center h-0 w-0 ml-1 mr-2"
              id="ImageFile"
              onChange={handleImageChange}
            />
            <label htmlFor="ImageFile">
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                ></path>
              </svg>
            </label>
          </div>
        </div>
        <div class="ml-6">
          <button class="flex items-center justify-center h-10 w-10 rounded-full bg-gray-200 hover:bg-gray-300 text-indigo-800">
            <svg
              class="w-5 h-5 transform rotate-90 -mr-px"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
