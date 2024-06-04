import { useEffect, useState } from "react";
import { baseUrl } from "../../conf/conf";
import VerifiedIcon from "@mui/icons-material/Verified";
import { like_blog, save_blog } from "../../api/blog";
import Comment from "./comment";
import { Link } from "react-router-dom";
import ShareBar from "../share/sharebar";

const Blog = ({ blog }) => {
  const [is_liked, setIs_liked] = useState(false);
  const [likes, setLikes] = useState(0);
  const [is_saved, setIs_saved] = useState(false);
  const [showComment, setShowComment] = useState(false);
  const [showShareBar, setShowBar] = useState(false);

  useEffect(() => {
    setIs_liked(blog && blog.is_liked);
    setLikes(blog && blog.likes);
    setIs_saved(blog && blog.is_saved);
  }, [blog]);

  const like_blog_handler = async () => {
    try {
      const response = await like_blog(blog && blog.id);
      if (response.status === 200) {
        setIs_liked((preValue) => !preValue);
        setLikes((preValue) => preValue);
        if (response.data.liked === true) {
          setLikes((preValue) => preValue + 1);
        } else {
          setLikes((preValue) => preValue - 1);
        }
      }
    } catch (error) {}
  };
  const toggle_states = async () => {
    setShowBar((preValue) => !preValue);
    setShowComment((preValue) => !preValue);
  };

  const save_this_blog = async () => {
    try {
      const response = await save_blog(blog && blog.id);
      if (response === 200) {
        setIs_saved((preValue) => !preValue);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div class="bg-white boder border-gray border-2 rounded-md shadow-xl max-h-11/12">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <article class="flex max-w-xl flex-col items-start justify-between">
            <div class="flex items-center gap-x-4 text-xs">
              <time datetime="2020-03-16" class="text-gray-500">
                {blog && new Date(blog.timestamp).toLocaleDateString()}
              </time>
              <a
                href="#"
                class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
              >
                Marketing
              </a>
            </div>
            <div class="group relative flex flex-col">
              <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                <a href="#">
                  <span class="absolute inset-0"></span>
                  {blog && blog.title}
                </a>
              </h3>
              <p class="mt-5 text-sm leading-6 text-gray-600 max-lg:w-auto lg:w-96">
                {blog && blog.content}
              </p>
            </div>
            <div class="relative mt-8 flex items-center gap-x-4">
              <img
                src={`${baseUrl}${blog && blog.user.profile_pic}`}
                alt=""
                class="h-10 w-10 rounded-full bg-gray-50"
              />
              <div class="text-sm leading-6">
                <p class="font-semibold text-gray-900">
                  <Link to={`/view_friend/${blog.user.id}`}>
                    <span class="absolute inset-0"></span>
                    {blog && blog.user.username}
                  </Link>
                  <span className="pl-2 text-sm text-blue-700">
                    <VerifiedIcon fontSize="small" />
                  </span>
                </p>
                {blog && blog.user.professional && (
                  <p class="text-gray-600">Professional Account</p>
                )}
              </div>
            </div>
          </article>
        </div>
        <div className="flex flex-row justify-around text-3xl mt-5 border-t-2 py-3">
          <span className="flex">
            <button
              onClick={like_blog_handler}
              className={`hover:bg-slate-200 px-6 py-1 rounded-lg max-md:text-xl ${
                blog && is_liked ? "text-red-500" : ""
              }`}
            >
              <i class="fa-solid fa-heart"></i>
            </button>
            <span className="text-sm relative mt-3 font-bold max-md:text-sm mb-2">
              {blog && likes}
            </span>
          </span>
          <button
            onClick={() =>
              setShowComment((prevValue) => {
                setShowBar(false);
                return !prevValue;
              })
            }
            className="hover:bg-slate-200 px-6 py-1 rounded-lg max-md:text-xl"
          >
            <i class="fa-solid fa-comment"></i>
          </button>
          <button
            onClick={save_this_blog}
            className={`hover:bg-slate-200 px-6 py-1 rounded-lg max-md:text-xl ${
              blog && (is_saved ? "text-red-500" : "")
            }`}
          >
            <i class="fa-solid fa-bookmark"></i>
          </button>
          <button
            onClick={() =>
              setShowBar((prevValue) => {
                setShowComment(false);
                return !prevValue;
              })
            }
            className="hover:bg-slate-200 px-6 py-1 rounded-lg max-md:text-xl"
          >
            <i class="fa-solid fa-share"></i>
          </button>
        </div>
      </div>
      {showComment && <Comment blog_id={blog && blog.id} />}
      {showShareBar && <ShareBar blog_id={blog && blog.id} blog_={true} />}
    </div>
  );
};
export default Blog;
