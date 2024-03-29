import React, { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { fetch_stories } from "../../api/storyapi";
import { baseUrl } from "../../conf/conf";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import VideoJS from "../moments/videojs";

const ViewStory = () => {
  const { lodger_id } = useParams();
  const playerRef = React.useRef(null);

  const [story, setStory] = useState(null);
  const [page, setPage] = useState(1);
  const [has_previous, setHasPrevious] = useState(false);
  const [has_next, setHasNext] = useState(false);

  const videoJsOptions = useMemo(() => {
    return {
      autoplay: true,
      controls: false,
      responsive: true,
      fluid: true,
      loop: true,
      sources: [
        {
          src: `${baseUrl}/${story && story.file.endsWith("mp4")}`,
          type: "video/mp4",
        },
      ],
    };
  }, [story]);

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
    const show_stories = async () => {
      try {
        const response = await fetch_stories(lodger_id, page);
        console.log("res", response.data);
        // setStory(response);
      } catch (error) {
        console.log("err", error);
      }
    };
    show_stories();
  }, [page]);

  return (
    <div className="flex justify-center ">
      <button
        onClick={() => setPage((prePage) => prePage - 1)}
        className="my-auto mr-5"
      >
        <ArrowBackIosNewIcon fontSize="large" />
      </button>
      <div>
        {story &&
          story.file &&
          (story.file.endsWith("mp4") ? (
            <VideoJS
              options={videoJsOptions}
              onReady={handlePlayerReady}
              className="max-w-96"
            />
          ) : (
            <img
              className="max-w-96 h-1/2svh"
              src={`${baseUrl}/${story && story.file}`}
            />
          ))}
      </div>
      <button
        onClick={() => setPage((prePage) => prePage + 1)}
        className="my-auto ml-5"
      >
        <ArrowForwardIosIcon fontSize="large" />
      </button>
    </div>
  );
};
export default ViewStory;
