import { useParams } from "react-router-dom";
import User from "./searchuser";
import { useEffect, useState } from "react";
import { search_users } from "../../api/user/userapi";

const SearchPage = () => {
  const { username } = useParams();
  console.log("username", username);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const get_users = async () => {
      const response =await search_users({ username });
      console.log("res", response.data)
      setUsers(response.data);
    };
    get_users();
  }, [username]);
  return (
    <div class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto">
      <div class="flow-root">
        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700 flex flex-col gap-8">
          {users.map((user) => (
            <User key={user.id} user={user} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchPage;
