import { useEffect, useState } from "react";
import Note from "./note";
import { get_notes } from "../../api/notes";

const NotePage = () => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    const get_all_notes = async () => {
      const response = await get_notes();
      setNotes(response);
    };
    get_all_notes();
  }, []);

  return (
    <div class="container py-20 px-6 ml-auto">
      <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {notes.map((note) => (
          <Note note={note} />
        ))}
      </div>
    </div>
  );
};

export default NotePage;
