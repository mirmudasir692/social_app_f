import { useEffect, useState } from "react";

import { GetGroups } from "../../api/chat/friendschat";
import UserProfile from "./userprofile";
import { handle_sharing as HandleSharing } from "../../api/share/blog";

const ShareBar = ({ group_id, blog_id, moment_id, blog_, moment_ }) => {
  const [groups, setGroups] = useState([]);
  const [selectedGroups, setSelectedGroups] = useState([]);

  const handle_sharing = async () => {
    if (blog_) {
      try {
        console.log("blog_id", blog_id);
        const response = await HandleSharing({ blog_id, selectedGroups });
        console.log("response", response);
      } catch (error) {
        console.log("error", error);
      }
    } else if (moment_) {
      try {
        console.log("moment_id", moment_);
        const response = await share_blog({ moment_, selectedGroups });
        console.log("response", response);
      } catch (error) {
        console.log("error", error);
      }
    } else {
      alert("khali");
    }
  };

  useEffect(() => {
    const get_all_groups = async () => {
      try {
        const response = await GetGroups();
        console.log("response", response);
        setGroups(response);
      } catch (error) {
        console.log("error", error);
      }
    };
    get_all_groups();
  }, []);

  const add_to_sharelist = (group_name) => {
    if (selectedGroups.includes(group_name)) {
      // Remove the group if it exists
      const index = selectedGroups.indexOf(group_name);
      if (index > -1) {
        selectedGroups.splice(index, 1);
      }
    } else {
      // Add the group if it doesn't exist
      selectedGroups.push(group_name);
    }
  };

  console.log("group_id, blog_id, moment_id", group_id, blog_id, moment_id);
  return (
    <div className="w-full ml-auto z-20 max-h-52">
      {groups.map((group) => (
        <UserProfile
          group={group}
          add_to_sharelist={add_to_sharelist}
          selectedGroups={selectedGroups}
        />
      ))}
      <button
        type="button"
        onClick={() => handle_sharing()}
        className="w-20 bg-white flex justify-center text-xl border border-gray-800 rounded-md hover:bg-gray-400 ml-auto mt-5 py-2 max-sm:text-sm max-sm:py-1"
      >
        Send
      </button>
    </div>
  );
};
export default ShareBar;
