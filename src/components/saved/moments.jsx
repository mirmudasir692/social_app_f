import { useState } from "react";
import { get_saved_moments } from "../../api/saved";
import Moment from "./moment";

const SavedMomentContainer = () => {
  const [moments, setMoments] = useState([]);

  useState(() => {
    const fetch_saved_moments = async () => {
      try {
        const response = await get_saved_moments();
        console.log("response", response);
        setMoments(response);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetch_saved_moments();
  }, []);

  return (
    <div>
      {moments.map((moment) => (
        <Moment moment={moment} key={moment.id} />
      ))}
    </div>
  );
};
export default SavedMomentContainer;
