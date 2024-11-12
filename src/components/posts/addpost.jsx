import { useState } from "react";
import { upload_post } from "../../api/posts";

const AddPost = () => {
  const [success, setSuccess] = useState(false);
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);
  const handle_image_change = async (e) => {
    const files = e.target.files;

    // Check if any files were selected
    const selectedFile = files[0]; // Get the first selected file

    // Get the file name
    const fileName = selectedFile.name;

    // Define valid extensions
    const validExtensions = [".png", ".jpg", ".jpeg"];

    // Check if the file name ends with one of the valid extensions
    const isValidImage = validExtensions.some((extension) =>
      fileName.endsWith(extension)
    );

    // If the image is valid, create a URL for it and set it in state
    if (isValidImage) {
      //   const imageUrl = URL.createObjectURL(selectedFile);
      setImage(selectedFile); // Set the image URL in state
    } else {
      setImage(null); // Clear the image state if invalid
    }
  };
  const upload_post_handler = async () => {
    console.log("image", image);
    const response = await upload_post({ caption, image });
    if (response === 200) {
      setSuccess(true);
      setCaption("");
      setImage(null);
    }
  };

  return (
    <div className="mx-auto mt-20">
      {success && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6 text-green-500 mx-auto"
        >
          <path
            fillRule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
            clipRule="evenodd"
          />
        </svg>
      )}

      <div class="w-full max-w-xs">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-h-96">
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="caption"
            >
              Caption
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="caption"
              type="text"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              placeholder="Caption"
            />
          </div>
          <div class="mb-6">
            <label class="w-64 flex flex-col items-center px-4 py-0 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-grey">
              <svg
                class="w-8 h-8"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
              </svg>
              <span class="mt-2 text-base leading-normal">Select a file</span>
              <input
                type="file"
                class="hidden"
                onChange={(e) => handle_image_change(e)}
                accept="image/png, image/jpeg"
              />
            </label>
          </div>
          <div class="flex">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-auto"
              type="button"
              onClick={() => upload_post_handler()}
            >
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddPost;
