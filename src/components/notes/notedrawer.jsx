import { useEffect, useState } from "react";
import Note from "./note";
import { get_notes } from "../../api/notes";
import AddNote from "./addnote";
const NoteDrawer = () => {
  const [notes, setNotes] = useState([]);
  const [addnote, setAddNote] = useState(false);

  useEffect(() => {
    const get_notes_handler = async () => {
      try {
        const response = await get_notes();
        console.log("repsonse", response);
        setNotes(response);
      } catch (error) {
        console.log("error", error);
      }
    };
    get_notes_handler();
  }, []);
  return (
    <div>
      {addnote && <AddNote />}
      <div class="active-users flex flex-row p-2 overflow-auto w-0 min-w-full">
        <div
          class="text-sm text-center mr-4 flex flex-col"
          role="button"
          onClick={() => setAddNote((preValue) => !preValue)}
        >
          <div className="z-30">
            <p
              data-modal-target="popup-modal"
              data-modal-toggle="popup-modal"
              class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 h-20"
              type="button"
            >
              Your Note
            </p>

            <div
              id="popup-modal"
              tabindex="-1"
              class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
            ></div>
          </div>
          <button
            class="flex flex-shrink-0 focus:outline-none block bg-gray-800 text-gray-600 rounded-full w-20 h-20"
            type="button"
          >
            <svg class="w-full h-full fill-current" viewBox="0 0 24 24">
              <path d="M17 11a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 0 1 0-2h4V7a1 1 0 0 1 2 0v4h4z" />
            </svg>
          </button>
          <p>Your Note</p>
        </div>

        {notes.map((note) => (
          <Note note={note} />
        ))}
      </div>
    </div>
  );
};
export default NoteDrawer;
