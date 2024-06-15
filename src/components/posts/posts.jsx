import { useEffect, useState } from "react";
import Post from "./post";
import { get_posts } from "../../api/posts";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [page_num, setPage_num] = useState(1);
  const [has_prev, setHas_prev] = useState(false);
  const [has_next, setHas_next] = useState(false);

  useEffect(() => {
    const fetch_posts = async () => {
      try {
        const response = await get_posts({ page_num });
        setPosts([...posts, ...response.posts]);
        setHas_next(response.has_next);
        setHas_prev(response.has_previous);
      } catch (err) {
        console.log("error", err);
      }
    };
    fetch_posts();
  }, []);
  return (
    <div className="flex flex-col mt-10 border-2 w-fit mx-auto gap-5 px-32 pt-6 rounded-2xl pb-6 border-dashed max-lg:px-0">
      {posts.map((post) => (
        <Post post={post} key={post.unique_id} />
      ))}
    </div>
  );
};

export default Posts;
