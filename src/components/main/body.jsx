import PopUp from "../chatsystem/messagepopup";
import Posts from "../posts/posts";
import Lander from "../story/storylander";

const Body = () => {
  return (
    <div className="mt-10 flex mx-auto">
      <Posts />
      <PopUp />
    </div>
  );
};

export default Body;
