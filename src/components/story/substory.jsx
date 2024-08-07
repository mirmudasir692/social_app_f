import { Link } from "react-router-dom";
import { baseUrl } from "../../conf/conf";

const Sub_Story = ({ story_logder }) => {
  console.log("story", story_logder);
  return (
    <Link to={`stories/${story_logder && story_logder.id}`}>
      <li class="flex flex-col items-center space-y-2 w-18">
        <div class="bg-gradient-to-tr from-yellow-500 to-pink-600 rounded-full p-1">
          <a
            class="block bg-white p-1 rounded-full transform transition hover:-rotate-12 duration-300"
            href="#"
          >
            <img
              class="h-12 w-12 rounded-full"
              src={`${baseUrl}${story_logder.user.profile_pic}`}
              alt="image"
            />
          </a>
        </div>
        <p>{story_logder.user.username}</p>
      </li>
    </Link>
  );
};
export default Sub_Story;
