import PopUp from "../chatsystem/messagepopup";
import Posts from "../posts/posts";
import Lander from "../story/storylander";

const Body = () => {
  return (
    <div>
      <Lander />
      <Posts />
      <PopUp />
    </div>
  );
};

export default Body;
