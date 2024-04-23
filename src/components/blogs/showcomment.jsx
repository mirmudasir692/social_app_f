import { baseUrl } from "../../conf/conf";

const ShowComment = ({ comment }) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  const commentTime = new Date(comment && comment.timestamp).toLocaleString(
    "en-US",
    options
  );
  return (
    <div class="mx-auto border px-6 py-4 rounded-lg max-h-48  w-3/4">
      <div class="flex items-center mb-6">
        <img
          src={`${baseUrl}${comment && comment.user.profile_pic}`}
          alt="Avatar"
          class="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <div class="text-lg font-medium text-gray-800">
            {comment && comment.user.username}
          </div>
          <div class="text-gray-500">
            <span className="text-sm">{comment && commentTime}</span>
          </div>
        </div>
      </div>
      <p class="text-lg leading-relaxed mb-6">{comment && comment.content}</p>
      <div class="flex justify-between items-center"></div>
    </div>
  );
};
export default ShowComment;
