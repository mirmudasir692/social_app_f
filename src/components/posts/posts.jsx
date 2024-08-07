import { useEffect, useState } from "react";
import Post from "./post";
import { get_posts } from "../../api/posts";
import Paginator from "../paginations/paginator";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [has_prev, setHas_prev] = useState(false);
  const [has_next, setHas_next] = useState(false);

  useEffect(() => {
    const fetch_posts = async () => {
      try {
        const response = await get_posts({ page });
        setPosts((prePosts) => [...prePosts, ...response.posts]);
        setHas_next(response.has_next);
        setHas_prev(response.has_previous);
      } catch (err) {
        console.log("error", err);
      }
    };
    fetch_posts();
    console.log("page num in posts", page);
  }, [page]);
  return (
    <div>
      <div className="flex flex-col mt-10 border-2 w-fit mx-auto gap-5 px-32 pt-6 rounded-2xl pb-6 border-dashed max-lg:px-0 ">
        {posts.map((post) => (
          <Post post={post} key={post.unique_id} />
        ))}
        <div className="">
          <Paginator
            setPage={setPage}
            has_next={has_next}
            has_prev={has_prev}
          />
        </div>
      </div>
    </div>
  );
};

export default Posts;
