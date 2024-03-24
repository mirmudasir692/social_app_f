import { DeleteFruit } from "../../api/momentapi";
import { baseUrl } from "../../conf/conf";
import { user_id } from "../../features/auth/authSlice";
import { useSelector } from "react-redux";

const Box = ({ fruit, RemoveFruit }) => {
  const userId = useSelector(user_id);
  console.log(fruit && typeof user_id);
  if (fruit && fruit.user.id === user_id) {
    console.log("it is mine");
  }
  const formattedTimestamp = new Date(
    fruit && fruit.timespan
  ).toLocaleDateString();
  console.log("fruit", fruit);

  const DeleteFruitHandler = async () => {
    try {
      const response = await DeleteFruit(fruit.id);
      if (response === 200) {
        RemoveFruit(fruit.id);
      }
    } catch (error) {
      console.log("something went wrong", error);
    }
  };

  return (
    <div class="flex items-start mb-4">
      <img
        src={`${baseUrl}/${fruit && fruit.user.profile_pic}`}
        alt="Another User Avatar"
        class="w-8 h-8 rounded-full mr-2"
      />
      <div>
        <p class="text-gray-800 font-semibold">
          {fruit && fruit.user.username}
        </p>
        <p class="text-gray-600 max-w-[300px] overflow-hidden overflow-ellipsis break-words">
          {fruit && fruit.content}
        </p>
        <p class="text-gray-600 text-sm font-thin">
          {fruit && formattedTimestamp}
        </p>
      </div>
      {fruit && fruit.user.id == userId && (
        <button
          type="button"
          className="ml-auto text-xl pr-1"
          onClick={DeleteFruitHandler}
        >
          <span className="ml-auto text-xl pr-1">
            <i class="fa-solid fa-trash"></i>
          </span>
        </button>
      )}
    </div>
  );
};
export default Box;
