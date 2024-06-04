import { useEffect, useState } from "react";
import { get_saved_blogs } from "../../api/saved";
import Blog from "./blog";

const SavedBlogsContainer = () => {
  const [blogs, setBlogs] = useState([]);

  const filter_unsaved = (blog_id) => {
    setBlogs((preBlogs) => preBlogs.filter((blog) => blog.blog.id !== blog_id));
  };

  useEffect(() => {
    const fetch_saved_blogs = async () => {
      try {
        const response = await get_saved_blogs();
        setBlogs(response);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetch_saved_blogs();
  }, []);

  return (
    <div className="mx-auto flex flex-col gap-1">
      {blogs.length > 0 ? (
        blogs.map((blog) => (
          <Blog blog={blog} filter_unsaved={filter_unsaved} />
        ))
      ) : (
        <p className="font-bold text-2xl border-gray-500 p-4 text-gray-700 rounded-2xl bg-slate-300 mt-8">
          You Don't Have Saved Blogs Yet
        </p>
      )}
    </div>
  );
};

export default SavedBlogsContainer;
