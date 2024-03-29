import { useState } from "react";
import { create_story } from "../../api/storyapi";
import { useNavigate } from "react-router-dom";

const AddStory = () => {
  const [caption, setCaption] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigator = useNavigate();

  const handle_file_change = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handle_story_creation = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await create_story(caption, selectedFile);
    if (response.status === 200) {
      navigator("/");
      setLoading(false);
      setCaption("");
      setSelectedFile(null);
    }
    setLoading(false);
  };

  return (
    <div class="flex items-center justify-center p-12">
      <div class="mx-auto w-full max-w-[550px] bg-white">
        <form
          class="py-6 px-9"
          onSubmit={handle_story_creation}
          method="POST"
          encType="multipart/form-data"
        >
          <div class="mb-5">
            <label
              for="email"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Add Caption
            </label>
            <input
              type="text"
              name="text"
              id="text"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              placeholder="Caption"
              class="w-full rounded-md border border-[#dfd3d3] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>

          <div class="mb-6 pt-4">
            <label class="mb-5 block text-xl font-semibold text-[#07074D]">
              Upload File
            </label>

            <div class="mb-8">
              <input
                type="file"
                name="file"
                id="file"
                class="sr-only"
                onChange={handle_file_change}
              />
              <label
                for="file"
                class="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
              >
                <div>
                  <span class="mb-2 block text-xl font-semibold text-[#07074D]">
                    Drop files here
                  </span>
                  <span class="mb-2 block text-base font-medium text-[#6B7280]">
                    Or
                  </span>
                  <span class="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]">
                    Browse
                  </span>
                </div>
              </label>
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
            >
              Send File
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddStory;
