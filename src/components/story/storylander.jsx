import { useEffect, useState } from "react";
import Sub_Story from "./substory";
import { fetch_lander_stories } from "../../api/storyapi";
import { Link } from "react-router-dom";

const Lander = () => {
  const [storylodgers, setStoryLodgers] = useState([]);
  useEffect(() => {
    const get_stories = async () => {
      try {
        const response = await fetch_lander_stories();
        console.log("err", response);
        console.log(Array.isArray(response));
        setStoryLodgers(response);
      } catch (error) {
        console.log("error", error);
      }
    };
    get_stories();
  }, []);

  return (
    <section class=" md:flex flex-col items-center w-lvw mx-auto overflow-x-auto">
      <div class=" pb-10">
        <h2 class="text-4xl font-bold text-center text-pink-700"></h2>
      </div>
      <ul class="md:flex items-center justify-center md:space-x-8">
        <li class="flex flex-col items-center space-y-2">
          <Link to="/addstory">
            <div class="bg-gradient-to-tr from-yellow-500 to-pink-600 rounded-full p-1 relative">
              <a
                class="block bg-white p-1 rounded-full transform transition hover:-rotate-12 duration-300"
                href="#"
              >
                <img
                  class="h-12 w-12 rounded-full"
                  src="https://i.ibb.co/yhh0Ljy/profile.jpg"
                  alt="image"
                />
              </a>
              <button class="transition duration-500 absolute bottom-0 right-0 bg-blue-700 h-8 w-8 rounded-full text-white text-2xl font-semibold border-4 border-white flex justify-center items-center hover:bg-blue-900">
                +
              </button>
            </div>
          </Link>
          <p>you</p>
        </li>
        {storylodgers.map((story_logder) => (
          <div key={story_logder.id}>
            <Sub_Story story_logder={story_logder} />
          </div>
        ))}
      </ul>
    </section>
  );
};
export default Lander;
