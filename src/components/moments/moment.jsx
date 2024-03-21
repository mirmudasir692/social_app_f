import { baseUrl } from "../../conf/conf";
import VideoJS from "./videojs";
import React, { useState } from "react";
import MomentUser from "../user/momentuser";
import { Leap } from "../../api/momentapi";

const Moment = ({ moment }) => {
  const playerRef = React.useRef(null);
  const [is_leaped, setisLeaped] = useState(moment && moment.is_leaped);

  console.log("meoment", moment);

  const EnableLeaping = async () => {
    await Leap(moment && moment.id);
    setisLeaped((preValue) => !preValue);
  };

  const videoJsOptions = {
    autoplay: true,
    controls: false,
    responsive: true,
    fluid: true,
    loop: true,
    sources: [
      {
        src: `${baseUrl}/${moment && moment.video}`,
        type: "video/mp4",
      },
    ],
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };

  return (
    <div className="max-w-96 ml-auto mr-auto">
      <div className="mb-1">
        <MomentUser user={moment && moment.publisher} />
      </div>
      <div className="">
        <VideoJS
          options={videoJsOptions}
          onReady={handlePlayerReady}
          className="max-w-96"
        />
      </div>
      <div className="flex justify-between px-3 rounded-b-md">
        <button onClick={EnableLeaping}>
          <span
            className={`text-5xl pr-6 py-2 ${
              moment && (is_leaped ? "text-green-700" : "text-blue-500")
            }`}
          >
            <i class="fa-solid fa-leaf"></i>
          </span>
        </button>
        <span className="text-5xl p-2 px-6 py-2">
          <i class="fa-solid fa-comment"></i>
        </span>
        <span className="text-5xl p-2 px-6 py-2">
          <i class="fa-solid fa-bookmark"></i>
        </span>
        <span className="text-5xl p-2 pl-6 py-2">
          <i class="fa-solid fa-share"></i>
        </span>
      </div>
    </div>
  );
};
export default Moment;
