import { useEffect, useState } from "react";
import { get_blogs } from "../../api/blog";
import Blog from "./blog";
import Paginator from "../paginations/paginator";

const Container = () => {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    const show_blogs = async () => {
      try {
        const response = await get_blogs(page);
        console.log("blogs", response);
        setBlogs(response);
      } catch (error) {
        console.log("errory", error);
      }
    };
    show_blogs();
  }, [page]);
  return (
    <div className="mx-auto max-lg:flex max-lg:flex-col gap-5 mt-5 w-4/12 max-lg:w-full h-screen overflow-auto">
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} />
      ))}
      <Paginator setPage={setPage} />
    </div>
  );
};
export default Container;
