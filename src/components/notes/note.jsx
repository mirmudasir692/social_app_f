import { useState } from "react";
import { baseUrl } from "../../conf/conf";
import User from "./user";
import { useSelector } from "react-redux";
import { user_id } from "../../features/auth/authSlice";
import { update_note } from "../../api/notes";

const Note = ({ note }) => {
  const [currentNote, setCurrentNote] = useState(note);
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState(note.text);
  const date = new Date(note.added_on);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
  const day = String(date.getDate()).padStart(2, "0");
  const formattedDate = `${year}/${month}/${day}`;
  const my_user_id = parseInt(useSelector(user_id));

  console.log("note", note);
  const update_note_board = async () => {
    setEdit(false);
    const response = await update_note(text);
    setCurrentNote(response);
  };

  return (
    <div class="w-full h-64 flex flex-col justify-between dark:bg-gray-800 bg-white dark:border-gray-700 rounded-lg border border-gray-400 mb-6 py-5 px-4">
      <div>
        <div class="text-gray-800 dark:text-gray-100 font-bold mb-3">
          <User user={currentNote.user} />
        </div>

        {edit ? (
          <input
            type="text"
            value={text}
            className="border border-2 rounded-r px-4 py-2 w-full"
            onChange={(e) => setText(e.target.value)}
          />
        ) : (
          <p class="text-gray-800 dark:text-gray-100 text-sm">
            {currentNote && currentNote.text}
          </p>
        )}
      </div>
      <div className="flex justify-between">
        <div>
          <div class="flex items-center justify-between text-gray-800 dark:text-gray-100">
            <p class="text-sm">{formattedDate}</p>
          </div>
        </div>
        {currentNote.user.id === my_user_id &&
          (edit ? (
            <button className="w-fit" onClick={update_note_board}>
              save
            </button>
          ) : (
            <button className="w-fit" onClick={() => setEdit(true)}>
              <i class="fa-regular fa-pen-to-square"></i>
            </button>
          ))}
      </div>
    </div>
  );
};
export default Note;
