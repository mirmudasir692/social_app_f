import { useEffect, useState } from "react";
import { GetMoments } from "../../api/momentapi";
import Moment from "./moment";

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
  return (
    <div className="">
      <Moment moment={moment && moment} />
    </div>
  );
};
export default Moments;
