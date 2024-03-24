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
  return (
    <div className="flex max-w-fit mx-auto">
      <button
        onClick={DecreasePage}
        className="my-auto text-3xl font-semibold pr-10"
      >
        <ArrowBackIosIcon fontSize="large" />
      </button>
      <Moment moment={moment && moment} />
      <button onClick={IncreasePage} className="my-auto pl-10">
        <ArrowForwardIosIcon fontSize="large" />
      </button>
    </div>
  );
};
export default Moments;
