import { useEffect, useState } from "react";
import { GetFruits, PostFruit } from "../../api/momentapi";
import Box from "./fruitbox";

const FruitContainer = ({ moment_id }) => {
  const [page, setPage] = useState(1);
  const [fruits, setFruits] = useState([]);
  const [content, setContent] = useState("");

  useEffect(() => {
    const get_fruits = async () => {
      const response = await GetFruits(moment_id, page);
      //   console.log("fruites", response);
      setFruits(response);
    };
    get_fruits();
  }, []);
  useEffect(() => {
    console.log("ff", fruits);
  }, [fruits, moment_id]);

  const PostFruitHandler = async () => {
    const response = await PostFruit(moment_id, content);
    setContent("");
    console.log("comment added", response);
    if (response.status === 200) {
      setFruits((preValue) => [...preValue, response.data]);
    }
  };

  const RemoveFruit = async (fruit_id) => {
    setFruits((preFruits) => preFruits.filter((fruit) => fruit.id != fruit_id));
  };

  return (
    <div>
      <div className="border-2 h-96 min-w-96 overflow-y-auto mt-10">
        {fruits &&
          fruits.map((fruit) => (
            <Box key={fruit.id} fruit={fruit} RemoveFruit={RemoveFruit} />
          ))}
      </div>
      <div class="max-w-lg shadow-md">
        <form action="" class="w-full p-4">
          <label class="block mb-2">
            <span class="text-slate-900 font-light">Add a comment</span>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              class="block w-full mt-1 rounded h-12"
              rows="3"
            ></textarea>
          </label>
          <button
            type="button"
            onClick={() => PostFruitHandler()}
            class="px-3 py-2 text-sm text-blue-100 bg-blue-600 rounded"
          >
            Fruit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FruitContainer;
