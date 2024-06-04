import { useState } from "react";
import { baseUrl } from "../../conf/conf";

const Note = ({ note }) => {
  const [playaudio, setPlayAudio] = useState(false);
  console.log("note", note);
  return (
    <div
      className={`flex z-20 flex-col ${playaudio ? "hover:play-auto" : ""} mx-1`}
      onMouseEnter={() => setPlayAudio(true)}
      onMouseLeave={() => setPlayAudio(false)}
    >
      <div className="z-30">
        {playaudio && <audio src={`${baseUrl}${note.audio}`} autoPlay></audio>}
        <p
          data-modal-target="popup-modal"
          data-modal-toggle="popup-modal"
          class="block text-white bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-5 py-2.5 text-center cursor-pointer h-20"
          type="button"
        >
          {note.text}
        </p>
      </div>

      <div class="text-sm text-center mr-4 w-fit">
        <div class="p-1 border-4 border-blue-600 rounded-full">
          <div class="w-16 h-16 relative flex flex-shrink-0">
            <img
              class="shadow-md rounded-full w-full h-full object-cover"
              src={`${baseUrl}${note.user.profile_pic}`}
              alt=""
            />
          </div>
        </div>
        <p>{note.user.username}</p>
      </div>
    </div>
  );
};
export default Note;
