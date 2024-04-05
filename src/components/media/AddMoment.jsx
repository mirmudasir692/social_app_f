import { useState } from "react";
import { post_moment } from "../../api/momentapi";
import { useNavigate } from "react-router-dom";
import Spinner from "../microcomponents/spinner";

const AddMoment = () => {
  const [caption, setCaption] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [video, setVideo] = useState(null);
  const [archive, setArchive] = useState(false);
  const [videoPreviewUrl, setVideoPreviewUrl] = useState(null); // State to store video preview URL
  const [loading, setLoading] = useState(false);

  const navigator = useNavigate();

  const handle_video_change = (e) => {
    const selectedVideo = e.target.files[0];
    setVideo(e.target.files[0]);
    setVideoPreviewUrl(URL.createObjectURL(selectedVideo));
  };

  const upload_moment = async () => {
    try {
      const response = await post_moment({
        caption: caption,
        description: description,
        tags: tags,
        video: video,
        archive: archive,
      });
      if (response.status === 200) {
        navigator("/");
      }
    } catch (error) {
      console.log("error", error);
    }
    setLoading(false);
  };

  return (
    <div class="py-10 px-2 w-full flex max-md:flex-col">
      <div class="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-lg w-1/2 max-md:w-full">
        <div class="md:flex">
          <div class="w-full">
            <div class="p-4 border-b-2 flex justify-center">
              {loading && <Spinner />}
            </div>

            <div class={!loading && "p-3"}>
              <div class="mb-2">
                <span class="text-sm">Caption</span>
                <input
                  type="text"
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                  placeholder="write caption here"
                  class="h-12 px-3 w-full border-gray-200 border rounded focus:outline-none focus:border-gray-300"
                  required
                />

                <label
                  for="message"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Description
                </label>
                <textarea
                  id="message"
                  rows="4"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  class="block p-2.5 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 text-black"
                  placeholder="Write description here..."
                ></textarea>
                <textarea
                  id="message"
                  rows="4"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  class="block p-2.5 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 text-black"
                  placeholder="Give tags here"
                ></textarea>
              </div>

              <div class="mb-2">
                <div class="relative h-40 rounded-lg border-dashed border-2 border-gray-200 bg-white flex justify-center items-center hover:cursor-pointer">
                  <div class="absolute">
                    <div class="flex flex-col items-center ">
                      <i class="fa fa-cloud-upload fa-3x text-gray-200"></i>
                      <span class="block text-gray-400 font-normal">
                        Add Moment
                      </span>
                      <span class="block text-gray-400 font-normal">or</span>

                      <span class="block text-blue-400 font-normal">
                        Browse files
                      </span>
                    </div>
                  </div>{" "}
                  <input
                    type="file"
                    onChange={(e) => handle_video_change(e)}
                    accept=".mp4"
                    class="h-full w-full opacity-0"
                    name=""
                  />
                </div>
                <div class="flex justify-between items-center text-gray-400">
                  <div class="flex items-center">
                    <input
                      checked={archive}
                      id="checked-checkbox"
                      type="checkbox"
                      onChange={(e) => setArchive(e.target.checked)}
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      for="checked-checkbox"
                      class="ms-2 text-sm font-medium text-slate-600"
                    >
                      Archive
                    </label>
                  </div>
                </div>
              </div>

              <div class="mt-3 text-center pb-3">
                <button
                  onClick={(e) => upload_moment()}
                  class="w-full h-12 text-lg w-32 bg-blue-600 rounded text-white hover:bg-blue-700"
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {videoPreviewUrl && (
        <video controls className="w- my-2">
          <source src={videoPreviewUrl} type={video.type} />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};
export default AddMoment;
