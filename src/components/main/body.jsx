import PopUp from "../chatsystem/messagepopup";
import Posts from "../posts/posts";
import Lander from "../story/storylander";

const Body = () => {
  return (
    <div className="mt-10">
      <Lander />
      <Posts />
      <PopUp />
    </div>
  );
};

export default Body;
