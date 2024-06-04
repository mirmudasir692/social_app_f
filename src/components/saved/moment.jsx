import { baseUrl } from "../../conf/conf";
import VideoJS from "../moments/videojs";

const Moment = ({ moment }) => {
  console.log("moment",moment &&  moment);
  return (
    <div>
      <img src={`${baseUrl}${moment && moment.moment__cover_pic}`} alt="" />
      <div class="flex items-center gap-4">
        <div class="font-medium dark:text-white">
          <div>{moment && moment.moment__publisher}</div>
          <div class="text-sm text-gray-500 dark:text-gray-400">
            Joined in August 2014
          </div>
        </div>
      </div>
    </div>
  );
};
export default Moment;
