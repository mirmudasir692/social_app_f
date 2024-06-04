import { useEffect, useState } from "react";
import { user_id as selectedUserId } from "../../features/auth/authSlice";
import { useSelector } from "react-redux";
import { baseUrl } from "../../conf/conf";

const UserProfile = ({ group, add_to_sharelist, selectedGroups }) => {
  const [isChecked, setIsChecked] = useState(false);
  let user_id = useSelector(selectedUserId);
  user_id = parseInt(user_id);
  console.log(typeof user_id);
  console.log("groups", selectedGroups);
  const [user, setUser] = useState(null);
  useEffect(() => {
    group.user1.id === user_id ? setUser(group.user2) : setUser(group.user1);
  }, []);

  const handle_add_to_sharelist = (e) => {
    try {
      add_to_sharelist(group.name);
      setIsChecked((preValue)=>{
        !preValue
      });
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    setIsChecked(selectedGroups.some((g) => g.name === group.name));
  }, []);
  return (
    <div class="text-sm leading-6">
      <figure class="relative flex flex-col-reverse bg-slate-100 rounded-lg p-1 dark:bg-slate-800 dark:highlight-white/5">
        <figcaption class="flex items-center space-x-4">
          <img
            src={`${baseUrl}${user && user.profile_pic}`}
            alt=""
            class="flex-none w-14 h-14 rounded-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div class="flex-auto">
            <div class="text-base text-slate-900 font-semibold dark:text-slate-200">
              {user && user.username}
            </div>
          </div>
          <input
            type="checkbox"
            className="rounded-full"
            checked={isChecked}
            onChange={handle_add_to_sharelist}
          />
        </figcaption>
      </figure>
    </div>
  );
};

export default UserProfile;
