import Posts from "../posts/posts";
import Lander from "../story/storylander";

const Home = () => {
  return (
    <div className=" h-96 overflow-y-auto">
      <Lander />
      <Posts/>
      
    </div>
  );
};
export default Home;
