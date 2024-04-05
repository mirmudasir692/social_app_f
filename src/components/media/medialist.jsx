import { Link } from "react-router-dom";

const MediaList = () => {
  return (
    <div className="bg-slate-300 flex flex-col mx-auto w-1/3 h-96 gap-2 max-md:w-full">
      <h3 className="mx-auto underline font-extrabold text-xl text-gray-500 mb-32">
        Add Media
      </h3>
      <Link
        to="add_moment"
        className="mx-auto font-bold text-2xl hover:underline"
      >
        Add Moment
      </Link>
      <Link className="mx-auto font-bold text-2xl hover:underline">Blog</Link>
    </div>
  );
};
export default MediaList;
