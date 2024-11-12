import { useEffect, useState } from "react";
import { GetMoments } from "../../api/momentapi";
import Moment from "./moment";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Moments = () => {
  const [moment, setMoment] = useState(null);
  const [page, setPage] = useState(1);
  useEffect(() => {
    const fetchmoment = async () => {
      const response = await GetMoments(page);
      console.log("response", response)
      setMoment(response[0]);
    };
    fetchmoment();
  }, [page]);

  const IncreasePage = async () => {
    
    setPage((preValue) => preValue + 1);
  };

  const DecreasePage = async () => {
    setPage((preValue) => preValue - 1);
  };

  useEffect(() => {
    const handlekeydown = (event) => {
      if (event.key === "ArrowRight") {
        IncreasePage();
      } else if (event.key === "ArrowLeft") {
        DecreasePage();
      }
    };
    window.addEventListener("keydown", handlekeydown);
    return () => {
      window.removeEventListener("keydown", handlekeydown);
    };
  }, []);
  return (
    <div className="flex max-w-fit mx-auto">
      <button
        onClick={DecreasePage}
        className="my-auto text-3xl font-semibold p-5 absolute left-0 bottom-9 bg-slate-700 flex justify-center mx-auto rounded-full text-white hover:bg-slate-800 z-20"
      >
        <ArrowBackIosIcon fontSize="large" />
      </button>
      <Moment moment={moment && moment} />
      <button
        onClick={IncreasePage}
        className="my-auto text-3xl font-semibold p-5 absolute right-0 bottom-9 bg-slate-700 flex justify-center mx-auto rounded-full text-white hover:bg-slate-800"
      >
        <ArrowForwardIosIcon fontSize="large" />
      </button>
    </div>
  );
};
export default Moments;
