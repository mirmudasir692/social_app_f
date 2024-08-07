import { useState } from "react";
import Messenger from "./Messenger";

const PopUp = () => {
  const [messenger, SetMessenger] = useState(false);
  return (
    <div>
      <div className="fixed right-5 bottom-0 px-3 py-2 rounded-full hover:bg-gray-300">
        {
          <button
            className="text-4xl"
            onClick={() => SetMessenger((prevalue) => !prevalue)}
          >
            <i class="fa-regular fa-message"></i>
          </button>
        }
      </div>
      <div className="">{messenger && <Messenger />}</div>
    </div>
  );
};
export default PopUp;
