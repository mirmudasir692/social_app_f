import { save_blog } from "../../api/blog";
import { baseUrl } from "../../conf/conf";
import {Link} from "react-router-dom"

const Blog = ({ blog, filter_unsaved }) => {
  console.log("blog", blog.blog.title);

  const unsaved_blog = async (e) => {
    e.preventDefault();
    try {
      const response = await save_blog(blog && blog.blog.id);
      filter_unsaved(blog.blog.id);
      if (response == 200) {
      }
    } catch (error) {
      console.log("error occured while unsaving", error);
    }
  };

  return (
    <div class="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 w-96">
      <Link to={`/view_friend/${blog.blog.id}`}>
        <div class="flex items-center gap-4 bg-slate-300 p-5 rounded-full hover:bg-slate-400 w-1/2">
          <img
            class="w-10 h-10 rounded-full"
            src={`${baseUrl}${blog.blog.user.profile_pic}`}
            alt=""
          />
          <div class="font-medium text-black">
            <div>{blog.blog.user.username}</div>
          </div>
        </div>
      </Link>

      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {blog.blog.title}
      </h5>
      <p class="font-normal text-gray-700 dark:text-gray-400">
        {blog.blog.content}
      </p>
      <button onClick={unsaved_blog} className="text-red-400 text-2xl">
        <i class="fa-solid fa-bookmark"></i>
      </button>
    </div>
  );
};

export default Blog;
