import { useEffect, useState } from "react";
import { baseUrl } from "../../conf/conf";
import { like_post } from "../../api/posts";

const Post = ({ post }) => {
  console.log("post", post);
  const [liked, setLiked] = useState(false);
  const [num_likes, setNum_likes] = useState(0);
  console.log("liked", post.like);

  useEffect(() => {
    setLiked(post && post.like);
    setNum_likes(post && post.num_likes);
  }, [post]);

  const handle_post_like = async () => {
    try {
      const response = await like_post({ post_id: post.unique_id });
      response.status === 200 ? setLiked((preValue) => !preValue) : "";
      response.data.data === true
        ? setNum_likes((preValue) => preValue + 1)
        : setNum_likes((preValue) => preValue - 1);
    } catch (err) {
      console.log("error", err);
    }
  };
  const handle_download = async () => {
    try {
      const response = await fetch(post.image, {
        mode: "cors",
      });
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = url;
      // Sanitize post.caption to be a valid file name
      const fileName = post.caption.replace(/[\/\\?%*:|"<>]/g, "_") + ".jpg"; // assuming the file is a jpg
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error("Download error", error);
    }
  };

  return (
    <div class="flex justify-center items-center w-96 border-2 p-5 rounded-lg max-lg:px-2">
      <div class="max-w-md container bg-white rounded-xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
        <div>
          <p class="ml-4 mt-1 mb-2 text-gray-700 hover:underline cursor-pointer font-semibold">
            {post.caption}
          </p>
        </div>
        <img class="w-full cursor-pointer h-96" src={`${post.image}`} alt="" />
        <div class="flex p-4 justify-between">
          <div class="flex items-center space-x-2">
            <img
              class="w-10 h-10 rounded-full"
              src={`${post.owner.profile_pic}`}
              alt={post.owner.username}
            />
            <h2 class="text-gray-800 font-bold cursor-pointer">
              {post.owner.username}
            </h2>
          </div>
          <div class="flex space-x-2">
            <div class="flex space-x-1 items-center text-2xl pt-1 pr-1">
              <button onClick={handle_download}>
                <i class="fa-solid fa-arrow-down"></i>
              </button>
            </div>
            <button onClick={() => handle_post_like()}>
              <div class="flex space-x-1 items-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class={`h-7 w-7 ${
                      liked ? "text-red-500" : ""
                    } hover:text-red-400 transition duration-100 cursor-pointer`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
                <span>{num_likes}</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
