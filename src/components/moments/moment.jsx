import { baseUrl } from "../../conf/conf";
import VideoJS from "./videojs";
import React, { memo, useEffect, useMemo, useState } from "react";
import MomentUser from "../user/momentuser";
import { AddToBasket, Leap } from "../../api/momentapi";
import FruitContainer from "./fruitcontainer";

const Moment = React.memo(({ moment }) => {
  const playerRef = React.useRef(null);
  const [is_leafed, setisLeafed] = useState(false);
  const [showFruit, setShowFruit] = useState(false);
  const [isBasked, setIsBasked] = useState(false);

  console.log("jjjjjjjj liya", moment && moment);

  const [currentTime, setCurrentTime] = useState(0); // State to hold the current playback position

  useEffect(() => {
    if (moment) {
      setisLeafed(moment.is_leaped);
      console.log("yo", moment.is_basked);
      setIsBasked(moment.is_basked);
    }
  }, [moment]);

  // console.log("meoment", moment);
  // setisLeaped(true);

  const EnableLeaping = async () => {
    await Leap(moment && moment.id);
    setisLeafed((preValue) => !preValue);
  };

  const AddBasket = async () => {
    const response = await AddToBasket(moment.id);
    if (response === 200) {
      setIsBasked((preValue) => !preValue);
    }
  };

  const videoJsOptions = useMemo(() => {
    return {
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
  }, [moment]);

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
  useEffect(() => {
    setShowFruit(false);
  }, [moment]);

  const LeafStatus = useMemo(() => {
    return moment && is_leafed ? "text-green-700" : "text-blue-500";
  }, [moment, is_leafed]);

  return (
    <div className="flex flex-row-reverse">
      {showFruit && <FruitContainer moment_id={moment && moment.id} />}
      <div className="max-w-96 ml-auto mr-auto">
        <div className="mb-1">
          <MomentUser
            user={moment && moment.publisher}
            follow_status={moment && moment.is_followed}
          />
        </div>
        <div className="">
          <VideoJS
            options={videoJsOptions}
            onReady={handlePlayerReady}
            className="max-w-96"
          />
        </div>
        <div className="flex justify-between px-3 rounded-b-md">
          <button type="button" onClick={EnableLeaping}>
            <span className={`text-5xl pr-6 py-2 ${LeafStatus}`}>
              <i class="fa-solid fa-leaf"></i>
            </span>
          </button>
          <button
            type="button"
            onClick={() => setShowFruit((preValue) => !preValue)}
          >
            <span className="text-5xl p-2 px-6 py-2">
              <i class="fa-solid fa-apple-whole"></i>
            </span>
          </button>
          <button type="button" onClick={AddBasket}>
            <span
              className={`text-5xl p-2 px-6 py-2 ${
                moment && (isBasked ? "text-yellow-800" : "")
              }`}
            >
              <i class="fa-solid fa-basket-shopping"></i>
            </span>
          </button>
          <span className="text-5xl p-2 pl-6 py-2">
            <i class="fa-solid fa-share"></i>
          </span>
        </div>
      </div>
    </div>
  );
});
export default Moment;
