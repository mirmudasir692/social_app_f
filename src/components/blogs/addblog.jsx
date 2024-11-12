import { useState } from "react";
import { post_blog } from "../../api/blog";
import { useNavigate } from "react-router-dom";

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigator = useNavigate();

  const upload_blog = async (e) => {
    e.preventDefault();
    try {
      const response = await post_blog(title, content);
      if (response.status === 200) {
        navigator("/");
      }
      console.log("response", response);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div>
      <form
        class="lg:w-96 md:w-52 border-2 bg-slate-300 py-5 mt-20 h-96 rounded-xl"
        onSubmit={upload_blog}
      >
        <div class="mb-5 w-f">
          <label
            for="title"
            class="block mb-2 text-sm font-medium text-gray-900"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Title"
            required
          />
        </div>
        <div class="mb-5">
          <label
            for="description"
            class="block mb-2 text-sm font-medium text-gray-900"
          >
            Description
          </label>
          <textarea
            type="text"
            id="description"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 text-black dark:focus:border-blue-500"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex mx-auto"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddBlog;
