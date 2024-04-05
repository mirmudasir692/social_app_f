import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="bg-slate-300 flex flex-col mx-auto w-96 h-96 gap-2">
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
export default Menu;
