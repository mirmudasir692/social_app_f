import { useEffect, useState } from "react";
import { get_comments, post_comment } from "../../api/blog";
import ShowComment from "./showcomment";

const Comment = ({ blog_id }) => {
  const [content, setContent] = useState("");
  const [comPage, setComPage] = useState(1);
  const [comments, setComments] = useState([]);
  const [hasPrev, setHasPrev] = useState(false);
  const [hasNext, setHasNext] = useState(false);

  useEffect(() => {
    const fetch_comments = async () => {
      try {
        const response = await get_comments(blog_id, comPage);
        if (comments.length === 0) {
          // If there are no existing comments, set the fetched comments directly
          setComments(response.comments);
        } else {
          console.log("ppp", response);
          // Concatenate the new comments to the existing ones
          setComments((prevComments) => [
            ...prevComments,
            ...response.comments,
          ]);
        }

        setHasPrev(response.has_previous);
        setHasNext(response.has_next);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetch_comments();
  }, [comPage, blog_id]);

  const post_comment_handler = async (e) => {
    e.preventDefault();
    try {
      const response = await post_comment(content, blog_id && blog_id);
      console.log("repo", response);
      if (response.status === 200) {
        setComments([...comments, response.data]);
        setContent("");
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div>
      <div className="flex flex-col gap-3 mt-5 overflow-y-scroll max-h-96">
        {comments &&
          comments.map((comment) => (
            <ShowComment key={comment?.id} comment={comment} />
          ))}

        <div className="flex justify-center gap-10">
          {hasPrev && (
            <button
              onClick={() => setComPage((preValue) => preValue - 1)}
              className="border-2 py-2 px-6 hover:bg-gray-400 text-sm rounded-md"
            >
              Load Previous
            </button>
          )}
          {hasNext && (
            <button
              onClick={() => setComPage((preValue) => preValue + 1)}
              className="border-2 py-2 px-6 hover:bg-gray-400 text-sm rounded-md"
            >
              Load Next
            </button>
          )}
        </div>
      </div>
      <div class="flex mx-auto items-center justify-center shadow-lg mt-2 mb-4 w-full border-t-2">
        <div></div>
        <form
          class="w-full max-w-xl bg-white rounded-lg px-4 pt-2"
          onSubmit={(e) => post_comment_handler(e)}
        >
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-full px-3 mb-2 mt-2">
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                class="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-12 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white rounded-lg placeholder:text-gray-400"
                name="body"
                placeholder="Type Your Comment"
                required
              ></textarea>
            </div>
            <div class="w-full md:w-full flex items-start md:w-full px-3">
              <div class="-mr-1">
                <input
                  type="submit"
                  class="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-blue-500 hover:text-white"
                  value="Post Comment"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Comment;
