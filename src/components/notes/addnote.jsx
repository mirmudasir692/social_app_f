import { useEffect, useState } from "react";
import { get_my_note, post_note, update_note } from "../../api/notes";
import { useNavigate } from "react-router-dom";

const AddNote = () => {
  const [note, setNote] = useState("");
  const [update, setUpdate] = useState(false);
  const navigator = useNavigate();

  useEffect(() => {
    const get_saved_note = async () => {
      try {
        const response = await get_my_note();
        console.log("response", response);
        if (response && response.text) {
          setNote(response && response.text);
          setUpdate(true);
        }
      } catch (error) {
        console.log("eror", error);
      }
    };
    get_saved_note();
  }, []);

  const handle_note_post = async (e) => {
    e.preventDefault();
    try {
      let response;
      if (update === true) {
        response = await update_note(note);
      } else {
        response = await post_note(note);
      }
      console.log("response", response);
      setNote("");
      setUpdate(false);
      navigator("/notes")
    } catch (error) {
      console.log("error", error);
      setNote("");
      setUpdate(false);
    }
  };

  return (
    <div className="z-30 mx-auto mt-20 w-full">
      <form
        class="max-w-sm mx-auto"
        onSubmit={handle_note_post}
        encType="multimedia/part"
      >
        <div class="mb-5">
          <label
            for="text"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Note
          </label>
          <textarea
            type="text"
            id="text"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            rows="10"
            placeholder="Write Your Note"
            required
          />
        </div>

        <button
          type="submit"
          class="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-600 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default AddNote;
